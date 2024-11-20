import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import { useNavigate } from "react-router-dom";

// IMGBB API key
const imgbbApiKey = "f9b69da6cdf4002afb9e4192014bcb70"; // replace with your actual key

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  //   const [submittedData, setSubmittedData] = useState(null);
  const navigate = useNavigate();

  // Validation schema
  const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),

    // phone: yup.string(),
    phone: yup.string().required("Phone number is required").matches(/^\+880\d{10}$/,
        "Phone number must start with +880 and have 10 digits"
      ),

    dob: yup.date().required("Date of Birth is required"),

    gender: yup.string().required("Gender is required"),

    profilePicture: yup.mixed().test("fileSize", "File size must be less than 2 MB", (value) =>
        value?.[0] ? value[0].size <= 2 * 1024 * 1024 : false
      ).test("fileType", "Unsupported file type", (value) =>
        value?.[0] ? ["image/jpeg", "image/png"].includes(value[0].type) : false
      ).required("Profile picture is required"),

    nid: yup.string().matches(/^(\d{10}|\d{17})$/, "NID must be 10 or 17 digits").required("NID is required"),

    nidCopy: yup.mixed().test("fileSize", "File size must be less than 2 MB", (value) =>
        value?.[0] ? value[0].size <= 2 * 1024 * 1024 : false
      ).test("fileType", "Invalid file type", (value) =>
        value?.[0]
          ? ["image/jpeg", "image/png", "application/pdf"].includes(
              value[0].type
            )
          : false
      ).required("NID copy is required"),

    maritalStatus: yup.string().required("Marital status is required"),

    nationality: yup.string().required("Nationality is required"),

    address1: yup.string().required("Address Line 1 is required"),

    languages: yup.array().min(1, "Please select at least one language").required("Languages are required"),

    city: yup.string().required("City is required"),

    state: yup.string().required("State/Province is required"),

    // postalCode: yup.string().required("Post Code is required"),
    postalCode: yup.string().matches(/^\d{4,6}$/, "Postal Code must be 4-6 digits").required("Postal Code is required"),
  });

  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  
  const uploadToImgBB = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    const response = await axios.post(
      `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
      formData
    );
    return response.data.data.url;
  };



const onSubmit = async (data) => {
    try {
      // Upload files to imgbb
      const profilePictureUrl = await uploadToImgBB(data.profilePicture[0]);
      const nidCopyUrl = await uploadToImgBB(data.nidCopy[0]);
  
      // Prepare final form data
      const formData = {
        ...data,
        profilePicture: profilePictureUrl,
        nidCopy: nidCopyUrl,
      };
  
      // Save data to localStorage (for display or debugging)
      localStorage.setItem("formData", JSON.stringify(formData));
  
      // Debug: Log submitted form data
      console.log("Submitted Form Data: ", formData);
  
      // Reset the form fields
      methods.reset();
  
      // Navigate to the display page
      navigate("/display");
  
      // Optionally clear data from localStorage after redirection
    //   localStorage.removeItem("formData");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            register={methods.register}
            errors={methods.formState.errors}
          />
        );
      case 2:
        return (
          <Step2
            register={methods.register}
            errors={methods.formState.errors}
          />
        );
      case 3:
        return (
          <Step3
            register={methods.register}
            errors={methods.formState.errors}
          />
        );
      default:
        return null;
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      methods.reset(JSON.parse(storedData));
    }
  };

  return (
    <div className="max-w-4xl p-8 mx-auto mt-8 space-y-8 bg-white rounded-lg shadow-lg">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {renderStep()}

          <div className="flex justify-between mt-4">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="px-4 py-2 text-white bg-gray-500 rounded"
              >
                Previous
              </button>
            )}
            {currentStep < 3 ? (
              <button
                type="button"
                onClick={() => setCurrentStep((prev) => prev + 1)}
                className="px-4 py-2 text-white bg-blue-500 rounded"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 text-white bg-green-500 rounded"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </FormProvider>

      {/* {submittedData && <DisplayData initialData={submittedData} />} */}
    </div>
  );
};

export default MultiStepForm;


import React from "react";
import InputField from "./TextInput";
import FileUpload from "./FileInput";
import RadioGroup from "./RadioGroup";


const Step1 = ({ register, errors }) => {
  return (
    <div>
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        Personal Details
      </h1>

      <InputField
        label="Full Name"
        type="text"
        name="fullName"
        register={register}
        errors={errors}
      />
      <InputField
        label="Email Address"
        type="email"
        name="email"
        register={register}
        errors={errors}
      />
      <InputField
        label="Phone Number"
        type="text"
        name="phone"
        register={register}
        errors={errors}
      />
      <InputField
        label="Date of Birth"
        type="date"
        name="dob"
        register={register}
        errors={errors}
      />

      <RadioGroup
        label="Gender"
        name="gender"
        options={[
          { label: "Male", value: "Male" },
          { label: "Female", value: "Female" },
          { label: "Other", value: "Other" },
        ]}
        register={register}
        errors={errors}
      />
      <FileUpload
        label="Upload Profile Picture"
        name="profilePicture"
        accept="image/jpeg, image/png"
        register={register}
        errors={errors}
      />
    </div>
  );
};

export default Step1;


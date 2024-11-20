import React from "react";
import InputField from "./TextInput";
import FileUpload from "./FileInput";
import RadioGroup from "./RadioGroup";
import SelectDropdown from "./SelectDropdown";
import MultiSelectDropdown from "./MultiSelectDropdown";

const Step2 = ({ register, errors }) => {
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
        Identification Details
      </h1>
      <InputField
        label="National ID Card Number"
        type="text"
        name="nid"
        register={register}
        errors={errors}
      />
      <FileUpload
        label="Upload NID Card Copy"
        name="nidCopy"
        accept="image/jpeg, image/png, application/pdf"
        register={register}
        errors={errors}
      />

      <RadioGroup
        label="Marital Status"
        name="maritalStatus"
        options={[
          { label: "Single", value: "Single" },
          { label: "Married", value: "Married" },
          { label: "Divorced", value: "Divorced" },
          { label: "Widowed", value: "Widowed" },
        ]}
        register={register}
        errors={errors}
      />

      <SelectDropdown
        label="Nationality"
        name="nationality"
        options={[
          { label: "Bangladesh", value: "Bangladesh" },
          { label: "Canada", value: "Canada" },
          { label: "Japan", value: "Japan" },
        ]}
        register={register}
        errors={errors}
      />

      <MultiSelectDropdown
        label="Languages Spoken"
        name="languages"
        options={[
          { label: "English", value: "English" },
          { label: "Hindi", value: "Hindi" },
          { label: "Spanish", value: "Spanish" },
          { label: "French", value: "French" },
        ]}
        register={register}
        errors={errors}
      />
    </div>
  );
};

export default Step2;

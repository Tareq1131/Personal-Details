import React from "react";
import InputField from "./TextInput";


const Step3 = ({ register, errors }) => {
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
        Address Details
      </h1>
      <InputField
        label="Address Line 1"
        type="text"
        name="address1"
        register={register}
        errors={errors}
      />
      <InputField
        label="Address Line 2 (Optional)"
        type="text"
        name="address2"
        register={register}
        errors={errors}
      />
      <InputField
        label="City"
        type="text"
        name="city"
        register={register}
        errors={errors}
      />
      <InputField
        label="State/Province"
        type="text"
        name="state"
        register={register}
        errors={errors}
      />
      <InputField
        label="Postal Code"
        type="text"
        name="postalCode"
        register={register}
        errors={errors}
      />
    </div>
  );
};

export default Step3;

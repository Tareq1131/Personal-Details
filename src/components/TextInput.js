
import React from "react";
import { useFormContext } from "react-hook-form";

const InputField = ({ label, type, name, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium">{label}</label>
      <input
        type={type}
        {...register(name)}
        {...rest}
        className={`w-full px-4 py-2 border rounded ${
          errors[name] ? "border-red-500" : "border-gray-300"
        }`}
      />
      {errors[name] && (
        <p className="mt-1 text-sm text-red-500">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default InputField;




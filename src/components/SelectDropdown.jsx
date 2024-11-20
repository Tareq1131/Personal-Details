import React from "react";

const SelectDropdown = ({ label, name, options, register, errors }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">{label}</label>
      <select
        {...register(name)}
        className={`w-full px-4 py-2 border rounded ${
          errors[name] ? "border-red-500" : "border-gray-300"
        }`}
      >
        <option value="">Select {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
      )}
    </div>
  );
};

export default SelectDropdown;

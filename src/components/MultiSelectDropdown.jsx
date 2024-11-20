
import React from "react";

const MultiSelectDropdown = ({ label, name, options, register, errors }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium">{label}</label>
      <select
        {...register(name)}
        multiple
        className={`w-full px-4 py-2 border rounded ${
          errors[name] ? "border-red-500" : "border-gray-300"
        }`}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[name] && (
        <p className="mt-1 text-sm text-red-500">{errors[name].message}</p>
      )}
    </div>
  );
};

export default MultiSelectDropdown;



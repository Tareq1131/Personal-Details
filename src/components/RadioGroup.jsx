import React from "react";

const RadioGroup = ({ label, name, options, register, errors }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">{label}</label>
      <div className="flex items-center">
        {options.map((option, index) => (
          <label key={index} className="mr-4">
            <input
              type="radio"
              value={option.value}
              {...register(name)}
              className="mr-1"
            />
            {option.label}
          </label>
        ))}
      </div>
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
      )}
    </div>
  );
};

export default RadioGroup;

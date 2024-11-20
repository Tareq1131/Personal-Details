
// import React from "react";
// import { useFormContext } from "react-hook-form";

// const FileUpload = ({ label, name, accept, ...rest }) => {
//   const {
//     register,
//     formState: { errors },
//   } = useFormContext();

//   return (
//     <div className="mb-4">
//       <label className="block mb-2 text-sm font-medium">{label}</label>
//       <input
//         type="file"
//         accept={accept}
//         {...register(name)}
//         {...rest}
//         className={`w-full px-4 py-2 border rounded ${
//           errors[name] ? "border-red-500" : "border-gray-300"
//         }`}
//       />
//       {errors[name] && (
//         <p className="mt-1 text-sm text-red-500">{errors[name]?.message}</p>
//       )}
//     </div>
//   );
// };

// export default FileUpload;

import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

const FileUpload = ({ label, name, accept, ...rest }) => {
  const [preview, setPreview] = useState(null);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium">{label}</label>
      <input
        type="file"
        accept={accept}
        {...register(name)}
        {...rest}
        onChange={handleFileChange}
        className={`w-full px-4 py-2 border rounded ${
          errors[name] ? "border-red-500" : "border-gray-300"
        }`}
      />
      {preview && (
        <div className="mt-2">
          <img
            src={preview}
            alt="Preview"
            className="object-contain w-20 h-20 border rounded max-h-60"
          />
        </div>
      )}
      {errors[name] && (
        <p className="mt-1 text-sm text-red-500">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default FileUpload;



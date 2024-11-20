
import React, { useState, useEffect } from "react";

const DisplayData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
    setLoading(false); // Set loading to false once data is fetched
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!data) {
    return <div>No data available.</div>;
  }

  return (
    <div className="max-w-4xl p-8 mx-auto mt-8 space-y-8 bg-white rounded-lg shadow-lg">
      <h2 className="mb-6 text-3xl font-bold text-center">Personal Details</h2>

      {/* Profile Header Section */}
      <div className="flex flex-col items-center p-6 space-y-6 rounded-lg shadow-lg md:flex-row md:items-start md:space-y-0 md:space-x-8 bg-gray-50">
        <div className="w-32 h-32 md:w-40 md:h-40">
          {data.profilePicture && (
            <img
              src={data.profilePicture}
              alt="Profile"
              className="object-cover w-full h-full rounded-full shadow-md"
            />
          )}
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-semibold text-gray-800">
            {data.fullName || "Full Name"}
          </h3>
          <p className="mt-1 text-gray-600">{data.email || "Email not provided"}</p>
          <p className="mt-2 text-gray-500">
            {data.dob ? new Date(data.dob).toLocaleDateString() : "Date of Birth not available"}
          </p>
        </div>
      </div>

      {/* Submitted Data Section */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {Object.entries(data).map(([key, value]) => {
          if (key === "profilePicture" || key === "nidCopy" || key === "dob") {
            return null; // Skip these fields as they are handled separately
          }

          return (
            <div
              key={key}
              className="p-4 transition-shadow duration-300 rounded-md shadow-md bg-gray-50 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-700">
                {key.replace(/([A-Z])/g, " $1").toUpperCase()}
              </h3>
              <p className="mt-2 text-gray-600 break-all">
                {Array.isArray(value) ? value.join(", ") : value}
              </p>
            </div>
          );
        })}
      </div>

      {/* NID Copy Section */}
      {data.nidCopy && (
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-700">NID Copy</h3>
          <img
            src={data.nidCopy}
            alt="NID"
            className="object-cover w-48 h-48 mt-2 rounded-md shadow-md"
          />
        </div>
      )}
    </div>
  );
};

export default DisplayData;

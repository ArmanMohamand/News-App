import React from "react";

const LoadingCardl = () => {
  return (
    <div className="w-80 h-[360px] bg-gray-800 rounded-lg animate-pulse p-4">
      <div className="w-full h-48 bg-gray-700 rounded mb-4"></div>
      <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-700 rounded w-full mb-4"></div>
      <div className="h-8 bg-gray-700 rounded w-1/2"></div>
    </div>
  );
};

export default LoadingCardl;

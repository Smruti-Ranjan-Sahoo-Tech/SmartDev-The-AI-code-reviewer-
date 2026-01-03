import React from "react";

const FullScreenLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        <p className="text-sm text-gray-400">Checking authentication...</p>
      </div>
    </div>
  );
};

export default FullScreenLoader;

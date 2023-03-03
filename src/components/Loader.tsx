import React from "react";

export const Loader = () => {
  return (
    <div className="flex flex-col gap-4 items-center h-[100vh] xl:h-[60vh] justify-center">
      <div className="custom-loader"></div>
      <h1 className="font-light tracking-wider animate-pulse">Loading...</h1>
    </div>
  );
};

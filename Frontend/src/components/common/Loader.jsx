import React, { useEffect } from "react";
import ReactDOM from "react-dom";

export const Loader = () => {
  useEffect(() => {
    const loaderContainer = document.getElementById("loader");
    if (!loaderContainer) {
      console.error("The 'loader' container is missing in the DOM.");
      return;
    }

    // Clean up on unmount
    return () => {
      loaderContainer.remove();
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-gray-950/80 z-[200]">
      <div className="fixed top-1/2 left-[45%] w-full h-full">
        <div className="custom-loader z-50"></div>
      </div>
    </div>,
    document.getElementById("loader")
  );
};

import React from "react";

const TheContactPopUp = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center bg-red-500">
      <div className=" bg-secondary-font-color fixed right-0 left-0 top-[20rem] max-w-md mx-auto z-40">
        <div>
          <h3>Contact</h3>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheContactPopUp;

import React from "react";
import { NavLink, useRouteError } from "react-router-dom";
import myimage from "../assets/myimage.svg";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-200">
        {error && <p className="mb-4 text-red-500 text-2xl">{error.data}</p>}

        <img
          className="w-80 h-72 mb-6 transition-transform duration-500 hover:scale-120"
          src={myimage}
          alt="Error"
        />

        <NavLink to="/">
          <button className="border-2 font-semibold border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 px-6 py-2 rounded-2xl">
            Go to Home
          </button>
        </NavLink>
      </div>
    </>
  );
}

export default ErrorPage;

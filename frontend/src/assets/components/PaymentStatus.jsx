import React from "react";
import { Link, useLocation } from "react-router-dom";

const PaymentStatus = () => {
  const query = new URLSearchParams(
           useLocation().search
  );
  const refrence = query.get("refrence");

  return (
    <>
    { refrence && <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-green-200 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              className="w-14 h-14 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-green-600 mt-6">
          Payment Successful!
        </h1>

        <p className="text-gray-600 mt-3">
          Thank you! Your payment has been completed successfully.
        </p>

        <div className="mt-6 bg-green-50 rounded-lg p-4">
          <p className="text-gray-700">
            <span className="font-semibold">Status:</span> Success 
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold">Transaction Id :{refrence}</span>
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold">Transaction:</span> Completed
          </p>
          
        </div>

        <Link to="/">
          <button className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition">
            Back to Home
          </button>
        </Link>
      </div>
    </div>}





 <div className="min-h-screen flex items-center justify-center bg-red-50 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full text-center">
        {/* Failed Icon */}
        <div className="mx-auto w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
          <span className="text-red-600 text-5xl font-bold">✕</span>
        </div>

        <h1 className="text-2xl font-bold text-red-600 mt-5">
          Payment Failed
        </h1>

        <p className="text-gray-600 mt-2">
          Your payment could not be completed. Please try again.
        </p>

        <Link to="/" className="block mt-6">
          <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-lg font-semibold transition">
            Try Again
          </button>
        </Link>
      </div>
    </div>



</>


  );
};

export default PaymentStatus;
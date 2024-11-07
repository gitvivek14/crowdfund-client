import React from "react";

const HNavbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Left Side - Search and Links */}
      <div className="flex items-center gap-6">
        <button className="flex items-center text-gray-600">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 5a7 7 0 017 7 7 7 0 01-7 7 7 7 0 01-7-7 7 7 0 017-7zm0 0v.01M21 21l-4.35-4.35"
            ></path>
          </svg>
          <span className="ml-1">Search</span>
        </button>
        <button className="text-gray-600">Donate <span className="text-xs">▼</span></button>
        <button className="text-gray-600">Fundraise <span className="text-xs">▼</span></button>
      </div>

      {/* Center - Logo */}
      <div className="text-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6IW2Rhw0_0gI3okYpmLf8XFayCUwRTyZ1YA&s" alt="SMARTPLEDGE" className="h-10 w-10 fill-transparent mix-blend-multiply" />
      </div>

      {/* Right Side - Links and Button */}
      <div className="flex items-center gap-6">
        <button className="text-gray-600">About <span className="text-xs">▼</span></button>
        <button className="text-gray-600">Sign in</button>
        <button className="px-4 py-2 text-white bg-green-600 rounded-full">
          Start a SMARTPLEDGE
        </button>
      </div>
    </nav>
  );
};

export default HNavbar;
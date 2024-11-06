import React from "react";
import Button from "@mui/material/Button";

function HeroSection() {
  return (
    <div className="relative h-screen w-full bg-cover bg-center text-white" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Navbar */}
      <header className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
        <h1 className="text-lg font-semibold">SMART PLEDGE ©</h1>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:underline">Login</a>
          <a href="#" className="text-white hover:underline">Contact</a>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Enter project, creators, and categories"
          className="mb-6 w-full max-w-lg p-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-800 focus:outline-none"
        />

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Empower Projects, Make A Difference With Blockchain Transparency.
        </h2>

        {/* Subheading */}
        <p className="mb-6 text-lg">
          Join A Secure, Transparent Platform Where You Can Support Meaningful Causes And Innovative Projects With Confidence.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4 mb-8">
          <Button variant="contained" color="primary">
            Donate to Charity
          </Button>
          <Button variant="contained" color="primary">
            Back a Project
          </Button>
        </div>

        {/* Scroll Down Arrow */}
        <div className="mt-8">
          <span className="text-2xl">▼</span>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
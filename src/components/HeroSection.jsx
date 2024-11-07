import React from "react";
import { Search, Shield, Percent } from "@mui/icons-material";
import CampaignList from "./CampaignCard";
import HNavbar from "./HeroNavbar";
import { Button } from "./ui/button";
import Signup from "./Signup";
import {herosection} from "../assets/index"
function HeroSection() {
  return (
    <div className=" absolute top-0 left-0 w-full text-gray-900">
      {/* Hero Section */}
      
      <div>
        <HNavbar/>
      </div>
      <section
        className="relative h-screen w-full  text-white z-20"
        style={{ backgroundImage: herosection }}
      >
        {/* <img src={herosection} style={{zIndex:-100}}></img> */}
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black opacity-70"></div> */}

        {/* Navbar */}
        {/* <header className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
          <h1 className="text-lg font-semibold">SMART PLEDGE ©</h1>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:underline">Login</a>
            <a href="#" className="text-white hover:underline">Contact</a>
          </div>
        </header> */}

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          {/* Search Input */}
          {/* <input
            type="text"
            placeholder="Enter project, creators, and categories"
            className="mb-6 w-full max-w-lg p-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-800 focus:outline-none"
          /> */}

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
            <Button variant="destructive">
              Donate to Charity
            </Button>
            <Button variant="secondary">
              Back a Project
            </Button>
          </div>

          {/* Scroll Down Arrow */}
          {/* <div className="mt-8">
            <span className="text-2xl">▼</span>
          </div> */}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-white text-center mx-auto">
        <h3 className="text-3xl font-bold mb-12">WHY CHOOSE US</h3>
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <Search fontSize="large" className="mb-4 text-black" />
            <h4 className="text-xl font-semibold mb-2">Transparent Transactions:</h4>
            <p className="text-gray-700 max-w-xs">
              Every donation and contribution is recorded on the blockchain, providing a clear, immutable record.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <Shield fontSize="large" className="mb-4 text-black" />
            <h4 className="text-xl font-semibold mb-2">Secure Smart Contracts:</h4>
            <p className="text-gray-700 max-w-xs">
              Funds are only released when pre-set milestones are met, reducing fraud and ensuring accountability.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <Percent fontSize="large" className="mb-4 text-black" />
            <h4 className="text-xl font-semibold mb-2">Low Fees:</h4>
            <p className="text-gray-700 max-w-xs">
              By eliminating intermediaries, we minimize transaction costs and maximize the funds that go directly to projects.
            </p>
          </div>
        </div>
      </section>

     <section className=" relative w-full h-full flex flex-col items-start justify-center mx-auto py-4 px-4">
      <div className="flex items-center justify-center absolute left-12 -top-10">
        <p className="text-black font-bold">
        Discover fundraisers inspired by what you care about
        </p>
      </div>
      <div>
      <CampaignList/>
      </div>

      {/* <div>
        <Signup/>
      </div> */}
      
      </section> 

      {/* Image Gallery Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-2 mx-auto">
        <img src="https://www.shutterstock.com/shutterstock/photos/2537240967/display_1500/stock-photo-young-woman-enjoying-music-with-headphones-holding-a-phone-in-hand-sitting-on-a-couch-in-a-cozy-2537240967.jpg" alt="Gallery Image 1" className="w-full h-32 object-cover" />
        <img src="https://www.shutterstock.com/shutterstock/photos/2537240967/display_1500/stock-photo-young-woman-enjoying-music-with-headphones-holding-a-phone-in-hand-sitting-on-a-couch-in-a-cozy-2537240967.jpg" alt="Gallery Image 2" className="w-full h-32 object-cover" />
        <img src="https://www.shutterstock.com/shutterstock/photos/2537240967/display_1500/stock-photo-young-woman-enjoying-music-with-headphones-holding-a-phone-in-hand-sitting-on-a-couch-in-a-cozy-2537240967.jpg" alt="Gallery Image 3" className="w-full h-32 object-cover" />
        <img src="https://www.shutterstock.com/shutterstock/photos/2537240967/display_1500/stock-photo-young-woman-enjoying-music-with-headphones-holding-a-phone-in-hand-sitting-on-a-couch-in-a-cozy-2537240967.jpg" alt="Gallery Image 4" className="w-full h-32 object-cover" />
        <img src="https://www.shutterstock.com/shutterstock/photos/2537240967/display_1500/stock-photo-young-woman-enjoying-music-with-headphones-holding-a-phone-in-hand-sitting-on-a-couch-in-a-cozy-2537240967.jpg" alt="Gallery Image 5" className="w-full h-32 object-cover" />
        <img src="https://www.shutterstock.com/shutterstock/photos/2537240967/display_1500/stock-photo-young-woman-enjoying-music-with-headphones-holding-a-phone-in-hand-sitting-on-a-couch-in-a-cozy-2537240967.jpg" alt="Gallery Image 6" className="w-full h-32 object-cover" />
        <img src="https://www.shutterstock.com/shutterstock/photos/2537240967/display_1500/stock-photo-young-woman-enjoying-music-with-headphones-holding-a-phone-in-hand-sitting-on-a-couch-in-a-cozy-2537240967.jpg" alt="Gallery Image 7" className="w-full h-32 object-cover" />
        <img src="https://www.shutterstock.com/shutterstock/photos/2537240967/display_1500/stock-photo-young-woman-enjoying-music-with-headphones-holding-a-phone-in-hand-sitting-on-a-couch-in-a-cozy-2537240967.jpg" alt="Gallery Image 8" className="w-full h-32 object-cover" />
      </section>

      {/* Footer Section */}
      {/* <footer className="bg-gray-900 text-white py-8">
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <div className="flex items-center max-w-md w-full">
            <TextField
              variant="filled"
              placeholder="Your email"
              className="bg-white rounded-l-md"
              fullWidth
              InputProps={{ disableUnderline: true }}
            />
            <Button variant="contained" color="primary" className="rounded-r-md">
              ➤
            </Button>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

export default HeroSection;
import React from "react";
import { Search, Shield, Percent } from "@mui/icons-material";
import CampaignList from "./CampaignCard";
import HNavbar from "./HeroNavbar";
import { Button } from "./ui/button";
import Signup from "./Signup";
import {herosection} from "../assets/index"
import { Check, ChevronsUpDown } from "lucide-react"
 
import { cn } from "@/lib/utils"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { InfiniteMovingCards } from "./MovingCards";
import { Link } from "react-router-dom";
 
const frameworks = [
  {
    value: "Just Launched",
    label: "Just Launched",
  },
  {
    value: "Charities",
    label: "Charities",
  },
  // {
  //   value: "nuxt.js",
  //   label: "Nuxt.js",
  // },
  // {
  //   value: "remix",
  //   label: "Remix",
  // },
  // {
  //   value: "astro",
  //   label: "Astro",
  // },
]
const HeroSection = ()=> {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];

  return (
    <div className=" absolute top-0 left-0 w-full text-gray-900">
      {/* Hero Section */}

      <div>
        <HNavbar />
      </div>
      <section
        className="relative h-screen w-full  text-white z-20"
        style={{
          backgroundImage: `url(${herosection})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'transparent',
        }}


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
            <Link to='/charities'>
            <Button variant="destructive">
              Donate to Charity
            </Button>
            </Link>
            <Link to="/projects">
            <Button variant="secondary">
              Back a Project
            </Button>
            </Link>
            
          </div>

          {/* Scroll Down Arrow */}
          {/* <div className="mt-8">
            <span className="text-2xl">▼</span>
          </div> */}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 px-4 bg-white text-center mx-auto">
        <div className="font-face-fm"> 
        <h1 className="scroll-m-20 text-4xl mb-10 font-extrabold tracking-tight lg:text-5xl ">WHY CHOOSE US</h1>
        </div>
      
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
      <div className="flex flex-col justify-items-start absolute left-12 -top-10 gap-2">
        <div>
        <p className="text-black font-bold">
        Discover fundraisers inspired by what you care about
        </p>
          </div>
        <div>
        
        </div>
        
      </div>
      <div>
      <CampaignList/>
      </div>

        {/* <div>
        <Signup/>
      </div> */}

      </section>

      {/* Image Gallery Section */}
      <section className="overflow-hidden">
        <div className="flex space-x-2 animate-scroll">
          {/* Row 1 */}
          <div className="flex min-w-full space-x-8 mb-4">
            <img src="https://www.shutterstock.com/image-photo/high-five-team-food-charity-600nw-2469643817.jpg" alt="Gallery Image 1" className="gallery-image" />
            <img src="https://www.socialtables.com/wp-content/uploads/2016/10/iStock-540095978.jpg" alt="Gallery Image 2" className="gallery-image" />
            <img src="https://www.eventbrite.com/blog/wp-content/uploads/2021/06/image13-min-768x432.webp" alt="Gallery Image 3" className="gallery-image" />
            <img src="https://www.nspcc.org.uk/globalassets/images/events/2024/hero-25219-exp-2024-01.jpg?width=600&mode=crop&anchor=middlecenter" alt="Gallery Image 4" className="gallery-image" />
            <img src="https://www.letsroam.com/explorer/wp-content/uploads/sites/10/2021/09/Planning-a-Charity-Event.jpg" alt="Gallery Image 5" className="gallery-image" />
          </div>
        </div>
        {/* <div className="flex space-x-2 animate-scroll delay-1000">

          <div className="flex min-w-full space-x-8 mb-4">
            <img src="https://www.daischina.org/-/media/dais-dalian/news-and-events/ah2a6584.jpg?h=400&w=600&rev=a20ec78d4f7a4e47846f6c5f13a6c13d&hash=024E78ED5DC353D3F8DC9E97D5E57EB9" alt="Gallery Image 6" className="gallery-image" />
            <img src="https://runabc.co.uk/images/2020/03/charity-run2-552235.jpg" alt="Gallery Image 7" className="gallery-image" />
            <img src="https://www.opportunityvillage.org/wp-content/uploads/2023/09/pet-rescue-fundraising-ideas-5.jpg" alt="Gallery Image 8" className="gallery-image" />
            <img src="https://www.classy.org/wp-content/uploads/2023/03/blog-hero-fundraising-ideas-opt.png" alt="Gallery Image 9" className="gallery-image" />
            <img src="https://nonprofithub.org/wp-content/uploads/2022/05/Tech-Fundraising-blog-2.png" alt="Gallery Image 10" className="gallery-image" />
          </div>
        </div> */}
      </section>

      {/* Image Gallery Section */}
      {/* <section className="w-full h-full mx-auto -mt-5">
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
      </section> */}
      {/* Footer Section */}
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6IW2Rhw0_0gI3okYpmLf8XFayCUwRTyZ1YA&s" className="h-8 me-3" alt="SmartPledge Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SmartPledge</span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="/" className="hover:underline">SmartPledge</a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" className="hover:underline">About</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://github.com/Jain-Sameer/crowdfund-client" className="hover:underline">Github</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">SmartPledge™</a>. All Rights Reserved.</span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </a>
              {/* Add additional social media icons in similar fashion */}
            </div>
          </div>
        </div>
      </footer>
      



    </div>
  );
}

export default HeroSection;
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
        <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Happening WorldWide..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          {/* <CommandInput placeholder="Search framework..." /> */}
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
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
      <section className="w-full h-full mx-auto -mt-5">
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
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
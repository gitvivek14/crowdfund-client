import { useState } from "react";
import { CalendarIcon, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-[#1A1A23] shadow border-b border-[#2A2A35] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {/* Replace with your actual logo */}
              {/* <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16V12M12 8h.01" />
              </svg> */}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6IW2Rhw0_0gI3okYpmLf8XFayCUwRTyZ1YA&s"
                className="w-10"
              ></img>
              <span className="ml-2 text-xl font-bold text-white">
                SMARTPLEDGE
              </span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="#"
                className="text-gray-300 hover:text-white inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                About
              </a>
              <Link
                to="/home"
                className="text-gray-300 hover:text-white inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                <HoverCard>
                  <HoverCardTrigger>Donate</HoverCardTrigger>
                  <HoverCardContent>
                    Discover Fundraisers to Support 🤝
                  </HoverCardContent>
                </HoverCard>
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              className="text-primary bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 mr-2"
              onClick={() => navigate("/sign-in")}
            >
              Login
            </button>
            <button
              className="px-4 py-2 text-white
             bg-green-600 rounded-full hover:bg-green-700 transition-colors"
              onClick={() => navigate("/home")}
            >
              Start a SMARTPLEDGE
            </button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`sm:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="text-gray-300 block pl-3 pr-4 py-2 text-base font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-primary block pl-3 pr-4 py-2 text-base font-medium"
          >
            Donate
          </a>
        </div>
        <div className="pt-4 pb-3 border-t border-muted">
          <div className="flex items-center px-4">
            <button className="text-gray-300 bg-background hover:bg-[#1c1c26]  hover:text-white inline-flex items-center  text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 mr-2 w-full justify-start">
              Login
            </button>
          </div>
          <div className="mt-3 px-4">
            <button
              className="w-full px-4 py-2 text-white
             bg-green-600 rounded-full hover:bg-green-700 transition-colors"
              onClick={() => navigate("/home")}
            >
              Start a SMARTPLEDGE
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

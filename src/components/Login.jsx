import { useState } from 'react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Link, useNavigate } from 'react-router-dom'
import { useToast } from '@/hooks/use-toast'
import { Separator } from './ui/separator'
import { SignIn } from '@clerk/clerk-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { toast } = useToast()
    const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()
    toast({
        variant:"default",
        title: "बधाई🎊🎊🎉 Login Successfull",
      })
    console.log('Form submitted:', { email, password })
    navigate("/home")
  }
  const handleGoogleLogin = () => {
    // Handle Google login logic here
    toast({
      variant:"default",
      title: "😱 Not Implemented",
    })
    console.log('Google login initiated')
  }

  const handleSignInSuccess = () => {
    // Redirect to the home page after successful sign-in
    navigate("/home");
  };

  const handleSignInError = (error) => {
    console.error("Sign-in failed:", error);
    alert("Login failed. Please try again.");
  };
  return (
    <div className="min-h-screen bg-[#13131A] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-[#1A1A23] text-white border-[#2A2A35] p-6 rounded-lg shadow-md">
        <div className="flex justify-center pt-4 pb-6">
          <div className="w-24 h-24 relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6IW2Rhw0_0gI3okYpmLf8XFayCUwRTyZ1YA&s"
              alt="Company Logo"
              className="rounded-full bg-white p-2"
            />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
        <p className="text-gray-400 text-center mb-6">
          Log in to continue
        </p>
        <SignIn
        afterSignOutUrl='/'
        fallbackRedirectUrl='/home'
        path='/sign-in'
        />
        <div className="text-center mt-4">
          <p className="text-sm text-gray-400">
            Don't have an account?{" "}
            <a href="/signup" className="text-green-500 hover:text-green-400">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
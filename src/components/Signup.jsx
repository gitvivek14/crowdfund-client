import { useState } from 'react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Link, useNavigate } from 'react-router-dom'
import { useToast } from '@/hooks/use-toast'
import { SignUp } from '@clerk/clerk-react'

export default function SignupPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const { toast } = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, password })
    toast({
        variant:"default",
        title: "बधाई🎊🎊🎉 Signup Successfull",
      })
    navigate("/login")
  }
  const handleSignUpSuccess = (user) => {
    toast({
      variant: "default",
      title: "बधाई🎊🎊🎉 Signup Successful",
      description: `Welcome, ${user.firstName || "User"}!`,
    });
    // Navigate to login or dashboard after signup
    navigate("/sign-in");
  };

  const handleSignUpFailure = (error) => {
    toast({
      variant: "destructive",
      title: "Signup Failed",
      description: error.message || "An error occurred during signup",
    });
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
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">Create an Account</h2>
          <p className="text-gray-400">Sign up to get started with our service</p>
        </div>
        <SignUp
        fallbackRedirectUrl='/home'
        path='/sign-up'
        routing='path'
        forceRedirectUrl='/home'
      

          // afterSignUp={(user) => handleSignUpSuccess(user)}
          // appearance={{
          //   elements: {
          //     form: "bg-[#2A2A35] text-white",
          //     input: "bg-[#2A2A35] border-[#3A3A45] text-white",
          //     label: "text-sm font-medium text-gray-200",
          //     button: "bg-green-600 hover:bg-green-700 text-white",
          //   },
          // }}
        />
      </div>
    </div>
  );
}
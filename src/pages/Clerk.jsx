import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

export default function Clerk() {
  return (
    <div className='bg-white'>
    <p>Hello World!</p>
    <SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </div>
  )
}
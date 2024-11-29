import React, { useState, useEffect } from "react";

import { DisplayCampaigns } from "../components";
import { useStateContext } from "../context/index";
import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const {user,isSignedIn,isLoaded} = useUser()
  const { address, contract, getCampaigns , connect} = useStateContext();

  console.log("usrr",user)
  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    // console.log(data)
    setIsLoading(false);
  };
  
  // useEffect(() => {
  //   if (!isLoaded) return; // Don't run logic until Clerk is finished loading the user

  //   if (!isSignedIn) {
  //     // Redirect to sign-in if the user is not signed in
  //     return <Navigate to="/sign-in" />;
  //   }

  //   // If user is signed in and contract is available, fetch campaigns
  //   if (contract) fetchCampaigns();
  // }, [isLoaded, isSignedIn, contract]);  // Only trigger when isLoaded, isSignedIn or contract changes

  // // Show loading until isLoaded is true
  // if (!isLoaded) {
  //   return <div>Loading...</div>;  // Show loading state while data is loading
  // }

  // // Redirect to sign-in if not signed in
  // if (!isSignedIn) {
  //   return <Navigate to="/sign-in" />;
  // }


  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);


  console.log("signed",isSignedIn)
  // if(!isSignedIn){
  //   return <Navigate to='/sign-up'/>
  // }

  // if(!isLoaded){
  //   return <div>Loading...</div>
  //   // return <Navigate to='/sign-in' />
  // }
  // if(!isSignedIn){
  //   return <Navigate to='/sign-up'/>
  // }


  return (
    <DisplayCampaigns
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
      user={user}
    />
  );
};

export default Home;

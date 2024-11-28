import { useState, useEffect } from "react";

import { DisplayCampaigns } from "../components";
import { useStateContext } from "../context/index";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns, connect } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    const dataagain = data.filter(campaign => campaign.category.toLowerCase() == "project")
    setCampaigns(dataagain);
    setIsLoading(false);
  };
  useEffect(() => {
    connect()
  }, [])
  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <DisplayCampaigns
      title="Projects"
      isLoading={isLoading}
      campaigns={campaigns}
    />
  );
};

export default Projects;

import { useState, useEffect } from "react";
import { useStateContext } from "@/context";

const CampaignCard = ({ image, donations, title, amountRaised, target, category }) => {
  return (
    <div className="w-full sm:w-[48%] md:w-[30%] bg-white rounded-lg overflow-hidden shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 text-xs rounded">
          {donations[0].length} donations
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-md font-semibold">{title}</h3>
        <div className="flex items-center mt-2 mb-1">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-500 h-2.5 rounded-full"
              style={{ width: `${amountRaised*100/target > 100 ? 100 : amountRaised*100/target}%` }}
            ></div>
          </div>
        </div>
        <p className="text-sm font-medium text-gray-600 mt-1">{amountRaised} ETH raised</p>
      </div>
    </div>
  );
};


const CampaignList = () => {
  const { getDataForStart } = useStateContext(); // Assume this is fetching data from a context
  const [campaigns, setCampaigns] = useState([  // Default campaigns state
    {
      image: "https://static.wixstatic.com/media/ac3d3c_7596c9e6c40949d98032498fc149ef53~mv2.jpg/v1/fill/w_639,h_382,al_c,q_80/SBP%2520FORMAT%2520-%2520HELP_edited.jpg",
      donations: "100",
      title: "Help an NGO",
      amountRaised: 0.25,
      target: 1.25,
    },
    {
      image: "https://static.wixstatic.com/media/ac3d3c_7596c9e6c40949d98032498fc149ef53~mv2.jpg/v1/fill/w_639,h_382,al_c,q_80/SBP%2520FORMAT%2520-%2520HELP_edited.jpg",
      donations: "100",
      title: "Help an NGO",
      amountRaised: 0.35,
      target: 0.5,
    },
    {
      image: "https://static.wixstatic.com/media/ac3d3c_7596c9e6c40949d98032498fc149ef53~mv2.jpg/v1/fill/w_639,h_382,al_c,q_80/SBP%2520FORMAT%2520-%2520HELP_edited.jpg",
      donations: "100",
      title: "Help an NGO",
      amountRaised: 0.4,
      target: 1,
    },
    {
      image: "https://static.wixstatic.com/media/ac3d3c_7596c9e6c40949d98032498fc149ef53~mv2.jpg/v1/fill/w_639,h_382,al_c,q_80/SBP%2520FORMAT%2520-%2520HELP_edited.jpg",
      donations: "100",
      title: "Help an NGO",
      amountRaised: 5,
      target: 10,
    },
    {
      image: "https://static.wixstatic.com/media/ac3d3c_7596c9e6c40949d98032498fc149ef53~mv2.jpg/v1/fill/w_639,h_382,al_c,q_80/SBP%2520FORMAT%2520-%2520HELP_edited.jpg",
      donations: "100",
      title: "Help an NGO",
      amountRaised: 13,
      target: 20,
    },
  ]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const data = await getDataForStart(); 
        setCampaigns([...campaigns, ...data]);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      } finally {
        setLoading(false); // Stop loading state
      }
    };
    
    fetchCampaigns();
  }, [getDataForStart]); // Run effect when `getDataForStart` changes
  
  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator
  }

  if (campaigns.length === 0) {
    return <div>No campaigns found.</div>; // Handle empty data
  }

  return (
    <div className="flex flex-wrap gap-4 p-6 mx-auto w-full h-full">
      {campaigns.map((campaign, index) => (
        <CampaignCard
          key={index}
          title={campaign.title} // Correctly access the title
          image={campaign.image} // Correctly access the image
          amountRaised={campaign.amountRaised} // Correctly access amountRaised
          target={campaign.target} // Correctly access the target
          category={campaign.category}
          donations = {campaign.donations}
        />
      ))}
    </div>
  );
};


export default CampaignList;

import React from "react";

const CampaignCard = ({ image, donations, title, amountRaised, progress }) => {
  return (
    <div className="w-full sm:w-[48%] md:w-[30%] bg-white rounded-lg overflow-hidden shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 text-xs rounded">
          {donations} donations
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-md font-semibold">{title}</h3>
        <div className="flex items-center mt-2 mb-1">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-500 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <p className="text-sm font-medium text-gray-600 mt-1">{amountRaised} raised</p>
      </div>
    </div>
  );
};

const CampaignList = () => {
  const campaigns = [
    {
      image: "https://static.wixstatic.com/media/ac3d3c_7596c9e6c40949d98032498fc149ef53~mv2.jpg/v1/fill/w_639,h_382,al_c,q_80/SBP%2520FORMAT%2520-%2520HELP_edited.jpg",
      donations: "100",
      title: "Help an NGO",
      amountRaised: "0.25 ETH",
      progress: 70,
    },
    {
      image: "https://static.wixstatic.com/media/ac3d3c_7596c9e6c40949d98032498fc149ef53~mv2.jpg/v1/fill/w_639,h_382,al_c,q_80/SBP%2520FORMAT%2520-%2520HELP_edited.jpg",
      donations: "100",
      title: "Help an NGO",
      amountRaised: "0.25 ETH",
      progress: 70,
    },
    {
      image: "https://static.wixstatic.com/media/ac3d3c_7596c9e6c40949d98032498fc149ef53~mv2.jpg/v1/fill/w_639,h_382,al_c,q_80/SBP%2520FORMAT%2520-%2520HELP_edited.jpg",
      donations: "100",
      title: "Help an NGO",
      amountRaised: "0.25 ETH",
      progress: 40,
    },
    {
      image: "https://static.wixstatic.com/media/ac3d3c_7596c9e6c40949d98032498fc149ef53~mv2.jpg/v1/fill/w_639,h_382,al_c,q_80/SBP%2520FORMAT%2520-%2520HELP_edited.jpg",
      donations: "100",
      title: "Help an NGO",
      amountRaised: "0.25 ETH",
      progress: 10,
    },
    {
      image: "https://static.wixstatic.com/media/ac3d3c_7596c9e6c40949d98032498fc149ef53~mv2.jpg/v1/fill/w_639,h_382,al_c,q_80/SBP%2520FORMAT%2520-%2520HELP_edited.jpg",
      donations: "100",
      title: "Help an NGO",
      amountRaised: "0.25 ETH",
      progress: 20,
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 p-6 mx-auto w-full h-full">
      {campaigns.map((campaign, index) => (
        <CampaignCard key={index} {...campaign} />
      ))}
    </div>
  );
};

export default CampaignList;
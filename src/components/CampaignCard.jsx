import React from "react";

const CampaignCard = ({ image, donations, title, amountRaised, progress }) => {
  return (
    <div className="w-full sm:w-[48%] md:w-[30%] bg-white rounded-lg overflow-hidden shadow-md">
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
      image: "https://images.gofundme.com/3eXdenYl77Gqc5ojyhsEU4qHGPQ=/720x405/https://d2g8igdw686xgo.cloudfront.net/83797065_1730313729744043_r.png",
      donations: "1.3K",
      title: "Help Hamish's Recovery",
      amountRaised: "£37,805",
      progress: 70,
    },
    {
      image: "https://images.gofundme.com/3eXdenYl77Gqc5ojyhsEU4qHGPQ=/720x405/https://d2g8igdw686xgo.cloudfront.net/83797065_1730313729744043_r.png",
      donations: "2.2K",
      title: "Liara und Ihre Familie brauchen Eure Hilfe",
      amountRaised: "€89,645",
      progress: 60,
    },
    {
      image: "https://images.gofundme.com/3eXdenYl77Gqc5ojyhsEU4qHGPQ=/720x405/https://d2g8igdw686xgo.cloudfront.net/83797065_1730313729744043_r.png",
      donations: "20.4K",
      title: "UNA COPA POR VALENCIA",
      amountRaised: "€301,331",
      progress: 85,
    },
    {
      image: "https://images.gofundme.com/BNHXNSsnhx2VdoLOZxeuLf3PH4k=/720x405/https://d2g8igdw686xgo.cloudfront.net/83374039_1730879008807542_r.png",
      donations: "2.9K",
      title: "BANCO DE ALIMENTOS DE VALENCIA CON LA DANA",
      amountRaised: "€111,897",
      progress: 20,
    },
    {
      image: "https://images.gofundme.com/BNHXNSsnhx2VdoLOZxeuLf3PH4k=/720x405/https://d2g8igdw686xgo.cloudfront.net/83374039_1730879008807542_r.png",
      donations: "4.7K",
      title: "Ayuda para los damnificados del temporal Dana en Valencia",
      amountRaised: "€150,327",
      progress: 65,
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 p-4 mx-auto w-full h-full">
      {campaigns.map((campaign, index) => (
        <CampaignCard key={index} {...campaign} />
      ))}
    </div>
  );
};

export default CampaignList;
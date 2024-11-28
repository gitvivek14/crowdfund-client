import { ethers } from "ethers";
const contractAddress = "0x70E08d0940BE1af49D7514ECF9e32526C5699128";
const contractABI =
  // Add your contract's ABI here
  [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "campaigns",
      outputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "string",
          name: "title",
          type: "string",
        },
        {
          internalType: "string",
          name: "description",
          type: "string",
        },
        {
          internalType: "string",
          name: "category",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "target",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "deadline",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amountCollected",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "image",
          type: "string",
        },
        {
          internalType: "bool",
          name: "isActive",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_owner",
          type: "address",
        },
        {
          internalType: "string",
          name: "_title",
          type: "string",
        },
        {
          internalType: "string",
          name: "_description",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_target",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_deadline",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_image",
          type: "string",
        },
        {
          internalType: "string",
          name: "_category",
          type: "string",
        },
      ],
      name: "createCampaign",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
      ],
      name: "donateToCampaign",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "getCampaigns",
      outputs: [
        {
          components: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "string",
              name: "title",
              type: "string",
            },
            {
              internalType: "string",
              name: "description",
              type: "string",
            },
            {
              internalType: "string",
              name: "category",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "target",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountCollected",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "image",
              type: "string",
            },
            {
              internalType: "address[]",
              name: "donators",
              type: "address[]",
            },
            {
              internalType: "uint256[]",
              name: "donations",
              type: "uint256[]",
            },
            {
              internalType: "bool",
              name: "isActive",
              type: "bool",
            },
          ],
          internalType: "struct CrowdFunding.Campaign[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
      ],
      name: "getDonators",
      outputs: [
        {
          internalType: "address[]",
          name: "",
          type: "address[]",
        },
        {
          internalType: "uint256[]",
          name: "",
          type: "uint256[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "numberOfCampaigns",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

export const getDataForStart = async () => {
    console.log("works")
  const provider = new ethers.JsonRpcProvider(
    "https://eth-sepolia.g.alchemy.com/v2/1oWEpXR6VSY0OgghPAtSEVgwNavPSu6H"
  );
  const contract = new ethers.Contract(contractAddress, contractABI, provider);

  const data = await contract.getCampaigns();
  const length = data.length;
  let donations = [];
  for (let i = 0; i < length; i++) {
    const resp = await contract.getDonators(i);
    donations.push(resp);
  }
  const formattedCampaigns = data.map((campaign, i) => ({
    owner: campaign[0],
    title: campaign[1],
    description: campaign[2],
    category: campaign[3],
    target: ethers.formatEther(campaign[4]) / 10e17, // Convert from wei to ETH
    deadline: new Date(Number(campaign[5]) * 1000),
    amountRaised: ethers.formatEther(campaign[6]) / 1,
    image: campaign[7],
    pId: i,
    donations: donations[i],
  }));

  return formattedCampaigns;
};

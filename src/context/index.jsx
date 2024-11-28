import { useContext, createContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [address, setAddress] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    initializeEthers();
}, []);

  const contractAddress = "0x70E08d0940BE1af49D7514ECF9e32526C5699128";
  const contractABI =
    // Add your contract's ABI here
    [
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "campaigns",
        "outputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "title",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "category",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "target",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amountCollected",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "image",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "isActive",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "_title",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_description",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "_target",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_deadline",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "_image",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_category",
            "type": "string"
          }
        ],
        "name": "createCampaign",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
          }
        ],
        "name": "donateToCampaign",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getCampaigns",
        "outputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "title",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "description",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "category",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "target",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amountCollected",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "image",
                "type": "string"
              },
              {
                "internalType": "address[]",
                "name": "donators",
                "type": "address[]"
              },
              {
                "internalType": "uint256[]",
                "name": "donations",
                "type": "uint256[]"
              },
              {
                "internalType": "bool",
                "name": "isActive",
                "type": "bool"
              }
            ],
            "internalType": "struct CrowdFunding.Campaign[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
          }
        ],
        "name": "getDonators",
        "outputs": [
          {
            "internalType": "address[]",
            "name": "",
            "type": "address[]"
          },
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "numberOfCampaigns",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ]
  // Set up provider, signer, and contract
  const initializeEthers = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAddress(accounts[0]);
        const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
        setContract(contractInstance);
      } catch (error) {
        console.error("Error initializing ethers or connecting wallet:", error);
      }
    } else {
      alert("Please install Metamask!");
      console.error("Metamask not found");
    }
  };

  const connect = initializeEthers;

  const publishCampaign = async (form) => {
    try {
      const tx = await contract.createCampaign(
        address,
        form.title,
        form.description,
        ethers.parseEther(form.target.toString()), // Updated ethers method
        new Date(form.deadline).getTime(),
        form.image,
        form.category
      );
      const receipt = await tx.wait();
      console.log("Contract call success", receipt);
    } catch (error) {
      console.error("Contract call failure", error);
    }
  };

  const getCampaigns = async () => {
    const dummyCampaigns = [];
    try {
      const campaigns = await contract.getCampaigns();
      const parsedCampaigns = campaigns.map((campaign, i) => ({
        owner: campaign.owner,
        title: campaign.title,
        description: campaign.description,
        target: ethers.formatEther(campaign.target),
        deadline: Number(campaign.deadline),
        amountCollected: ethers.formatEther(campaign.amountCollected),
        image: campaign.image,
        pId: i + (dummyCampaigns.length || 0),
        category: campaign.category,
      }));
      return [...dummyCampaigns, ...parsedCampaigns];
    } catch (error) {
      console.error("Failed to get campaigns", error);
      return dummyCampaigns;
    }
  };

  const getUserCampaigns = async () => {
    const allCampaigns = await getCampaigns();
    return allCampaigns.filter(
      (campaign) => campaign.owner.toLowerCase() === address.toLowerCase()
    );
  };

  const donate = async (pId, amount) => {
    try {
      const tx = await contract.donateToCampaign(pId, {
        value: ethers.parseEther(amount),
      });
      const receipt = await tx.wait();
      return receipt;
    } catch (error) {
      console.error("Donation failed", error);
    }
  };

  const getDonations = async (pId) => {
    try {
      const donations = await contract.getDonators(pId);
      return donations[0].map((donator, i) => ({
        donator,
        donation: ethers.formatEther(donations[1][i]),
      }));
    } catch (error) {
      console.error("Failed to get donations", error);
      return [];
    }
  };

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        createCampaign: publishCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonations,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

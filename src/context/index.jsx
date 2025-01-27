import { useContext, createContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useToast } from '@/hooks/use-toast';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { toast } = useToast()
  const [address, setAddress] = useState(null);
  const [contract, setContract] = useState(null);

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

  const getMessage = () => {
    return "Visit metamask.io"
  }
  const getFailMessage = () => {
    return "Error in making the transaction, do you have enough balance in your wallet ?"
  }
  // Set up provider, signer, and contract
 
  const initializeEthers = async () => {
    if (window.ethereum) {
      try {
        // Create a provider using `ethers.providers.Web3Provider`
        const provider = new ethers.providers.Web3Provider(window.ethereum);
  
        // Get the signer (the connected account)
        const signer = provider.getSigner();
  
        // Request accounts from MetaMask
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
  
        // Set the address and initialize the contract instance
        setAddress(accounts[0]);
        const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
        setContract(contractInstance);
      } catch (error) {
        console.error("Error initializing ethers or connecting wallet:", error);
      }
    } else {
      await toast({
        title: "Please install MetaMask",
        description: getMessage(),
      });
      console.error("MetaMask not found");
    }
  };
  


  const publishCampaign = async (form) => {
    try {
      const tx = await contract.createCampaign(
        address,
        form.title,
        form.description,
        ethers.utils.parseEther(form.target.toString()), // Updated ethers method
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
        target: ethers.utils.formatEther(campaign.target),
        deadline: Number(campaign.deadline),
        amountCollected: ethers.utils.formatEther(campaign.amountCollected),
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
    console.log("donated amounts",amount)
    try {
      const tx = await contract.donateToCampaign(pId, {
        value: ethers.utils.parseEther(amount),
      });
      const receipt = await tx.wait();
      return receipt;
    } catch (error) {
      console.log("are we her")
      toast({
        title : "Insufficient Funds!",
        description : getFailMessage()
      })
      console.error("Donation failed", error);
    }
  };

  const getDonations = async (pId) => {
    try {
      const donations = await contract.getDonators(pId);
      return donations[0].map((donator, i) => ({
        donator,
        donation: ethers.utils.formatEther(donations[1][i]),
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
        connect:initializeEthers,
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

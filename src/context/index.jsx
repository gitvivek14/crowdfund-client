import  { useContext, createContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [address, setAddress] = useState(null);
  const [contract, setContract] = useState(null);

  const contractAddress = "0x293e3F16b358F14329eb10cd5cF993E2abd53D45";
  const contractABI =
    // Add your contract's ABI here
   [
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
        }
      ]

  // Set up provider, signer, and contract
  const initializeEthers = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAddress(accounts[0]);
      } catch (error) {
        console.error("Failed to connect to wallet:", error);
      }

      const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
      setContract(contractInstance);
    } else {
      console.error("Metamask not found");
    }
  };

  useEffect(() => {
    initializeEthers();
  }, []);

  const connect = initializeEthers; // To reconnect when needed

  const publishCampaign = async (form) => {
    try {
      const tx = await contract.createCampaign(
        address, 
        form.title, 
        form.description, 
        ethers.utils.parseEther(form.target.toString()), // Convert target to string if necessary
        new Date(form.deadline).getTime(),
        form.image
      );
      const receipt = await tx.wait();
      console.log("Contract call success", receipt);
    } catch (error) {
      console.error("Contract call failure", error);
    }
};


  const getCampaigns = async () => {
    const dummyCampaigns = [
      // {
      //   owner: "0x0000000000000000000000000000000000000000",
      //   title: "Sample Campaign 1",
      //   description: "This is a sample campaign for testing.",
      //   target: ethers.utils.formatEther("10"), // 10 ETH target
      //   deadline: Date.now() + 7 * 24 * 60 * 60 * 1000, // One week from now
      //   amountCollected: ethers.utils.formatEther("2"), // 2 ETH collected
      //   image: "https://via.placeholder.com/150",
      //   pId: 0,
      // },
      // {
      //   owner: "0x0000000000000000000000000000000000000000",
      //   title: "Sample Campaign 2",
      //   description: "Another sample campaign.",
      //   target: ethers.utils.formatEther("5"), // 5 ETH target
      //   deadline: Date.now() + 14 * 24 * 60 * 60 * 1000, // Two weeks from now
      //   amountCollected: ethers.utils.formatEther("1"), // 1 ETH collected
      //   image: "https://via.placeholder.com/150",
      //   pId: 1,
      // },
    ];
  
    try {
      const campaigns = await contract.getCampaigns();
  
      const parsedCampaigns = campaigns.map((campaign, i) => ({
        owner: campaign.owner,
        title: campaign.title,
        description: campaign.description,
        target: ethers.utils.formatEther(campaign.target.toString()),
        deadline: campaign.deadline.toNumber(),
        amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
        image: campaign.image,
        pId: i + dummyCampaigns.length, // Offset IDs for dummy campaigns
      }));
  
      // Combine dummy campaigns with real campaigns
      return [...dummyCampaigns, ...parsedCampaigns];
    } catch (error) {
      console.error("Failed to get campaigns", error);
      // Return only dummy campaigns if there's an error
      return dummyCampaigns;
    }
  };
  

  const getUserCampaigns = async () => {
    const allCampaigns = await getCampaigns();
    let userCampaigns = [];

    allCampaigns.map(campaign => {
      if(campaign.owner.toLowerCase() == address.toLowerCase()) {
        userCampaigns.push(campaign)
      }
    })
    console.log(userCampaigns)
    return userCampaigns
  };

  const donate = async (pId, amount) => {
    try {
      const tx = await contract.donateToCampaign(pId, { value: ethers.utils.parseEther(amount) });
      const receipt = await tx.wait();
      return receipt;
    } catch (error) {
      console.error("Donation failed", error);
    }
  };

  const getDonations = async (pId) => {
    try {
      const donations = await contract.getDonators(pId);
      const numberOfDonations = donations[0].length;

      const parsedDonations = [];
      for (let i = 0; i < numberOfDonations; i++) { 
        parsedDonations.push({
          donator: donations[0][i],
          donation: ethers.utils.formatEther(donations[1][i].toString())
        });
      }

      return parsedDonations;
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
        getDonations
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

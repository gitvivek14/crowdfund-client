import React, { useContext, createContext } from "react";
import { prepareContractCall, sendTransaction } from "thirdweb";

import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { EditionMetadataWithOwnerOutputSchema } from "@thirdweb-dev/sdk";
import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";

const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
  //   const { contract } = useContract(
  //     "0x293e3F16b358F14329eb10cd5cF993E2abd53D45"
  //   );
  //   const { mutateAsync: createCampaign } = useContractWrite(
  //     contract,
  //     "createCampaign"
  //   );

  // create the client with your clientId, or secretKey if in a server environment
  const client = createThirdwebClient({
    clientId: import.meta.env.VITE_THIRDWEB_CLIENT_ID
   });
  
  // connect to your contract
  const contract = getContract({
    client,
    chain: defineChain(11155111),
    address: "0x293e3F16b358F14329eb10cd5cF993E2abd53D45"
  });

  let address = useAddress();
  let connect = useMetamask();

  const publishCampaign = async (form) => {
    try {
      // const data = await createCampaign({
      //   args: [
      //     address, // owner
      //     form.title, // title
      //     form.description, // description
      //     form.target,
      //     new Date(form.deadline).getTime(), // deadline,
      //     form.image,
      //   ],
      // });
      const transaction = await prepareContractCall({
        contract,
        method: "function createCampaign(address _owner, string _title, string _description, uint256 _target, uint256 _deadline, string _image) returns (uint256)",
        params: [address, form.title, form.description, form.target, new Date(form.deadline).getTime(), form.image]
      });
      const { transactionHash } = await sendTransaction({
        transaction,  
        account : address
      });
      console.log(transactionHash)
      console.log("contract call success", transaction);
    } catch (error) {
      console.log("contract call failure", error);
    }
  };

  const getCampaigns = async () => {
    // const campaigns = await contract.call("getCampaigns");

    // const parsedCampaings = campaigns.map((campaign, i) => ({
    //   owner: campaign.owner,
    //   title: campaign.title,
    //   description: campaign.description,
    //   target: ethers.utils.formatEther(campaign.target.toString()),
    //   deadline: campaign.deadline.toNumber(),
    //   amountCollected: ethers.utils.formatEther(
    //     campaign.amountCollected.toString()
    //   ),
    //   image: campaign.image,
    //   pId: i,
    // }));
    const dummyCampaigns = [
      {
        owner: "0x1234567890abcdef1234567890abcdef12345678",
        title: "Clean Water Initiative",
        description:
          "A campaign to provide clean drinking water to rural areas.",
        target: ethers.utils.formatEther("5000000000000000000"), // 5 ETH
        deadline: 1672531199, // Unix timestamp for a future date
        amountCollected: ethers.utils.formatEther("2500000000000000000"), // 2.5 ETH collected
        image:
          "https://png.pngtree.com/thumb_back/fw800/background/20240506/pngtree-eerily-realistic-dark-forest-nature-wallpaper-in-8k-resolution-image_15725080.jpg ",
        pId: 0,
      },
      {
        owner: "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd",
        title: "School Supplies for Kids",
        description:
          "Help provide school supplies to underprivileged children.",
        target: ethers.utils.formatEther("1000000000000000000"), // 1 ETH
        deadline: 1675123199, // Unix timestamp for a future date
        amountCollected: ethers.utils.formatEther("500000000000000000"), // 0.5 ETH collected
        image:
          "https://png.pngtree.com/thumb_back/fw800/background/20240506/pngtree-eerily-realistic-dark-forest-nature-wallpaper-in-8k-resolution-image_15725080.jpg",
        pId: 1,
      },
      {
        owner: "0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
        title: "Reforestation Project",
        description:
          "A project aimed at planting 10,000 trees in deforested areas.",
        target: ethers.utils.formatEther("20000000000000000000"), // 20 ETH
        deadline: 1677715199, // Unix timestamp for a future date
        amountCollected: ethers.utils.formatEther("15000000000000000000"), // 15 ETH collected
        image:
          "https://png.pngtree.com/thumb_back/fw800/background/20240506/pngtree-eerily-realistic-dark-forest-nature-wallpaper-in-8k-resolution-image_15725080.jpg",
        pId: 2,
      },
      {
        owner: "0xbeefbeefbeefbeefbeefbeefbeefbeefbeefbeef",
        title: "Animal Shelter Support",
        description:
          "Raising funds to build a new wing for the local animal shelter.",
        target: ethers.utils.formatEther("3000000000000000000"), // 3 ETH
        deadline: 1680307199, // Unix timestamp for a future date
        amountCollected: ethers.utils.formatEther("1000000000000000000"), // 1 ETH collected
        image:
          "https://png.pngtree.com/thumb_back/fw800/background/20240506/pngtree-eerily-realistic-dark-forest-nature-wallpaper-in-8k-resolution-image_15725080.jpg",
        pId: 3,
      },
      {
        owner: "0xabcdefabcdefabcdefabcdefabcdefabcdefaaaa",
        title: "Solar Energy for Schools",
        description:
          "Help install solar panels in schools to provide sustainable energy.",
        target: ethers.utils.formatEther("10000000000000000000"), // 10 ETH
        deadline: 1682899199, // Unix timestamp for a future date
        amountCollected: ethers.utils.formatEther("3000000000000000000"), // 3 ETH collected
        image:
          "https://png.pngtree.com/thumb_back/fw800/background/20240506/pngtree-eerily-realistic-dark-forest-nature-wallpaper-in-8k-resolution-image_15725080.jpg",
        pId: 4,
      },
      {
        owner: "0xfedcba09876543210987654321fedcba09876543",
        title: "Community Library Expansion",
        description:
          "Expanding the community library with more books and learning spaces.",
        target: ethers.utils.formatEther("2000000000000000000"), // 2 ETH
        deadline: 1685491199, // Unix timestamp for a future date
        amountCollected: ethers.utils.formatEther("1500000000000000000"), // 1.5 ETH collected
        image:
          "https://png.pngtree.com/thumb_back/fw800/background/20240506/pngtree-eerily-realistic-dark-forest-nature-wallpaper-in-8k-resolution-image_15725080.jpg",
        pId: 5,
      },
      {
        owner: "0xabcdefabcdefabcdefabcdefabcdefabcdefaaaa",
        title: "Healthcare Access for All",
        description:
          "Supporting underprivileged communities with access to basic healthcare services.",
        target: ethers.utils.formatEther("5000000000000000000"), // 5 ETH
        deadline: 1688083199, // Unix timestamp for a future date
        amountCollected: ethers.utils.formatEther("2000000000000000000"), // 2 ETH collected
        image:
          "https://png.pngtree.com/thumb_back/fw800/background/20240506/pngtree-eerily-realistic-dark-forest-nature-wallpaper-in-8k-resolution-image_15725080.jpg",
        pId: 6,
      },
    ];
    // return parsedCampaigns
    return [...dummyCampaigns];
  };

  const getUserCampaigns = async () => {
    // const allCampaigns = await getCampaigns();
    // console.log(allCampaigns);
    // const filteredCampaigns = allCampaigns.filter(
    //   (campaign) => campaign.owner === address
    // );
    // return filteredCampaigns;
    const myCampaigns = [
      {
        owner: "0xabcdefabcdefabcdefabcdefabcdefabcdefaaaa",
        title: "Solar Energy for Schools",
        description:
          "Help install solar panels in schools to provide sustainable energy.",
        target: ethers.utils.formatEther("10000000000000000000"), // 10 ETH
        deadline: 1682899199, // Unix timestamp for a future date
        amountCollected: ethers.utils.formatEther("3000000000000000000"), // 3 ETH collected
        image:
          "https://png.pngtree.com/thumb_back/fw800/background/20240506/pngtree-eerily-realistic-dark-forest-nature-wallpaper-in-8k-resolution-image_15725080.jpg",
        pId: 4,
      },
      {
        owner: "0xabcdefabcdefabcdefabcdefabcdefabcdefaaaa",
        title: "Healthcare Access for All",
        description:
          "Supporting underprivileged communities with access to basic healthcare services.",
        target: ethers.utils.formatEther("5000000000000000000"), // 5 ETH
        deadline: 1688083199, // Unix timestamp for a future date
        amountCollected: ethers.utils.formatEther("2000000000000000000"), // 2 ETH collected
        image:
          "https://png.pngtree.com/thumb_back/fw800/background/20240506/pngtree-eerily-realistic-dark-forest-nature-wallpaper-in-8k-resolution-image_15725080.jpg",
        pId: 6,
      },
    ];
    return myCampaigns;
  };

  const donate = async (pId, amount) => {
    const data = await contract.call("donateToCampaign", [pId], {
      value: ethers.utils.parseEther(amount),
    });

    return data;
  };

  

  const getDonations = async (pId) => {
    const donations = await contract.call("getDonators", [pId]);
    const numberOfDonations = donations[0].length;

    const parsedDonations = [];

    for (let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString()),
      });
    }

    return parsedDonations;
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
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useStateContext } from "../context";
import { CountBox, CustomButton, Loader } from "../components";
import { daysLeft } from "../utils";
import { thirdweb } from "../assets";
import { useToast } from "@/hooks/use-toast";
const CampaignDetails = () => {
  const { state } = useLocation();
  const { donate, getDonations, contract, address, connect } =
    useStateContext();
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [donators, setDonators] = useState([]);
  const { toast } = useToast();
  const [userDonation, setuserDonation] = useState();
  const [Fetchdata, setFetchdata] = useState(false)
  const getIndianDateTime = () => {
    const now = new Date();
    return now.toLocaleString("en-IN", {
      weekday: "long", // "Friday"
      month: "long", // "February"
      day: "numeric", // "10"
      year: "numeric", // "2023"
      hour: "numeric", // "5"
      minute: "2-digit", // "57"
      hour12: true, // "PM"
      timeZone: "Asia/Kolkata", // Sets the time zone to IST
    });
  };
  useEffect(() => {
    connect();
  }, []);
  const remainingDays = daysLeft(state.deadline);

  const fetchDonators = async () => {
    setFetchdata(true)
    try {
      const data = await getDonations(state.pId);

      const donatorMap = data.reduce((acc, item) => {
        const donatorLowerCase = item.donator.toLowerCase(); // Convert to lowercase
        if (!acc[donatorLowerCase]) {
          acc[donatorLowerCase] = [];
        }
        acc[donatorLowerCase].push(item.donation);
        return acc;
      }, {});
  
      const groupedDonators = Object.keys(donatorMap).map((donator) => ({
        donator,
        donations: donatorMap[donator],
      }));
      setDonators(groupedDonators);
  
      const targetAddress = address.toLowerCase();
  
      // Find donations for the specific user
      const userDono = groupedDonators.find(
        (donator) => donator.donator === targetAddress
      );
      setuserDonation(userDono);
      
    } catch (error) {
      console.log(error)
    }finally{
      setFetchdata(false)
    }
   
  };

  useEffect(() => {
    if (contract) fetchDonators();
    setPercentage(
      ((state.amountCollected / (state.target / 10e17)) * 100).toFixed(2)
    );
  }, [contract, address, isLoading,Fetchdata]);
  const handleDonate = async () => {
    setIsLoading(true);
    if (amount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount",
      });
      setIsLoading(false);
      return;
    }
    try {
      const response = await donate(state.pId, amount);
      if (response?.status == 1) {
        toast({
          title: "बधाई🎊🎊🎉 Payment Successfull",
          description: getIndianDateTime(),
        });

        setPercentage(
          ((state.amountCollected / (state.target / 10e17)) * 100).toFixed(2)
        );
      } else {
        await toast({
          variant: "destructive",
          title: "Payment Failed",
          description: getIndianDateTime(),
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const [percentage, setPercentage] = useState();
  const uniqueDonators = new Set(
    donators.map((item) => item.donator.toLowerCase())
  );
  const totalBackers = uniqueDonators.size;
  return (
    <div>
      {isLoading && <Loader />}

      <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
        <div className="flex-1 flex-col">
          <img
            src={state.image}
            alt="campaign"
            className="w-full h-[410px] object-cover rounded-xl"
          />
          <div className="relative w-full h-[5px] bg-[#3a3a43] mt-2">
            <div
              className="absolute h-full bg-[#4acd8d]"
              style={{
                width: `${percentage}%`,
                maxWidth: "100%",
              }}
            ></div>
          </div>
        </div>

        <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
          <CountBox title="Days Left" value={remainingDays} />
          <CountBox title={`Fund Raised`} value={percentage + "%"} />
          <CountBox title="Total Backers" value={totalBackers} />
          {/* <CountBox title="Funds Raised" value={100%} /> */}
        </div>
      </div>

      <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
        <div className="flex-[2] flex flex-col gap-[40px]">
          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">
              Creator
            </h4>

            <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
              <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
                <img
                  src={thirdweb}
                  alt="user"
                  className="w-[60%] h-[60%] object-contain"
                />
              </div>
              <div>
                <h4 className="font-epilogue font-semibold text-[14px] text-white break-all">
                  {state.owner}
                </h4>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">
              Story
            </h4>

            <div className="mt-[20px]">
              <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">
                {state.description}
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">
              Your Donations to This Campaign!
            </h4>

            <div className="mt-[20px] flex flex-col gap-4">
              {userDonation ? (
                <div className="flex flex-col gap-2">
                  {userDonation.donations.map((donation, idx) => (
                    <p
                      key={`user-dono-${idx}`}
                      className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] break-ll"
                    >
                      - {donation} ETH
                    </p>
                  ))}
                </div>
              ) : (
                <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">
                  No donations from this user yet.
                </p>
              )}
            </div>
          </div>
          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">
              Donators
            </h4>

            <div className="mt-[20px] flex flex-col gap-4">
              {donators.length > 0 ? (
                donators.map((item, index) => (
                  <div
                    key={`${item.donator}-${index}`}
                    className="flex flex-col gap-2"
                  >
                    <p className="font-epilogue font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-all">
                      {index + 1}. {item.donator}
                    </p>
                    {item.donations.map((donation, idx) => (
                      <p
                        key={`${item.donator}-${idx}`}
                        className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] break-ll"
                      >
                        - {donation} ETH
                      </p>
                    ))}
                  </div>
                ))
              ) : (
                <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">
                  No donators yet. Be the first one!
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">
            Fund
          </h4>

          <div className="mt-[20px] flex flex-col p-4 bg-[#1c1c24] rounded-[10px]">
            <p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center text-[#808191]">
              Fund the campaign
            </p>
            <div className="mt-[30px]">
              <input
                type="number"
                placeholder="ETH 0.1"
                step="0.01"
                className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
                value={amount}
                onChange={(e) => {
                setAmount(e.target.value)
                }}
                
              />

              <div className="my-[20px] p-4 bg-[#13131a] rounded-[10px]">
                <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-white">
                  Back it because you believe in it.
                </h4>
                <p className="mt-[20px] font-epilogue font-normal leading-[22px] text-[#808191]">
                  Support the project for no reward, just because it speaks to
                  you.
                </p>
              </div>

              <CustomButton
                btnType="button"
                title="Fund Campaign"
                styles="w-full bg-[#8c6dfd]"
                handleClick={handleDonate}
              />
              {/* <Button
      variant="outline"
      onClick={() => {
        const ch = toast({
          
          title: "बधाई🎊🎊🎉",
          description: getIndianDateTime(),
        })
        console.log(ch)
      }}
    >
      Show Toast
    </Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;

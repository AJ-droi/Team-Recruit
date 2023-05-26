import React from "react";
import DigiClock from "../components/DigiClock";
import mcSymbol from "../assets/mc_symbol.svg";
import verified from "../assets/verified-badge.svg";
import { HiPencil} from "react-icons/hi";
import { HiXMark} from "react-icons/hi2";
import dots from "../assets/dots.svg";
import apple from "../assets/apple-13.svg";
import docket from "../assets/docket.png";
import Card from "../components/Card";

const Payment = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:h-[90vh] justify-between bg-[#fff] px-[5%] py-[3%] rounded-sm opacity-[0.98]">
        <HiXMark className="absolute text-[1.7rem] top-[4%] md:top-[7%] right-[7%]" />
      <div className="xl:w-[65%] lg:w-[55%]">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex justify-between lg:w-[22%] items-center">
            <img
              src={docket}
              alt="docket"
              className="h-[40px] w-[40px] bg-[#2667d1] p-[3%] rounded-[50%]"
            />

            <div>
              <span className="text-[#17254c] font-bold text-[1.2rem]">
                AceCoin
              </span>
              Pay
            </div>
          </div>
          <div className="flex  justify-evenly items-center w-[80%] md:w-[50%] lg:w-[30%] md:mb-[2%] my-[5%]">
            <DigiClock number={0} />
            <DigiClock number={1} />
            <span className="font-bold text-[1.2rem]">:</span>
            <DigiClock number={1} />
            <DigiClock number={9} />
          </div>
        </div>
        <div className="flex justify-between my-[5%]">
          <div className="text-left ">
            <h3 className="font-semibold text-[#181e21]">Card Number</h3>
            <p className="text-[#b5b5b5] text-[0.7rem] lg:text-[1.2rem]">
              Enter the 16-digit card number on the card
            </p>
          </div>
          <div className="flex justify-between items-center text-[1.2rem]">
            <HiPencil className="text-[#3AA1F2]" />
            <span className="text-[#3AA1F2] text-[0.8rem]">Edit</span>
          </div>
        </div>
        <div className="border flex justify-between items-center px-[2%] bg-[#ececec] rounded-lg">
          <div className="flex w-[90%] lg:w-[70%] justify-between items-center">
            <img src={mcSymbol} alt="mastercard symbol" className="h-[5vh]" />
            <input
              type="text"
              placeholder="  2412   -   7512   -   3412   -   3456 "
              className="w-[100%] lg:w-[90%] py-[3%] text-[0.7rem] lg:text-[1.2rem] flex justify-evenly bg-[#ececec] "
            />
          </div>
          <img src={verified} alt="verified" className="h-[2vh] lg:h-[4vh] " />
        </div>
        <div className="flex flex-col lg:flex-row justify-between my-[5%]">
          <div className="text-left">
            <h3 className="font-semibold text-[#181e21]">CVV Number</h3>
            <p className="text-[#b5b5b5] text-[0.7rem] lg:text-[1.2rem]">
              Enter the 3 or 4 digit number on the card
            </p>
          </div>
          <div className="flex justify-between items-center border pr-[3%] rounded-lg lg:w-[50% my-[2%] lg:my-[0%]">
            <input
              type="number"
              placeholder=" 327 "
              className="w-[100%] py-[3%] text-[1.2rem] text-center"
            />
            <img src={dots} alt="dots" className="h-[4vh] " />
          </div>
        </div>
        <div className="flex justify-between my-[5%]">
          <div className="text-left">
            <h3 className="font-semibold text-[#181e21]">Expiry Date</h3>
            <p className="text-[#b5b5b5] text-[0.7rem] lg:text-[1.2rem]">
              Enter your expiration date of the card
            </p>
          </div>
          <div className="flex justify-between items-center  w-[50%]">
            <input
              type="number"
              placeholder=" 09 "
              className="w-[50%] py-[3%] text-[1.2rem] text-center border rounded-lg"
            />
            <span className="px-[5%]">/</span>
            <input
              type="number"
              placeholder=" 22 "
              className="w-[50%] py-[3%] text-[1.2rem] text-center border rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between my-[5%]">
          <div className="text-left">
            <h3 className="font-semibold text-[#181e21]">Password</h3>
            <p className="text-[#b5b5b5] text-[0.7rem] lg:text-[1.2rem]">Enter your Dynamic Password</p>
          </div>
          <div className="flex justify-between items-center border pr-[3%] rounded-lg lg:w-[50%]">
            <input
              type="password"
              placeholder="•••••••••"
              className="w-[90%] py-[3%] text-[1.2rem] text-center"
            />
            <img src={dots} alt="dots" className="h-[4vh] " />
          </div>
        </div>
        <button className="py-[4%] w-[100%] rounded-lg text-[#fff] bg-[#2667d1] mb-[4%]">
          Pay Now
        </button>
      </div>

      <div className="xl:w-[30%] lg:w-[40%] w-[100%] flex flex-col justify-end items-center my-[8%] lg:my-[0%] ">
        <Card />

        <div className="bg-[#e1e5e6] w-[90%] flex flex-col justify-end mx-[auto] h-[50vh] rounded-xl py-[5%] mt-[-45%] md:mt-[-15%] lg:mt-[30%]">
          <div className="flex justify-between  w-[100%] px-[5%] py-[2%]">
            <h4 className="text-[#5b5b5b]">Company</h4>
            <h4 className="flex justify-between w-[30%]">
              <img src={apple} alt="apple-icon" className="h-[3vh]" />
              Apple
            </h4>
          </div>
          <div className="flex justify-between  w-[100%] px-[5%] py-[2%]">
            <h4 className="text-[#5b5b5b]">Order Number</h4>
            <h4 className="flex">1266201</h4>
          </div>
          <div className="flex justify-between  w-[100%] px-[5%] py-[2%]">
            <h4 className="text-[#5b5b5b]">Product</h4>
            <h4 className="flex">Macbook Air</h4>
          </div>
          <div className="flex justify-between  w-[100%] px-[5%] py-[2%]">
            <h4 className="text-[#5b5b5b]">VAT(20%)</h4>
            <h4 className="flex">$100.00</h4>
          </div>
        </div>
        <div className="bg-[#e1e5e6] h-[20vh] w-[90%] mx-[auto] rounded-xl flex px-[5%] items-center justify-between">
          <div className="text-left">
            <h3 className="text-[#5b5b5b]">You have to Pay</h3>
            <p>
              <span className="text-[#112836] text-[1.5rem] font-bold">
                549
              </span>
              <span>.99</span> <span className="text-[#5b5b5b]">USD</span>
            </p>
          </div>
          <img src={docket} alt="docket" className="h-[4vh] " />
        </div>
      </div>
    
    </div>
  );
};

export default Payment;

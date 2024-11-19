import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
export default function Product() {
  return (
    // Card Contianer
    <div className="p-6 m-3 bg-white flex flex-col rounded-2xl shadow-2xl space-y-10 md:flex-row md:m-0 md:p-12 md:space-y-0 md:space-x-10 ">
      {/* Image */}
      <div className="mx-auto">
        <img
          src="../src/assets/headphone.png"
          alt=""
          className="w-60 hover:scale-105 duration-150"
        />
      </div>
      {/* contents */}
      <div className="flex flex-col space-y-6">
        {/* texts */}
        <div className=" flex flex-col space-y-3 text-center md:text-left">
          <div>
            <div className="inline-block bg-black text-white rounded-full px-2 py-1">
              Free shipping
            </div>
          </div>
          <div className="text-2xl max-w-sm">
            Razar Kraken kitty Edt Gaming Headset Quartz
          </div>
        </div>
        {/* Prices */}
        <div className="flex flex-col space-y-3 text-center md:text-left">
          <div className="line-through">$799</div>
          <div className="font-bold text-5xl">$599</div>
          <p className="text-sm font-light">
            This offer is valid until April 3 or until the stock lasts!
          </p>
        </div>
        {/* button */}

        <div className="flex flex-col space-y-3">
          <button className="w-full border py-3 px-5 rounded-lg bg-blue-500 text-white border-b-8 border-b-blue-700 hover:border-t-8 hover:border-t-blue-700 hover:bg-blue-700 transition-all duration-200">
            Add to Cart
          </button>
          <div className="flex items-center space-x-3 text-sm">
            <div className="w-3 h-3 bg-green-500 rounded-full hover:animate-ping"></div>
            <div>50+ pcs. in stock</div>
          </div>
        </div>
        {/* buttons */}
        <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3">
          <button className="flex items-center justify-center px-5 py-3 border-2 w-full rounded-lg space-x-2 hover:-translate-y-0.5 duration-200 hover:shadow-lg">
            <IoCartOutline className="h-5 w-5" />
            <span className="">Add to Cart</span>
          </button>
          <button className="flex items-center justify-center px-5 py-3 border-2 w-full rounded-lg space-x-2 hover:-translate-y-0.5 duration-200 hover:shadow-lg">
            <CiHeart className="h-5 w-5" />
            <span className="">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
//The offer is valid until April 3 or until the stock lasts!
//Razar Kraken kitty Edt Gaming Headset Quartz

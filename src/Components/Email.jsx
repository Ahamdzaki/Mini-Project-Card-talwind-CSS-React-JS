import React from "react";

export default function Email() {
  return (
    <div className="p-2 bg-zinc-800 rounded-xl">
      <div className="flex flex-col md:flex-row">
        {/* image */}
        <img
          src="../src/assets/image.jpg"
          alt=""
          className="h-80 rounded-xl hover:scale-105 duration-200 md:rounded-l-xl md:rounded-r-none md:h-64"
        />
        {/* text */}
        <div className="p-2 md:p-8 space-y-3 md:space-y-5 text-white text-center md:text-left">
          <h2 className="text-lg md:text-xl mt-2 font-serif">
            Get Diet and fitness tips in your inbox
          </h2>
          <p className="max-w-xs text-sm">
            Eat better and excercise better. Sign Up for the diet and fitness
            newsletter
          </p>
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
            <input
              type="text"
              placeholder="Enter your Email"
              className="px-5 py-3 bg-zinc-800 placeholder:text-center outline-none border border-zinc-700 rounded-md"
            />
            <button className="px-5 py-3 bg-lime-500 rounded-md text-black hover:bg-lime-600 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

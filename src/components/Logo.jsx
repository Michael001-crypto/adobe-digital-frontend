import React from "react";

const Logo = () => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-32 h-32 mb-4 animate-pulse"
        style={{
          background: "linear-gradient(135deg, #0057FF, #00BFFF)",
          clipPath:
            "polygon(50% 0%, 20% 100%, 35% 100%, 50% 65%, 65% 100%, 80% 100%)",
        }}
      ></div>
      <div className="text-2xl font-bold tracking-wider text-gray-800 dark:text-white">
        ADOBE <span className="text-blue-600">DIGITAL</span>
      </div>
    </div>
  );
};

export default Logo;

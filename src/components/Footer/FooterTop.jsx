import React, { useState } from "react";
import AmazonLogo from "../../assets/amazon2.png";

export default function FooterTop() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedCountry, setSelectedCountry] = useState("Egypt");

  return (
    <div className="bg-gray-800 w-full">
      {/* Grid Sections */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-screen-xl mx-auto p-6 text-white">
        {/* Column 1 */}
        <div className="flex flex-col">
          <p className="font-bold">Get to Know Us</p>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Careers</a>
          <a href="#" className="hover:underline">Press Releases</a>
          <a href="#" className="hover:underline">Amazon Science</a>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col">
          <p className="font-bold">Connect with Us</p>
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Instagram</a>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col">
          <p className="font-bold">Make Money with Us</p>
          <a href="#" className="hover:underline">Sell on Amazon</a>
          <a href="#" className="hover:underline">Sell under Amazon</a>
          <a href="#" className="hover:underline">Accelerator</a>
          <a href="#" className="hover:underline">Protect Your Brand</a>
          <a href="#" className="hover:underline">Amazon Global Selling</a>
          <a href="#" className="hover:underline">Supply to Amazon</a>
          <a href="#" className="hover:underline">Become an Affiliate</a>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col capitalize">
          <p className="font-bold">Let Us Help You</p>
          <a href="#" className="hover:underline">Your Account</a>
          <a href="#" className="hover:underline">Returns Center</a>
          <a href="#" className="hover:underline">Product Recalls</a>
          <a href="#" className="hover:underline">Purchase Protection</a>
          <a href="#" className="hover:underline">Amazon App Download</a>
          <a href="#" className="hover:underline">Help</a>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full h-[1px] bg-gray-500 my-6"></div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center py-6 gap-6">
        {/* Amazon Logo */}
        <img src={AmazonLogo} alt="Amazon Logo" className="w-32 md:w-24" />

        {/* Language Dropdown */}
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="py-2 px-4 border border-gray-400 bg-gray-700 text-white rounded"
        >
          <option value="English">English</option>
          <option value="Arabic">Arabic</option>
        </select>

        {/* Country Dropdown */}
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="py-2 px-4 border border-gray-400 bg-gray-700 text-white rounded"
        >
          <option value="Egypt">Egypt</option>
          <option value="India">India</option>
        </select>
      </div>
    </div>
  );
}

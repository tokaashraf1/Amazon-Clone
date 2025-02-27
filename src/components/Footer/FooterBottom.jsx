import React from 'react';

export default function FooterBottom() {
  return (
    <footer className="bg-gray-900 text-white p-8">
      {/* Top Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
        <div>
          <p className="font-semibold">AbeBooks</p>
          <p className="text-gray-400">Books, art & collectibles</p>
        </div>
        <div>
          <p className="font-semibold">Amazon Web Services</p>
          <p className="text-gray-400">Scalable Cloud Computing Services</p>
        </div>
        <div>
          <p className="font-semibold">Audible</p>
          <p className="text-gray-400">Download Audio Books</p>
        </div>
        <div>
          <p className="font-semibold">IMDb</p>
          <p className="text-gray-400">Movies, TV & Celebrities</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 text-center md:text-left">
        <div>
          <p className="font-semibold">Shopbop</p>
          <p className="text-gray-400">Designer Fashion Brands</p>
        </div>
        <div>
          <p className="font-semibold">Amazon Business</p>
          <p className="text-gray-400">Everything for Your Business</p>
        </div>
        <div>
          <p className="font-semibold">Prime Now</p>
          <p className="text-gray-400">2-Hour Delivery on Everyday Items</p>
        </div>
        <div>
          <p className="font-semibold">Amazon Prime Music</p>
          <p className="text-gray-400">100 million songs, ad-free</p>
          <p className="text-gray-400">Over 15 million podcast episodes</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 flex flex-col items-center text-center gap-4">
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#" className="text-gray-300 hover:underline">
            Conditions of Use & Sale
          </a>
          <a href="#" className="text-gray-300 hover:underline">
            Privacy Notice
          </a>
          <a href="#" className="text-gray-300 hover:underline">
            Interest-Based Ads
          </a>
        </div>
        <p className="text-sm text-gray-400">
          © 1996-2024, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
}

"use client";
import { useState } from "react";

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="flex flex-wrap gap-0 justify-between self-stretch px-10 py-3 border-b border-gray-200 border-solid">
      <div className="flex gap-4 my-auto text-lg font-bold tracking-tight text-neutral-900">
        <div className="shrink-0 my-auto w-4 h-4" />
        <div>Beni Company</div>
      </div>
      <div className="flex flex-wrap gap-5 pl-20 text-sm leading-5">
        <div className="hidden xl:flex gap-5 justify-between py-2.5 font-medium text-neutral-900">
          <div className="cursor-pointer">Features</div>
          <div className="cursor-pointer">Pricing</div>
          <div className="cursor-pointer">Contact Sales</div>
          <div className="cursor-pointer">Help</div>
        </div>
        <div className="hidden xl:flex gap-2 font-bold tracking-wide mt-4 md:mt-0">
          <button className="flex flex-col justify-center px-4 py-2.5 bg-blue-600 rounded-xl text-slate-50 hover:bg-blue-800">
            Sign up
          </button>
          <button className="flex flex-col justify-center px-4 py-2.5 rounded-xl bg-slate-200 text-neutral-900 max-md:px-5 hover:bg-slate-400">
            Log in
          </button>
        </div>
        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden flex flex-col justify-center px-4 py-2.5 rounded-xl bg-slate-200 text-neutral-900 max-md:px-5 hover:bg-slate-400"
          onClick={toggleMobileMenu}
        >
          <span className="block w-6 h-0.5 bg-neutral-500"></span>
          <span className="block w-6 h-0.5 bg-neutral-500 mt-1"></span>
          <span className="block w-6 h-0.5 bg-neutral-500 mt-1"></span>
        </button>
      </div>
      {/* Mobile Menu (Hidden initially) */}
      {showMobileMenu && (
        <div className="md:hidden flex flex-col gap-5 mt-4 pl-5">
          <div className="flex flex-col gap-5 justify-between py-2.5 font-medium text-neutral-900">
            <div className="cursor-pointer">Features</div>
            <div className="cursor-pointer">Pricing</div>
            <div className="cursor-pointer">Contact Sales</div>
            <div className="cursor-pointer">Help</div>
          </div>
          <div className="flex gap-2 font-bold tracking-wide">
            <button className="flex flex-col justify-center px-4 py-2.5 bg-blue-600 rounded-xl text-slate-50 hover:bg-blue-800">
              Sign up
            </button>
            <button className="flex flex-col justify-center px-4 py-2.5 rounded-xl bg-slate-200 text-neutral-900 max-md:px-5 hover:bg-slate-400">
              Log in
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

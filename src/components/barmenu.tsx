import React from "react";
import {
  AccountIcon,
  SalesIcon,
  MarketingIcon,
  HumansIcon,
  SettingIcon,
  AcademyIcon,
} from "../assets/index";
import { Logo } from "../assets/index";
import { useNavigate } from "react-router-dom";

const Barmenu = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#23262F] text-white w-[5rem] h-[100vh] flex flex-col items-center py-4 space-y-3 relative z-20">
      <div className="space-y-1">
        <div
          className="flex items-center justify-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Logo className="h-[3rem] w-[2.5rem]" />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <AcademyIcon className="h-5 w-5" />
          <span className="text-xs">Academy</span>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-3">
        <div className="flex flex-col items-center space-y-2">
          <AccountIcon className="h-5 w-5" />
          <span className="text-xs">Account</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <SalesIcon className="h-5 w-5" />
          <span className="text-xs">Sales</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <MarketingIcon className="h-5 w-5" />
          <span className="text-xs">Marketing</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <HumansIcon className="h-5 w-5" />
          <span className="text-xs">Humans</span>
        </div>
      </div>

      <div className="mt-auto flex flex-col items-center space-y-2">
        <SettingIcon className="h-5 w-5" />
        <span className="text-xs">Settings</span>
      </div>
    </div>
  );
};

export default Barmenu;

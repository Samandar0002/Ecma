import React, { ReactNode } from 'react';
import { BackIcon } from '../assets'; 
import { UserIcon } from '../assets';
import { useNavigate } from "react-router-dom";

interface NavItemProps {
  children: ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ children }) => {
  const navigate = useNavigate();
  
  return (
  <div className="flex items-center  rounded-lg px-3 py-1 space-x-2">
    <span className="text-gray-800 text-sm">{children}</span>
    <button className="text-gray-500 hover:text-gray-700" onClick={() => navigate('/')}>
      <BackIcon  /> 
    </button>
  </div>
);}

const NavigationBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-[4.5rem] w-full h-[3rem] bg-[#EFF1F3] flex items-center space-x-3 p-[1rem] z-[-1]">
      <div className="flex space-x-2 gap-[5rem]">
        <NavItem>Lessons</NavItem>
        <NavItem>Timetable</NavItem>
        <NavItem>Add Course</NavItem>
        <NavItem>Add Group</NavItem>
        <NavItem>Specialization</NavItem>
        <NavItem>Leads</NavItem>
        <NavItem>HRM</NavItem>
      </div>
      
     
      <div className="bg-[#23262F] ml-auto flex items-center rounded-2xl">
        <UserIcon className="h-5 w-5" /> 
        <button className="flex items-center space-x-1 rounded-full px-4 py-1">
          <span className="text-[#F4F5F6] text-sm">USER</span>
        </button>
      </div>
    </div>
    
  );
};

export default NavigationBar;

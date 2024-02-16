import React from "react";
import {
  SearchIcon,
  PlusIcon,
  Chevrodown,
  OverIcon,
  SquareIcon,
} from "../assets/index";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  value?: string;
  onQuery?: (q: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onQuery }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-10 left-14 w-full h-16 flex items-center px-4 z-10">
      <div className="flex justify-between items-center w-full h-12 bg-white px-4 rounded-lg">
        <div className="flex space-x-4">
          <div className="flex items-center bg-white rounded overflow-hidden relative w-full max-w-xs">
            <SearchIcon className="h-5 w-5 text-gray-500 absolute left-3" />
            <input
              className="pl-10 pr-4 py-2 w-full"
              type="search"
              placeholder="Search..."
              value={value}
              onChange={(e) => onQuery!(e.target.value)}
            />
            <button className="bg-gray-200 px-4 py-2 rounded-r-lg">
              <Chevrodown className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow-lg flex items-center cursor-pointer"
            onClick={() => navigate("/edit/:new")}
          >
            <PlusIcon className="h-5 w-5 mr-4" />
            ADD SPECIALIZATION
          </button>
          <div className="flex items-center space-x-8">
            <SquareIcon className="h-5 w-5" />
            <OverIcon className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
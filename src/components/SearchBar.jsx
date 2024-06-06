import React, { useState } from "react";
import { FaLocationArrow, FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch, unit, setUnit, onGeolocation }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center w-full max-w-md mb-4"
      >
        <div className="flex w-full mb-2 md:mb-0">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="p-2 border rounded-l-md flex-grow"
            placeholder="Enter city or zip code"
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-r-md flex-shrink-0"
          >
            <FaSearch />
          </button>
          <button
            onClick={onGeolocation}
            type="button"
            className="p-2 bg-green-500 text-white rounded-md ml-2 flex-shrink-0"
          >
            <FaLocationArrow />
          </button>
        </div>
        <div className="flex items-center ml-0 md:ml-4 mt-2 md:mt-0">
          <label className="mr-2">Unit:</label>
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="p-2 border rounded-md"
          >
            <option value="metric">Celsius</option>
            <option value="imperial">Fahrenheit</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

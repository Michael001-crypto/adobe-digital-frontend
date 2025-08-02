import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleInputChange}
      placeholder="Search..."
      className="w-full md:w-1/2 p-2 rounded-md border dark:border-gray-700 dark:bg-gray-900 dark:text-white"
    />
  );
};

export default SearchBar;

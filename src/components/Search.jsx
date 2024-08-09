import React from 'react';
import { useStore } from '../store/useStore';

const Search = () => {
  const setSearchTerm = useStore((state) => state.setSearchTerm);

  const handleSearchChange = (e) => {
    // console.log(e.target.value)
    setSearchTerm(e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchChange}
        className="border p-2 w-full"
      />
    </div>
  );
};

export default Search;

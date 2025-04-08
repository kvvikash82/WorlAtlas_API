import React from "react";

export const SearchFilter = ({ search, setSearch, filter, setFilter, countries, setCountries }) => {
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const sortCounries = (value) => {
    const sortCountry = [...countries].sort((a, b) =>{
      return value === "asc"
      ? a.name.common.localeCompare(b.name.common)
      : b.name.common.localeCompare(a.name.common)
    });
    setCountries(sortCountry);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center px-4 mb-[20px]">
        <input
          className="border-2 w-64 p-2 rounded-lg mb-4"
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleInputChange}
        />

        <div className="mb-5">
            <button onClick={() => sortCounries("asc")} className="text-blue-900 border-black hover:text-gray-400 text-[18px] font-semibold border-2 py-1 px-6 rounded-lg">ASC</button>
        </div>

        <div className="mb-5">
            <button onClick={() => sortCounries("des")} className="text-blue-900 border-black hover:text-gray-400 text-[18px] font-semibold border-2 py-1 px-6 rounded-lg">DES</button>
        </div>



        <select
          className="border-2 w-28 p-2 rounded-lg"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </>
  );
};

export default SearchFilter;

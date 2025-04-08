import React from "react";
import { NavLink } from "react-router-dom";
function CountryCard({ country }) {
  const { flags, name, population, region, capital } = country;

  return (
    <div className="bg-red-300 border-2 rounded-3xl shadow-lg h-ful group hover:scale-105 transition-transform duration-300">
      <img
        src={flags.svg}
        alt={flags.alt || name.common}
        className="w-ful= h-50 object-cover p-10 rounded-t-2xl duration-500 group-hover:rotate-[360deg] "
      />
      <div className="m-[-20px_10px_10px_40px] text-lg">
        <h2 className="text-2xl font-bold text-white  group-hover:text-blue-900">
          {name.common.length > 10
            ? name.common.slice(0, 10) + "..."
            : name.common}
        </h2>
        <p className="">
          <span className="font-semibold text-gray-600">Population :</span>{" "}
          {population.toLocaleString()}
        </p>
        <p>
          <span className="font-semibold  text-gray-600">Region :</span> {region}
        </p>
        <p>
          <span className="font-semibold  text-gray-600">Capital :</span>{" "}
          {capital?.[0]
            ? capital[0].length > 10
              ? capital[0].slice(0, 10) + "..."
              : capital[0]
            : "N/A"}
        </p>
        <NavLink to={`/country/${name.common}`}>
          <button className="text-white border-1 border-white p-[3px_20px_3px_20px] font-semibold mt-[10px] rounded-2xl hover:text-gray-500">Red More..</button>
           </NavLink>
      </div>
    </div>
  );
}

export default CountryCard;
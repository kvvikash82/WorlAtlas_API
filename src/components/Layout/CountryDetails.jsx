import React, { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import Loader from "../../Ui/Loader/Loader";
import { NavLink } from "react-router-dom";

function CountryDetails() {
  const params = useParams();
  console.log(params);

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id);
      console.log(res);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, []);

  if (isPending)
    return (
      <div className="flex justify-center mt-20">
        <Loader />
      </div>
    );
  return (
    <>
    <div className="max-w-4xl mx-auto p-8 mt-13 ">
      <div className="bg-white rounded-2xl  overflow-hidden grid md:grid-cols-2 gap-6  shadow-[0px_0px_10px_0px_grey]">
        
        {/* Left Side: Flag Image (now order first) */}
        <div className="flex items-center justify-center p-4 order-2 md:order-1 group ">
          <img
            src={country.flags?.svg}
            alt={country.flags?.alt || "Country Flag"}
            className="w-85 h-auto object-cover rounded-lg shadow-sm  duration-500 group-hover:rotate-[360deg]"
          />
        </div>
  
        {/* Right Side: Textual Data (now order second) */}
        <div className=" p-6 flex flex-col justify-center space-y-4 order-1 md:order-2 ">
          <h2 className="text-2xl font-bold text-blue-900">
            {country.name?.official}
          </h2>
  
          <p>
            <span className="font-bold text-gray-500">Native Names :</span>{" "}
            {country.name?.nativeName &&
              Object.keys(country.name.nativeName)
                .map((key) => country.name.nativeName[key].official)
                .join(", ")}
          </p>
  
          <p>
            <span className="font-bold  text-gray-500">Population :</span>{" "}
            {country.population?.toLocaleString()}
          </p>
  
          <p>
            <span className="font-bold  text-gray-500">Region :</span> {country.region}
          </p>
  
          <p>
            <span className="font-bold  text-gray-500">Sub Region :</span> {country.subregion}
          </p>
  
          <p>
            <span className="font-bold  text-gray-500">Capital :</span>{" "}
            {country.capital?.join(", ")}
          </p>
  
          <p>
            <span className="font-bold  text-gray-500">Top Level Domain :</span>{" "}
            {country.tld?.[0]}
          </p>
  
          <p>
            <span className="font-bold  text-gray-500">Languages :</span>{" "}
            {country.languages &&
              Object.values(country.languages).join(", ")}
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <NavLink to="/country">
        <button className="border-2  border-black text-red-500 p-[5px_15px_5px_15px] rounded-[10px] font-bold hover:text-gray-500 hover:scale-105 transition-transform duration-300">Go Back</button>
        </NavLink>
      </div>
    </div>
  </>
  );
};

export default CountryDetails;

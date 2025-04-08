import React from "react";
import countryFacts from "../api/countryData.json";

function About() {
  return (
    <>
      <section className=" py-35 bg-gradient-to-br from-blue-100 to-blue-300 max-w-[1420px] mx-auto sm:px-6 lg:px-8 m-[-80px_auto__8rem_auto]">
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-blue-900 text-center mb-10">
          Here are the Interesting Facts <br />
          We're Proud of
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {countryFacts.map((Country) => {
            const { id, countryName, capital, population, interestingFact } = Country;
            return (
              <div
                key={id}
                className="p-6 bg-red-300 rounded-xl font-sans text-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <p className="font-bold text-xl sm:text-2xl mb-2">{countryName}</p>
                <p className="mb-1">
                  <span className="text-blue-900 font-semibold">Capital: </span>
                  {capital}
                </p>
                <p className="mb-1">
                  <span className="text-blue-900 font-semibold">Population: </span>
                  {population}
                </p>
                <p>
                  <span className="text-blue-900 font-semibold">Interesting Fact: </span>
                  {interestingFact}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default About;

import React, { useEffect, useState, useTransition } from 'react';
import { getCountryData } from '../api/postApi';
import Loader from '../Ui/Loader/Loader';
import CountryCard from '../components/Layout/CountryCard';
import SearchFilter from '../Ui/SearchFilter';

function Country() {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <div className="flex justify-center mt-20"><Loader /></div>;
  
  const searchCountry = (country) => {
    if(search){
      return(
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
    }
    return country;
  }

  const filterReagin = (country) => {
    if(filter === "All") return country;
    return country.region === filter;
  }

  //Here isn the main logic
  const filterCounries = countries.filter((country) => searchCountry(country) && filterReagin(country));
  

  return (
    <> 
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 mt-50">
      <SearchFilter 
      search={search} 
      setSearch={setSearch} 
      filter={filter} 
      setFilter={setFilter}
      countries={countries}
      setCountries={setCountries}
       />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          filterCounries.map((curCountry, index) => (
            <li key={index} className="w-full">
              <CountryCard country={curCountry} />
            </li>
          ))
        }
      </ul>
    </div>
    </>
  );
}

export default Country;

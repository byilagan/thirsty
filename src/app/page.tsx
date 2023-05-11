'use client'

// React
import { useState, useEffect, useCallback, ChangeEvent } from "react"; 

// Components 
import DrinkList from "@components/DrinkList";
import SearchBar from "@components/SearchBar";
import Loader from "@components/Loader"; 

// Services 
import { getDrinksByName } from "@services";

// Types
import { IDrink } from "@types";

// Libs
import debounce from "lodash.debounce"; 

export default function DrinksView () {
  const [isLoading, setLoading] = useState(false);
  const [search, setSearch] = useState(""); 
  const [data, setData] = useState<IDrink[]>([]);

  const getDrinks = useCallback(debounce(async (searchStr) => {
    setLoading(true); 
    const {drinks} = await getDrinksByName(searchStr); 
    setData(drinks); 
    setLoading(false); 
  },300),[])

  useEffect(() => {
    getDrinks(search); 
  }, [search, getDrinks])

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value); 
  }

  return (
    <main>
      <div className="m-4">
        <SearchBar value={search} onChange={handleSearchChange}/>
      </div>
      {isLoading ? <Loader /> : <DrinkList drinks={data}/>}
    </main>
  )
}

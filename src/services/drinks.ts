// Types
import { IDrink } from "@types";

const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/";

export type DrinkRes = {
  drinks: IDrink[]
}

export const getDrinksByName: (s: string) => Promise<DrinkRes> = (search) => {
  return fetch(`${baseUrl}search.php?s=${search}`).then(res => res.json()); 
}

export const getDrinkById: (s: string) => Promise<DrinkRes> = (id) => {
  return fetch(`${baseUrl}lookup.php?i=${id}`).then(res => res.json()); 
}
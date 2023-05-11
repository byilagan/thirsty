// Utils
import { getValuesStartingWithKey } from "./getValuesStartingWithKey";

// Types
import { IDrink, IIngredient } from "@types";

/**
 * Extracts drink ingredients from drinks data into an array of objects
 */
export const getDrinkIngredientsFromData = (drinkObj: any) => {
  const ingredients = getValuesStartingWithKey<IDrink>("strIngredient", drinkObj);
  const measurements = getValuesStartingWithKey<IDrink>("strMeasure", drinkObj);  

  const data: IIngredient[]= []; 
  for (let i = 0; i < ingredients.length; i++) {
    const ingredient = ingredients[i];
    if (ingredient)
      data.push({
        name: ingredient, 
        value: measurements[i]
      })
  }

  return data;
}; 

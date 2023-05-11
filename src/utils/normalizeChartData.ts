// Libs
import { fraction, number } from "mathjs";

// Types
import { IIngredient, IPieChartItem } from "../types/drinks";

// Holds conversions to oz for supported units
const conversions: any = {
  cup: 8, 
  tsp: 0.166667,
  tblsp: 0.5, 
  cl: 0.33814, 
  shot: 1.5,
  shots: 1.5, 
  part: 1, 
  parts: 1,
  oz: 1
}

/**
 * Converts all measurement values to the same unit (oz)
 */
export const normalizeChartData = (data: IIngredient[]) => {
   const converted = data.map(d => {
    const unit = d.value?.toLowerCase().match(/[a-z]+/)?.[0]; 
    const value = d.value?.match(/[0-9\/\s]+/)?.[0].trim(); 
    const parsedValue = value ? number(fraction(value)) : null;

    if (parsedValue && (!unit || unit in conversions)) { // handles when there is no unit 
      return {
        ...d, 
        value: unit ? parsedValue * conversions[unit] : parsedValue
      }
    }

    return {...d, value: null};
  }); 

  const filtered: IPieChartItem[] = converted.filter(c => c.value); 

  return filtered; 
}; 

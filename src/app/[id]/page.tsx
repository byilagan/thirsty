// Next 
import Image from "next/image";

// Services
import { getDrinkById } from "@services"; 

// Utils 
import { getDrinkIngredientsFromData, getUniquePastelColors, normalizeChartData} from "@utils";

// Components
import { PieChart } from "@components/Chart";
import IngredientsList from "@components/IngredientsLegend"; 

type DrinkDetailsViewProps = {
  params: {
    id: string
  }
}

const DrinkDetailsView = async ({ params }: DrinkDetailsViewProps) => {
  const { id } = params; 
  const { drinks: [ drinkData ] } = await getDrinkById(id);

  const {
    strDrink,
    strDrinkThumb, 
    strInstructions
  } = drinkData; 

  const ingredients = getDrinkIngredientsFromData(drinkData); 
  const colors = getUniquePastelColors(ingredients.length); 
  const withColors = ingredients.map((i, index) => ({...i, color: colors[index]}));
  const normalized = normalizeChartData(withColors); 

  return (
    <div>
      <div className="flex flex-col items-center">
        <Image 
          src={strDrinkThumb} 
          alt="" 
          height={200} 
          width={200} 
          className="rounded-full mt-[30px]"
        />
        <p className="font-bold text-[20px] mt-[20px]">{strDrink}</p>
      </div>
      <div className="max-w-[500px] m-auto">
        <p className="mx-[20px] mt-[30px] text-[17px] font-bold">
          Ingredients:
        </p>
        <div className="flex justify-between">
          <IngredientsList data={withColors}/>
          <PieChart className="m-[20px]" data={normalized}/>
        </div>
        <p className="m-[20px] mt-[10px] text-[17px]">{strInstructions}</p>
      </div>
    </div>
  ); 
}

export default DrinkDetailsView;
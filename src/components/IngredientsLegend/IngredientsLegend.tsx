// Components 
import Ingredient from "./Ingredient";

// Types 
import { IIngredient } from "@types";

type IngredientsLegendProps = {
  data: IIngredient[]
}

const IngredientsLegend = ({ data }: IngredientsLegendProps) => {

  return (
    <ul className="m-[20px]">
      {data.map((d, i) => 
        <Ingredient key={d.name + i} data={d}/>
      )}
    </ul>
  );
}

export default IngredientsLegend;
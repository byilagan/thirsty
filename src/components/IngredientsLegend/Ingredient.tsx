import { IIngredient } from "../../types/drinks";

type IngredientProps = {
  data: IIngredient
}

const Ingredient = ({ data }: IngredientProps) => {
  const {
    name,
    value,
    color
  } = data;

  return (
    <li className="flex items-center mb-2">
      <div className={`h-[20px] w-[20px] min-h-[20px] min-w-[20px] rounded-[3px] mr-3`} style={{backgroundColor: color}}/>
      <span className="text-[17px]"> {name} {value && `(${value.trim()})`} </span>
    </li>
  )
}

export default Ingredient;
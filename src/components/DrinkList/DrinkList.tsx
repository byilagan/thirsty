// Components
import DrinkListItem from "./DrinkListItem";

// Types
import { IDrink } from "@types";

type DrinkListProps = {
  drinks: IDrink[]
}

const DrinkList = ({ drinks }: DrinkListProps) => {
  return (
    <ul>
      {drinks?.map((d, i) => <DrinkListItem key={i} drink={d}/>)}
    </ul>
  )
}

export default DrinkList;
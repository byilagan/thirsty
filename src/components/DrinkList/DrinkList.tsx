// Components
import DrinkListItem from "./DrinkListItem";

// Types
import { IDrink } from "@types";

type DrinkListProps = {
  drinks: IDrink[]
}

const DrinkList = ({ drinks }: DrinkListProps) => {
  return (
    <ul className="h-[calc(100vh-136px)] overflow-auto">
      {drinks?.map((d, i) => <DrinkListItem key={i} drink={d}/>)}
    </ul>
  )
}

export default DrinkList;
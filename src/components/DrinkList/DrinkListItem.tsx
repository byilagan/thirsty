// Next
import Image from "next/image";
import Link from "next/link";

// Types
import { IDrink } from "@types";

type DrinkListItemProps = {
  drink: IDrink
}

const DrinkListItem = ({drink}: DrinkListItemProps) => {
  const {
    strDrink,
    strDrinkThumb,
    idDrink,
  } = drink;

  return (
    <li className="h-[60px]">
      <Link href={`/${idDrink}`} className="flex items-center pl-[10px] pr-[20px] border-t-[1px] cursor-pointer hover:bg-[#f4f4f4]">
        <Image 
          src={strDrinkThumb} 
          alt="" width={40} 
          height={40} 
          className="m-[10px] mr-[15px] h-[40px] rounded-full"
        />
        <span className="h-fit text-[17px]">{strDrink}</span>
        <span className="h-fit ml-auto text-[#bbbbbb]">{`>`}</span>
      </Link>
    </li>
  )
}

export default DrinkListItem;
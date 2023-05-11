// React
import { ChangeEventHandler } from "react"

type SearchBarProps = {
  value: string, 
  onChange: ChangeEventHandler<HTMLInputElement>
}

const SearchBar = ({
  value, 
  onChange
}: SearchBarProps) => {
  return (
    <input 
      placeholder="Find a drink" 
      className="w-full pl-8 h-10 bg-[#f4f4f4] rounded-xl outline-none"
      value={value}
      onChange={onChange}
    />
  )
}

export default SearchBar;
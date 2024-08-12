import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Visiblity({setVisibility, defaultValue}:{defaultValue:boolean, setVisibility:React.Dispatch<React.SetStateAction<boolean>>}) {

    const [selectedValue, setSelectedValue] = React.useState(defaultValue ? "1" : "0");

    const handleValueChange = (value: string) => {
      // Convert the string value to a boolean
      const booleanValue = Boolean(Number(value));
      setSelectedValue(value); // Update internal state
      setVisibility(booleanValue); // Update parent component's state
    };
  return (
    <Select value={selectedValue} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Visibility" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Visiblity</SelectLabel>
          <SelectItem value="1">True</SelectItem>
          <SelectItem value="0">False</SelectItem>
         
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

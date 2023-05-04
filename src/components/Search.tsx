import {Input} from "@/components/ui/input";

export function Search(props:{iconsCount:number}) {
  return (
    <div className={"max-w-md w-full mx-auto select-none"}>
      <Input className={"rounded force:border-none"} placeholder={`Search ${props.iconsCount} Unicodes`}></Input>
    </div>
  )
}

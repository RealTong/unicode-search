import {Input} from "@/components/ui/input";

export function Search(props:{iconsCount:number}) {
  return (
    <div className={"mb-12 max-w-4xl w-full mx-auto select-none"}>
      <Input className={"rounded force:border-none"} placeholder={`Search ${props.iconsCount} Unicodes`}></Input>
    </div>
  )
}

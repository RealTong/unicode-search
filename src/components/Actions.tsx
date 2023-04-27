import {Slider} from "@/components/ui/slider"
import {cn} from "@/lib/utils";
import {SliderProps} from "@radix-ui/react-slider";
import {useIconStore} from "@/store/IconStore";


export function Actions({ ...props }: SliderProps) {
  const iconSizeChange = useIconStore(state => state.changeSize)

  const iconSizes = ["sm", "xs",  "xl", "2xl", "3xl", "4xl","5xl", "6xl"]
  return (
    <div className={"flex flex-col justify-center items-center"}>
      <Slider
        defaultValue={[1]}
        max={iconSizes.length-1}
        step={1}
        className={cn("w-[60%]")}
        onValueChange={(e)=>{

        }}
        onValueCommit={(e)=>{
          console.log(iconSizes[e[0]])
          const currentSize = iconSizes[e[0]]
          iconSizeChange(`text-${currentSize}`)
        }}
        {...props}
      />
    </div>
  )
}

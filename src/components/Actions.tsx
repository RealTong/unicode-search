import {Slider} from "@/components/ui/slider"
import {cn} from "@/lib/utils";
import {SliderProps} from "@radix-ui/react-slider";
import {useIconStore} from "@/store/IconStore";
import {HexColorPicker} from "react-colorful";
import React from "react";


export function Actions({ ...props }: SliderProps) {
  const iconSizeChange = useIconStore(state => state.changeSize)
  const iconColorChange = useIconStore(state => state.changeColor)

  const iconSizes = ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"]
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
          const currentSize = iconSizes[e[0]]
          iconSizeChange(`text-${currentSize}`)
        }}
        {...props}
      />
      <HexColorPicker className={"mt-10"} color={"#aabbcc"} onChange={(newColor)=>{
        iconColorChange(`${newColor}`)
      }} />
    </div>
  )
}

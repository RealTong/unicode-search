import {Search} from "@/components/Search";
import {Slider} from "@/components/ui/slider";
import {cn} from "@/lib/utils";
import {HexColorInput, HexColorPicker} from "react-colorful";
import React, {useCallback, useState} from "react";
import {useIconStore} from "@/store/IconStore";
import {SliderProps} from "@radix-ui/react-slider";


function Header({...props}: SliderProps) {
  const [isOpen,setIsOpen] = useState(false);
  const close = useCallback(()=>setIsOpen(false),[])

  const iconSizes = ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl"]
  // state
  const iconColor = useIconStore(state => state.color)
  const iconSizeChange = useIconStore(state => state.changeSize)
  const iconColorChange = useIconStore(state => state.changeColor)
  console.log("IconColor", iconColor)
  return (
    <div className={"flex flex-row p-4 relative h-20 items-center justify-between"}>
      <Search iconsCount={100}/>
      <Slider
        defaultValue={[1]}
        max={iconSizes.length - 1}
        step={1}
        className={cn("w-[30%]")}
        onValueCommit={(e) => {
          const currentSize = iconSizes[e[0]]
          iconSizeChange(`text-${currentSize}`)
        }}
        {...props}
      />
      <div className={`flex flex-row justify-center items-center relative h-20 overflow-visible`}>
        <div className={`w-10 h-10 border rounded-md mx-4 cursor-pointer`} style={{backgroundColor: `${iconColor}`}} onClick={()=>{setIsOpen(!isOpen)}}></div>
        {
          isOpen && (
            <div className={"absolute top-20 right-10"}>
              <HexColorPicker color={iconColor} onChange={(newColor) => {
                iconColorChange(`${newColor}`)
              }}/>
            </div>
          )
        }
        {/*<HexColorInput className={"border rounded-md"} color={iconColor} />*/}
      </div>
    </div>
  )
}

export default Header;
import React from 'react';
import type {Icon} from "@/types";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {useIconStore} from "@/store/IconStore";
function Icon(props: Icon) {
  const iconColor = useIconStore(state => state.color)
  const iconSize = useIconStore(state => state.size)
  return (
    <div className="mx-auto">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild
                          className={"w-16 h-16 border-1 border-gray-300 select-none rounded bg-white flex justify-center items-center hover:bg-gray-300 hover:cursor-pointer"}>
            <span className={`font-symbols ${iconSize}`} style={{color: `${iconColor}`}}>{props.char}</span>
          </TooltipTrigger>
          <TooltipContent>
            <p>{props.name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default Icon;
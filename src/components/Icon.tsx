import React from 'react';
import type {Icon} from "@/types";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

function Icon(props: Icon) {
  return (
    <div className="mx-auto">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild
                          className={"w-18 h-18 border-1 border-gray-300 select-none rounded bg-white flex justify-center items-center hover:bg-gray-300 hover:cursor-pointer"}>
            <span className="text-lg font-symbols ">{props.char}</span>
          </TooltipTrigger>
          <TooltipContent side={"bottom"} className={"bg-white rounded"}>
            <p>{props.name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default Icon;
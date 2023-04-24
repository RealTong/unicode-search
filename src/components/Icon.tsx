import React from 'react';
import type {Icon} from "@/types";
function Icon(props:Icon) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
        <span className="text-2xl jb-mono">{props.char}</span>
      </div>
      <div className="text-gray-500 text-sm">{props.code}</div>
    </div>
  );
}

export default Icon;
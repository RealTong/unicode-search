import {create} from "zustand";

interface IconStoreState{
  color: string,
  size: string,
  changeColor: (targetColor:string)=>void,
  changeSize:(targetSize:string)=>void
}
const useIconStore = create<IconStoreState>((set,get)=>({
  color: "white",
  size: "text-xs",
  changeColor: (targetColor)=>set((state)=>({
    color: targetColor
  })),
  changeSize: (targetSize)=>set((state)=>{
    console.log("targetSize: ",targetSize)
    return ({
      size: targetSize
    })
  })
}))

export {useIconStore}
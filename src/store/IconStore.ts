import {create} from "zustand";

interface IconStoreState{
  color: string,
  size: string,
  changeColor: (targetColor:string)=>void,
  changeSize:(targetSize:string)=>void
}
const useIconStore = create<IconStoreState>((set,get)=>({
  color: "text-black",
  size: "text-xs",
  changeColor: (targetColor)=>set((state)=>{
    console.log("targetColor: ",targetColor)
    return ({
      color: targetColor
    })
  }),
  changeSize: (targetSize)=>set((state)=>({
    size: targetSize
  }))
}))

export {useIconStore}
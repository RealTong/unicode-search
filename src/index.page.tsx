import React from 'react';

import Icon from "@/components/Icon";
import {useIconStore} from "@/store/IconStore";
import {Slider} from "@/components/ui/slider";
import {Search} from "@/components/Search";
import {Actions} from "@/components/Actions";

function Page(pageProps: any) {
  const {icons} = pageProps
  const changeIconColor = useIconStore(state => state.changeColor)
  return (
    <div className="px-4">
      <div className={"w-max m-auto my-14"}>
        <p className={"text-6xl"}>Cheat Sheet</p>
        <Actions/>
      </div>
      {/*搜索暂时先不做, 临时学习Zustand*/}
      {/*<Search iconsCount={icons.length}/>*/}
      <div className={"grid grid-cols-12 gap-4"}>
        {
          icons.map((item: any) => {
            return (
              <Icon {...item} key={item.name}/>
            )
          })
        }
      </div>
    </div>
  );
}

export {Page};
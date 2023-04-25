import React from 'react';

import '@unocss/reset/tailwind.css'
import 'uno.css'
import './assets/font.css'
import {Search} from "@/components/Search";
import Icon from "@/components/Icon";

function Page(pageProps: any) {
  const { icons } = pageProps
  return (
    <div className="px-4">
      <div className={"h-22"}>

      </div>
      <Search iconsCount={icons.length}/>
      <div className={"grid grid-cols-14 gap-4"}>
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
import React from 'react';

import '@unocss/reset/tailwind.css'
import 'uno.css'
import './font.css'
import {Search} from "@/components/Search";
import Icon from "@/components/Icon";

function Page(pageProps: any) {
  const { icons } = pageProps
  return (
    <div className="w-full">
      <Search/>
      {/*<UnicodeIcons/>*/}
      <div className={"flex flex-row flex-wrap"}>
        {
          icons.map((item: any) => {
            return (
              <Icon char={item.char} code={item.code} key={item.name}/>
            )
          })
        }
      </div>
    </div>
  );
}

export {Page};
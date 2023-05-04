import React from 'react';

import Icon from "@/components/Icon";
import Header from "@/components/Header";

function Page(pageProps: any) {
  const {icons} = pageProps
  return (
    <div className="px-4">
      {/*搜索暂时先不做, 临时学习Zustand*/}
      <Header/>
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
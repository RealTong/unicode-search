import fetch from "node-fetch";
import {Icon} from "@/types";
async function onBeforeRender(pageContext:any) {
  // `.page.server.js` 文件总是运行在 Node.js 环境中；在这里我们可以使用 SQL/ORM 查询
  const response = await fetch("https://nerd-fonts-glyph.deno.dev/");
  const json:any = await response.json();

  // 将对象转换为数组
  const icons:any = Object.keys(json).map((key) => {

    const icon:Icon = json[key];
    return {
      name: key,
      char: icon.char,
      code: icon.code,
    };
  });
  icons.shift() // 删除第一个元素 METADATA
  const pageProps = { icons };
  return {
    pageContext: {
      pageProps,
    },
  };
}
export { onBeforeRender };
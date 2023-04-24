async function UniCodeList() {
  const response = fetch('https://nerd-fonts-glyph.deno.dev/',{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const data = await (await response).json();

  data.map((item: any) => {
    console.log(item.unicode)
  })
  return data;
}
function UnicodeIcons() {
  return (
    <>
      {
        UniCodeList()
      }
    </>
  )
}

export default UnicodeIcons;
import fetch from "node-fetch"
let handler = async (m, { conn }) => {

  let data = await (await fetch('https://raw.githubusercontent.com/KazukoGans/database/main/anime/ppcouple.json')).json()
  let cita = data[Math.floor(Math.random() * data.length)]
  
  let cowi = await(await fetch(cita.cowo)).buffer()
  await conn.sendFile(m.chat, cowi, '', '*أرسلها لصديقتك💖*\n*ولا تنسى متابعتي هنا* \*https://www.instagram.com/hlimi_imran?igsh=MWZycXBsajB1b3JreQ==*', m)
  let ciwi = await(await fetch(cita.cewe)).buffer()
  await conn.sendFile(m.chat, ciwi, '', '*ارسلها لصديقك💖*\n*ولا تنسى متابعتي هنا* \*https://www.instagram.com/hlimi_imran?igsh=MWZycXBsajB1b3JreQ==*', m)
}
handler.help = ['ppcouple','tofanime']
handler.tags = ['anime']
handler.command = ['ppcouple','tofanime'] 


export default handler

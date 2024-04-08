let handler = async (m, { conn }) => {

m.reply(`*قناتي على الواتساب:*\n
*https://whatsapp.com/channel/0029VaMEWK77dmeRpOolHG2f*
*https://www.instagram.com/hlimi_imran?igsh=MWZycXBsajB1b3JreQ== تابعني هناك♥*`)
}
handler.help = ['channel']
handler.tags = ['infobot']
handler.command = /^(channel)$/i

export default handler;

import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '*الرجاء الاشارة الى الملصق الذي تريد أن تغير حقوقه مثال* : \n *.wm Imran_،hlimi*'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '*الرجاء الاشارة الى الملصق الذي تريد أن تغير حقوقه مثال* : \n *.wm noureddine ouafy*'
let img = await m.quoted.download()
if (!img) throw '*الرجاء  الاشارة الى الملصق الذي تريد أن تغير حقوقه مثال* : \n *.wm Imran_hlimi*'
stiker = await addExif(img, packname || global.packname, author || global.author)
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
else throw '*راسل صاحب البوت هناك مشكلة*\n https://www.instagram.com/hlimi_imran?igsh=MWZycXBsajB1b3JreQ==*'
}}
handler.help = ['wm']
handler.tags = ['sticker']
handler.command = /^take|wm$/i
export default handler

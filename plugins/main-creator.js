let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:1.0\nN:;ANGEL⁩;;\nFN:ANGEL-GT⁩\nORG:ANGEL-GT⁩\nTITLE:\nitem1.TEL;waid=527203112316:5218261275256\nitem1.X-ABLabel:ANGEL-GT\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:ANGEL-GT⁩\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'おBrayan.xyz⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler

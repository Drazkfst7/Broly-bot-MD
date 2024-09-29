import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  ['527203112316', 'Owner', true],
  ['595975655723']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['527203112316', '573143917092']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvz' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = '𝑩𝒓𝒐𝒍𝒚𝑩𝒐𝒕-𝑴𝑫' 
global.author = 'Drazk' 

//--info FG
global.botName = 'DRAZK-MD'
global.fgig = 'https://instagram.com/angxlfst7' 
global.fgsc = 'https://github.com/Drazkfst7' 
global.fgyt = 'https://youtube.com/Kaneki2kff'
global.fgpyp = 'https://paypal.me/'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 

//--- Grupos WA
global.id_canal = '120363312092804854@newsletter' //-ID de canal de WhatsApp
global.fgcanal = 'https://whatsapp.com/channel/UPbECxoB0cYovo60W'
global.bgp = 'https://chat.whatsapp.com/LQalZQmmyHUjno'
global.bgp2 = 'https://chat.whatsapp.com/LQalZQmyHUjno'
global.bgp3 = 'https://chat.whatsapp.com/BoaRPJlKLnN' //--GP NSFW

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

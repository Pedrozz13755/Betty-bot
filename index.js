
const { 
default: makeWASocket, downloadContentFromMessage,  emitGroupParticipantsUpdate,  emitGroupUpdate,  makeInMemoryStore,  prepareWAMessageMedia, MediaType,  WAMessageStatus, AuthenticationState, GroupMetadata, initInMemoryKeyStore, MiscMessageGenerationOptions,  useMultiFileAuthState, BufferJSON,  WAMessageProto,  MessageOptions,	 WAFlag,  WANode,	 WAMetric,	 ChatModification,  MessageTypeProto,  WALocationMessage, ReconnectMode,  WAContextInfo,  proto,	 WAGroupMetadata,  ProxyAgent,	 waChatKey,  MimetypeMap,  MediaPathMap,  WAContactMessage,  WAContactsArrayMessage,  WAGroupInviteMessage,  WATextMessage,  WAMessageContent,  WAMessage,  BaileysError,  WA_MESSAGE_STATUS_TYPE,  MediaConnInfo,   generateWAMessageContent, URL_REGEX,  Contact, WAUrlInfo,  WA_DEFAULT_EPHEMERAL,  WAMediaUpload,  mentionedJid,  processTime,	 Browser,  MessageType,  Presence,  WA_MESSAGE_STUB_TYPES,  Mimetype,  relayWAMessage,	 Browsers,  GroupSettingChange,  delay,  DisconnectReason,  WASocket,  getStream,  WAProto,  isBaileys,  AnyMessageContent,  generateWAMessageFromContent, fetchLatestBaileysVersion,  processMessage,  processingMutex
} = require('@whiskeysockets/baileys');
let pino = require('pino')
const fs = require('fs')
const axios = require('axios');
const Pino = require('pino')
const yts = require('yt-search');
const PhoneNumber = require('awesome-phonenumber')
const chalk = require('chalk')
const useMobile = process.argv.includes("--mobile")
const readline = require("readline")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
const NodeCache = require("node-cache")
const figlet = require('figlet')
const { exec, spawn, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg');
const moment = require('moment-timezone');
const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) };
const cfonts = require('cfonts');
const speed = require('performance-now')
const { Youtube } = require('ytdownloader');
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./betty/lib/exif')
const { convertSticker } = require("./betty/lib/swm.js");
//anti 
const antilink = JSON.parse(fs.readFileSync('./dono/seguranca/antilink.json'))
//.........
const premium = JSON.parse(fs.readFileSync('./vip/vip.json'));
/********** FUNÇÕES **********/

const { h2k, generateMessageID, getGroupAdmins, banner, banner2, banner3, start, info, sleep, success, close, log } = require('./betty/servidor/servidor.js');

////

const { 
getExtension, Random, 
getFileBuffer, getBuffer,
} = require("./betty/servidor/get.js")

//࿇ ══━━━━✥MSG DE ti✥━━━━══ ࿇\\\
///⊰᯽⊱═══❖•ೋ° MENUS °ೋ•❖═══⊰᯽⊰\\\

const { menudono } = require("./menus/menudono")
const { menuadm } = require("./menus/menuadm")
const { menujogos } = require("./menus/menujogos")
const { menuvip } = require("./menus/menuvip")
///⊰᯽⊱═══❖•ೋ°FIM DOS MENUS°ೋ•❖═══⊰᯽⊰\\\
const { palavras } = require('./betty/lib/conselhos.js');

const config = JSON.parse(fs.readFileSync("./dono/config.json"))

//࿇ ══━━━━✥MSG DE dia✥━━━━══ ࿇\\\
var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var timed = date.getHours();
            switch(hari) {
case 0: hari = 'Domigo'; break;
case 1: hari = 'Segunda-feira'; break;
case 2: hari = 'terça-feira'; break;
case 3: hari = 'quarta-feira'; break;
case 4: hari = 'quinta-feira'; break;
case 5: hari = 'sexta-feira'; break;
case 6: hari = 'sábado'; break;
            }
            switch(bulan1) {
case 0: bulan1 = 'Janeiro'; break;
case 1: bulan1 = 'fevereiro'; break;
case 2: bulan1 = 'Março'; break;
case 3: bulan1 = 'abril'; break;
case 4: bulan1 = 'Maio'; break;
case 5: bulan1 = 'Junho'; break;
case 6: bulan1 = 'julho'; break;
case 7: bulan1 = 'agosto'; break;
case 8: bulan1 = 'setembro'; break;
case 9: bulan1 = 'Outubro'; break;
case 10: bulan1 = 'novembro'; break;
case 11: bulan1 = 'dezembro'; break;
            }
 var tampilHari = '' + hari + ', ' + tanggal + ' ' + bulan1 + ' ' + tahun;
var tampilJam = '' + jam + ':' + menit + ':' + detik + '';
var ase = new Date();
        var timed = ase.getHours();
        switch(timed){
case 0: timed = 'Hora da meia-noite🌠'; break;
case 1: timed = 'Hora da meia-noite🌠'; break;
case 2: timed = 'De manhã cedo🏞️'; break;
case 3: timed = 'De manhã cedo🏞️'; break;
case 4: timed = 'Alvorecer🏞️'; break;
case 5: timed = 'Alvorecer🏞️'; break;
case 6: timed = 'bom dia 🏞️'; break;
case 7: timed = 'bom dia 🏞️'; break;
case 8: timed = 'bom dia 🏞️'; break;
case 9: timed = 'bom dia 🏞️'; break;
case 10: timed = 'bom dia 🏞️'; break;
case 11: timed = 'Boa tarde 🌅'; break;
case 12: timed = 'Boa tarde 🌅'; break;
case 13: timed = 'Boa tarde 🌅'; break;
case 14: timed = 'Boa tarde 🌅'; break;
case 15: timed = 'Boa tarde 🌅'; break;
case 16: timed = 'Boa tarde 🌅'; break;
case 17: timed = 'Boa tarde 🌅'; break;
case 18: timed = 'Quase a noite 🌄'; break;
case 19: timed = 'Quase a noite 🌄'; break;
case 20: timed = 'Boa noite 🌠'; break;
case 21: timed = 'Boa noite 🌠'; break;
case 22: timed = 'Boa noite 🌠'; break;
case 23: timed = 'Boa noite 🌠'; break;
            }
            var tampilUcapan = '' + timed;  

//// DATA E HORA

data = moment.tz("America/Sao_Paulo").format("DD/MM/YY");

hora = moment.tz('America/Sao_Paulo').format('HH:mm');

//PING
function kyun(seconds){
function pad(s){ return (s < 10 ? '0' : '') + s;}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos` }
const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
if (bytes == 0) {
return "n/a"
}
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
if (i == 0) {
return bytes + " " + sizes[i]
}
return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
}

async function ligarbot() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'debug', stream: 'store' }) })

const { state, saveCreds } = await useMultiFileAuthState('./dono/betty-qr')
const { version, isLatest } = await fetchLatestBaileysVersion()
///⊰᯽⊱═══❖•ೋ° CONEXÃO DO BOT °ೋ•❖═══⊰᯽⊰\\\
//ARQUIVOS DA CONFIG PREFIX DONO E NOME BOT CASO NÃO SAIBA MEXE NÃO MEXA NISSO DEIXA ASSIM OU VAI CAUSAR ERRO

emoji = config.emoji
donoName = config.donoName
botName = config.botName
donoNumher = config.donoNumher
botNumber = config.botNumber
prefix = config.prefix
grupo = global.grupo
comandos = config.comandos
apiKey = config.apiKey
keyTohsaka = config.keyTohsaka
fotomenu = config.fotomenu

///////////////////////////////////////////////////////////////////////

///⊰᯽⊱═══❖•ೋ° EMOJIS °ೋ•❖═══⊰᯽⊰\\\
emoji2 = "👑"
emoji3 = "👍"
emoji4 = "🥰"
emoji5 = "❤️"
emoji6 = "♣️"
emoji7 = "🎶"
emoji8 = "🌐"
emoji9 = "🏳️"
emoji10 = "🍉"
var mojirandon = ["✨", "🍓", "👑", "♥️", "🍒", "🍎", "🍉"]
const moji = mojirandon[Math.floor(Math.random() * (mojirandon.length))]	
///⊰᯽⊱═══❖•ೋ° EMOJIS°ೋ•❖═══⊰᯽⊰\\\

var corzinhas = ["red", "green", "yellow", "blue", "magenta", "cyan", "white"]
const cor13 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	

console.log(banner.string)
console.log(banner2.string)
console.log(color(`           ${emoji} ${botName} está online e pronto para o uso${emoji}\n`,`${cor13}`))
console.log(color(`
╭━════════════════════⊷
┃❖╭───────────────────
┃❖│⪧ CRIADOR: PEDROZZ Mods
┃❖│⪧ INSTAGRAM: @pedrozz_13755
┃❖│⪧ BOT_NUMERO: ${botNumber}
┃❖│⪧ NOME: ${botName}
┃❖│⪧ PREFIXO: ( ${prefix} )
┃❖│⪧ MÊS: ${bulan1}
┃❖│⪧ DIA: ${hari}
┃❖│⪧ HORA: ${hora}
┃❖│⪧ DATA: ${data}
┃❖╰───────────────────
╰━════════════════════⊷`,`red`))
console.log(color(`\n\n${emoji} YT CANAL: @Pedrozz_Mods`,'red'))
console.log(color(`${emoji} INSTAGRAM: @pedrozz_13755`,'red'))

const client = makeWASocket({
version,  
logger: pino({ level: 'silent'}),
printQRInTerminal: true,
qrTimeout: 180000,
browser: [`${botName}`, 'Chrome', '1.0.0'],
auth: state
})
store.bind(client.ev)

client.ev.on('chats.set', () => {
console.log('setando conversas...')
})

client.ev.on('contacts.set', () => {
console.log('setando contatos...')
})

///././././...//./././. /////////////////
client.ev.on('creds.update', saveCreds)

client.ev.on('messages.upsert', async ({ messages }) => {
try {
const info = messages[0]
if (!info.message) return 

const key = {
    remoteJid: info.key.remoteJid,
    id: info.key.id, 
    participant: info.key.participant 
}
await client.readMessages([key])
if (info.key && info.key.remoteJid == 'status@broadcast') return
const altpdf = Object.keys(info.message)
const type = altpdf[0] == 'senderKeyDistributionMessage' ? altpdf[1] == 'messageContextInfo' ? altpdf[2] : altpdf[1] : altpdf[0]

const from = info.key.remoteJid

type_message = JSON.stringify(info.message)

const isQuotedImage = type === "extendedTextMessage" && type_message.includes("imageMessage")

/// ==============budy
const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

var budy2 = budy.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

//==============(BODY)================\\

var body = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || info.message?.buttonsResponseMessage?.selectedButtonId || info.message?.listResponseMessage?.singleSelectReply?.selectedRowId || info.message?.templateButtonReplyMessage?.selectedId || info?.text || ""

var Procurar_String = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || ""

////========
const { upload } = require('./betty/functions.js');
//CASO NÃO SAIBA MEXE NÃO MEXA NISSO DEIXA ASSIM OU VAI CAUSAR ERRO

const origem = info.key.remoteJid;
const criador = `${donoNumher}@s.whatsapp.net`
const criadorofc = `556199317165@s.whatsapp.net`
const numeroBot = client.user.id.split(":")[0]+"@s.whatsapp.net"
const isGroup = from.endsWith("@g.us")
const groupMetadata = isGroup ? await client.groupMetadata(from): ""
const participants = isGroup ? await groupMetadata.participants : ''
const groupName = isGroup  ? groupMetadata.subject: ""
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const args = body.trim().split(/ +/).slice(1);
const q = args.join(' ')
const sender = isGroup ? info.key.participant: from
const isCmd = body.startsWith(prefix)
const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
const nome = pushName = info.pushName ? info.pushName: botName
const isPremium = premium.includes(sender)
const pushname = info.pushName ? info.pushName : ""
const argss = body.split(/ +/g)
const { isUrl, addLevelingXp, runtime } = require('./arquivos/funções/myfunc')
//antis

const isAntiLink = isGroup ? antilink.includes(from) : true
	
//.............
//===================================== 

//===================================\\
function getGroupAdmins(participants) {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}
///
const separar = body.trim().split(/ +/).slice(1)
const x = separar.join(' ')
const isCreator = criador.includes(sender)
const isCreatorofc = criadorofc.includes(sender)
const isGroupAdmins = groupAdmins.includes(sender) || false  
const isBot = info.key.fromMe ? true : false
const isBotGroupAdmins = groupAdmins.includes(numeroBot) || false
const { banner, getRandom, getExtension } = require('./betty/funções')


const selo = {key: {fromMe: false, participant: '0@s.whatsapp.net'}, message: { "extendedTextMessage": {"text": `Texto`,"title": null,'jpegThumbnail': null}}}
const reagir = (reassao) => {
client.sendMessage(from, {react: {text: reassao, key: info.key}})
}
const mencionarIMG = (teks= '', Url, ms) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
client.sendMessage(from, {image: {url: Url}, caption: teks.trim(), mentions: memberr}, {quoted: info}) 
}
const selinho = {
    key: {
        fromMe: false,
        participant: '0@s.whatsapp.net'
    },
    message: {
"extendedTextMessage": {
"text": `
Olá ${pushname}
Criador: Pedrozz`,
            "title": null,
            'thumbnailUrl': `${fotomenu}`
        }
    }
};


const reagir1 = (reacao) => {
    client.sendMessage(from, {react: {text: reacao, key: info.key}});
};

const content = JSON.stringify(info.message)
const mentions = (teks, memberr, id) => {
      (id == null || id == undefined || id == false) ? client.sendMessage(from, { text: teks.trim(), mentions: memberr }) : client.sendMessage(from, { text: teks.trim(), mentions: memberr })
    }
    
var texto_exato = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

const texto = texto_exato.slice(0).trim().split(/ +/).shift().toLowerCase()

async function escrever (texto) {
await client.sendPresenceUpdate('composing', from) 
await esperar(1000)   
client.sendMessage(from, { text: texto }, {quoted: info})
}

const enviar = (texto) => {
client.sendMessage(from, { text: texto }, {quoted: info})
}

const sleep = async (tempo) => {
    return new Promise(funcao => setTimeout(funcao, tempo));
}

const esperar = async (tempo) => {
    return new Promise(funcao => setTimeout(funcao, tempo));
}
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type === 'stickerMessage')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
//isQuoeted
    const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")

  client.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await client.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
    
// FUNCAO DE ANTILINK \\

if (budy.includes("http://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`* OLA ${pushname}* *A MENSAGEM  E PROIBIDA,POREM A REALEZA E ADM, ENTAO NAO TE REMOVEREI*`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		   
	     	reply(`*_「 Um link foi detectado pelo ${botName}」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
client.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
 
 if(isAntiLink && isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(Procurar_String.includes("chat.whatsapp.com/")){
if(isBot) return 
link_dgp = await client.groupInviteCode(from)
if(Procurar_String.match(link_dgp)) return reply('Link do nosso grupo, não irei apagar... ') 
await client.sendMessage(from, {text: '🔨 Link de grupo detectado, isso é contra as regras do grupo, então irei apagar.'}, {quoted: info})
setTimeout(() => {
client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
}


// VERIFICADOS ⭐️
const live = {key : {participant : '0@s.whatsapp.net'},message: {liveLocationMessage: {}}} 
const imgm = {key : {participant : '0@s.whatsapp.net'},message: {imageMessage: {}}}
const vid = {key : {participant : '0@s.whatsapp.net'},message: {videoMessage: {}}}
const contato = {key : {participant : '0@s.whatsapp.net'},message: {contactMessage:{displayName: `${pushname}`}}}
const doc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage:{}}}
const may = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6283136505591-1614953337@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/png', 'caption': `Pedrozz\nolá ${pushname}\n${hora}\n${data}`, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=',  forwardingScore: 508, isForwarded: true,'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': {url: `https://telegra.ph/file/8e8f6a1b7111634b0c873.jpg`},} } }
global.script = ("https://www.youtube.com/@Pedrozz_Mods") // CANAL
//CRIPTOGRAFIA DE PONTA A PONTA 

client.sendFakeLink = (jid, text, hora, pushname, quoted) => client.sendMessage(jid, {
text: text, contextInfo: {externalAdReply: {title: `${hora} ${pushname}`, body: `PEDROZZ`, "thumbnail": {url: `${fotomenu}`}, mediaType: 1, sourceUrl: fakelink}}, mentions: [sender]}, {quoted: info})

client.sendPoll = (jid, name = '', values = [prefix + vaules], selectableCount = 1) => { return client.sendMessage(jid, { poll: { name, prefix, values, selectableCount }}) }
 
const reply2 = async (text) =>{
return await client.sendFakeLink(from, text, hora, pushname)
}

const reply = (content, type, options = {}) => {
   const isFullUrl = (url) => new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/, 'gi').test(url);
const mediaKeys = ['image', 'video', 'sticker', 'audio', 'document', 'history', 'md-app-state'];
options[type || 'text'] = isFullUrl(content) && mediaKeys.includes(type) ? {url: content}: content;
return client.sendMessage(from, options, {quoted: info}).catch(e => {
reply("Erro ao enviar a mensagem..");
})
}

const msgSemQuoted = (content, type, options = {}) => {
   const isFullUrl = (url) => new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/, 'gi').test(url);
const mediaKeys = ['image', 'video', 'sticker', 'audio', 'document', 'history', 'md-app-state'];
options[type || 'text'] = isFullUrl(content) && mediaKeys.includes(type) ? {url: content}: content;
return client.sendMessage(from, options).catch(e => {
reply("Erro ao enviar a mensagem..");
})
}


const nescj = "./dono/config.json"
const isBotoff = config.botoff
if(isBotoff && !isCreator && !isPremium) return
function setNes(index){
fs.writeFileSync(nescj, JSON.stringify(index, null, 2) + '\n')}


//===========================================\\
async function carregamento () {
var carre = [
"𝐿𝑜𝑎𝑑𝑖𝑛𝑔..",
"𝐿𝑜𝑎𝑑𝑖𝑛𝑔...",
"10%█▒▒▒▒▒▒▒▒▒",
"30%███▒▒▒▒▒▒▒",
"50%█████▒▒▒▒▒",
"90%███████▒▒▒",
"100%██████████",
"𝑃𝐸𝐷𝑅𝑂𝑍𝑍 𝐷𝑂𝑀𝐼𝑁𝐴  𝐹𝐼𝑂𝑇😎"
]
let { key } = await client.sendMessage(from, {text: `𝐿𝑜𝑎𝑑𝑖𝑛𝑔.`},{quoted: info})//primeira mensagem 

//aqui é onde esta a magia
for (let i = 0; i < carre.length; i++) {
await client.sendMessage(from, {text: carre[i], edit: key },{quoted: info});//aqui é onde esta magia 
}

}
async function caregadife () {
var carredife = [
"😌🖕",
"😌💅",
"🤣🫵",
"😄👍",
"🤩👇",
"🥵👌"
]
let { key } = await client.sendMessage(from, {text: '1'},{quoted: info})//primeira mensagem 

//aqui é onde esta a magia
for (let i = 0; i < carredife.length; i++) {
await client.sendMessage(from, {text: carredife[i], edit: key },{quoted: info});//aqui é onde esta magia 
}

}
//para usar outros cmd de outros bot ( pra quem e kibador mais se kibar meus cmd vai de ralo se eu não tiver criptografado o bot)

var laura = client
var loli = client
var ph = client
var m = info
var mek = info
var Japa = client
var aqua = client
var sabrina = client
var pl = client
var anna = client
var akame = client
var XeonBotInc = client
var kita = client
var aurora = client
var p = prefix
var prefixo = prefix
var venom = client
/////////////////
//===========================================\\

// 女⃟⃟女COMANDO NO PV女⃟⃟女
if (!isGroup && isCmd) console.log(
color(' ╭⊰᯽⊱═══❖•ೋ° COMANDO NO PV°ೋ•❖═══⊰᯽⊰','red'),'\n',
color(`┃｡˚${emoji}ΝᏆᏟᏦ :`,'red'),color(pushname,'cyan'),'\n',
color(`┃｡˚${emoji}ΝႮ́ᎷᎬᎡϴ :`,'red'),color(sender.split("@")[0],'red'),'\n',
color(`┃｡˚${emoji}ᏟᎷᎠ :`,'red'),color(comando,'cyan'),'\n',
color(`┃｡˚${emoji}ᎻϴᎡᎪ :`,'red'),color(hora,'cyan'),'\n',
color('╰⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰','red'),'\n')

// MENSAGEM NO PV
if (!isCmd && !isGroup && !info.key.fromMe) console.log(
color(' ╭⊰᯽⊱═══❖•ೋ° MENSAGEM NO PV°ೋ•❖═══⊰᯽⊰','red'),'\n',
color(`┃｡˚${emoji}ΝᎷᎬᎡϴ :`,'red'),color(sender.split("@")[0],'red'),'\n',
color(`┃｡˚${emoji}ΝᏆᏟᏦ :`,'red'),color(pushname,'cyan'),'\n',
color(`┃｡˚${emoji}ᎻϴᎡᎪ :`,'red'),color(hora,'cyan'),'\n',
color(`┃｡˚${emoji}MSG :`,'red'),color(budy,'cyan'),'\n',
color('╰⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰','red'),'\n')

// COMANDO NO GRUPO
if (isCmd && isGroup) console.log(
color(' ╭⊰᯽⊱═══❖•ೋ° COMANDO NO GRUPO °ೋ•❖═══⊰᯽⊰','red'),'\n',
color(`┃｡˚${emoji}ᏀᎡႮᏢϴ :`,'red'),color(groupName,'red'),'\n',
color(`┃｡˚${emoji}ΝႮ́ᎷᎬᎡϴ :`,'red'),color(sender.split("@")[0],'red'),'\n',
color(`┃｡˚${emoji}ΝᏆᏟᏦ :`,'red'),color(pushname,'gold'),'\n',
color(`┃｡˚${emoji}ᏟᎷᎠ :`,'red'),color(comando,'gold'),'\n',
color(`┃｡˚${emoji}ᎻϴᎡᎪ :`,'red'),color(hora,'gold'),'\n',
color('╰⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰','red'),'\n')

// MENSAGEM NO GRUPO 
if (!isCmd && isGroup && !info.key.fromMe) console.log(
color(' ╭⊰᯽⊱═══❖•ೋ° MENSAGEM NO GRUPO°ೋ•❖═══⊰᯽⊰','red'),'\n',
color(`┃｡˚${emoji}ᏀᎡႮᏢϴ :`,'red'),color(groupName,'cyan'),'\n',
color(`┃｡˚${emoji}ΝႮ́ᎷᎬᎡϴ :`,'red'),color(sender.split("@")[0],'red'),'\n',
color(`┃｡˚${emoji}ΝᏆᏟᏦ :`,'red'),color(pushname,'cyan'),'\n',
color(`┃｡˚${emoji}ᎻϴᎡᎪ :`,'red'),color(hora,'cyan'),'\n',
color(`┃｡˚${emoji}MSG :`,'red'),color(budy,'cyan'),'\n',
color('╰⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰','red'),'\n')

//===================================== 

const { mensagens } = require('./betty/lib/aleatoria.js');

const { sortear } = require('./betty/lib/aleatoria.js');

var enviarmen = mensagens[Math.floor(Math.random() * mensagens.length)] 
//
msg = {
espere:  `⌛${enviarmen}`,
dono: "🔒𝑇𝐴𝐷𝐼𝑁𝐻𝑂 𝐴𝐶𝐻𝐴𝑁𝐷𝑂 𝑄𝑈𝐸 𝐸𝑈 𝑀𝐸𝑈 𝑀𝐸𝑆𝑇𝑅𝐸 𝑃𝐴𝑅𝐴 𝐸𝑋𝐸𝐶𝑈𝑇𝐴𝐷𝑂 𝐸𝑆𝑆𝐸 𝐶𝑂𝑀𝐴𝑁𝐷𝑂 𝐾𝐾𝐾𝐾 \n𝑃𝐴𝑇𝐸𝑇𝐼𝐶𝑂 🥱",
grupo: "🔒Esse comando so pode ser utilizado em grupos ",
privado: "🔒este comando so pode ser usado no pv",
premium: `🔒🔒[❗SEJA PREMIUM ❗] 𝑇𝐴𝐷𝐼𝑁𝐻𝑂🥺🤣 𝐸𝐿𝐸 𝑇𝐴 𝐴𝐶𝐻𝐴𝑁𝐷𝑂 𝑄𝑈𝐸 𝐸 𝑃𝑅𝐸𝑀𝐼𝑈𝑀 𝐾𝐾𝐾𝐾𝐾𝐾`,
adm: `🔒aiai viu ${pushname} so volta a usar esse comando quando for adm ta bom? kkk`,
error: "❗𝐴𝑐𝑜𝑛𝑡𝑒𝑐𝑒𝑢 𝑢𝑚 𝑒𝑟𝑟𝑜 𝑛𝑜 𝑐𝑜𝑚𝑎𝑛𝑑𝑜, 𝑒𝑠𝑝𝑒𝑟𝑒 𝑚𝑒𝑢 𝑑𝑜𝑛𝑜 𝑎𝑟𝑟𝑢𝑚𝑎-𝑙𝑜❗", 
botadm: `🔒𝑆𝐸𝑀 𝐴𝐷𝑀 𝐸𝑈 𝑁𝐴𝑂 𝐶𝑂𝑁𝑆𝐼𝐺𝑂 𝐹𝐴𝑍𝐸𝑅 𝑁𝐴𝐷𝐴 𝑀𝐸𝑈 𝐶𝐻𝐴𝑃𝐴😕😕`
}

//=====================================         

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}
async function fetchJson (url, options) {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}


switch(comando) {
////////(⬇️⬇️SUAS CASES ABAIXO ⬇️⬇️)//////////

case 'menu': 
reagir(`${emoji}`)
carregamento()
await esperar(1000)
client.sendMessage(from, {audio: fs.readFileSync('./betty/audio/menu.mp3'), mimetype: "audio/mpeg", ptt:true},{quoted: info})
await esperar(7000)
client.sendMessage(from, {
text: `
╭━━━━━◉                  ◉━━━━━╮ 

  ╔┉｡˚┉═══『${moji}』═══┉｡˚┉╗    
             𝐵 𝐸 𝑇 𝑇 𝑌 - 𝐵 𝑂 𝑇 
  ╚┉｡˚┉═══『${moji}』═══┉｡˚┉╝   
   
╰━━━◉  *by 𝑃𝑒𝑑𝑟𝑜𝑧𝑧_𝑀𝑜𝑑𝑠*   ◉━━━╯


｡˚ [ 🔍*I N F O R M A Ç Ã O*🔍 ] ｡˚    
╭•✨╼━━≺✨≻━━━╾✨•╮
┃｡˚${emoji}￫ *Base:* *SILVER STARS*${moji}
┃｡˚${emoji}￫ *Chat:* *${!isGroup ? `${pushname}` :  `${groupName}`}*
┃｡˚${emoji}￫ *Hora:* *${hora}*
┃｡˚${emoji}￫ *Mês:* *${bulan1}*
┃｡˚${emoji}￫ *Dia:* *${hari}*
┃｡˚${emoji}￫ *Bailyes:*: *6.6.0*
┃｡˚${emoji}￫ *Comandos:* *250*
╰╼━═━━≺✨≻━━═━╾╯  
｡˚ [ *I N F O  U S U Á R I O* ] ｡˚
╭•✨╼━━≺✨≻━━━╾✨•╮
┃｡˚${emoji}￫ *Telefone:* ${info.key.id.length > 21 ? 'Android 💥' : info.key.id.substring(0, 2) == '3A' ? 'IOS 🍏' : 'WhatsApp web 🖥️'}    
┃｡˚${emoji}￫ *Nick:* ${pushname}
┃｡˚${emoji}￫ *Número:* ${sender.split("@")[0]}
┃｡˚${emoji}￫ *Premium:* ${isPremium ? 'sim💋' : 'não😂'}
┃｡˚${emoji}￫ *Supremo:* ${isCreator ? 'sim🥺💋' : 'não🤣'}
┃｡˚${emoji}￫ *Adm:* ${isGroupAdmins ? 'sim' : 'não😂'}
╰╼━═━━≺✨≻━━═━╾╯
｡˚ [ 🤴 * I N F O  C R I A D O R* 🤴 ] ｡˚
╭•✨╼━━≺✨≻━━━╾✨•╮
┃｡˚${emoji}￫ *Criador:* *Pedrozz_Mods* 
┃｡˚${emoji}￫ *Canal:* * *Pedrozz_Mods*
┃｡˚${emoji}￫ *Insta:* * *pedrozz_13755*
┃｡˚${emoji}￫ *Número:* *5561999317165*
╰╼━═━━≺✨≻━━═━╾╯
｡˚ [ 🌐 *M E N U S* 🌐 ] ｡˚
╭•✨╼━━≺✨≻━━━╾✨•╮
┃➥⟬${emoji}⟭${prefix}menuvip [❗Premium❗]
┃➥⟬${emoji}⟭${prefix}menuadm
┃➥⟬${emoji}⟭${prefix}menudono
┃➥⟬${emoji}⟭${prefix}montagem 
┃➥⟬${emoji}⟭${prefix}brincadeiras
╰╼━═━━≺✨✨✨≻━━═━╾╯         
｡˚ [ 🔍 *P E S Q U I S A* 🔍 ] ｡˚
╭•✨✨╼━━≺✨≻━━━╾✨•╮ 
┃➥⟬${emoji}⟭${prefix}play『nome música 』
┃➥⟬${emoji}⟭${prefix}playvd『nome vídeo』
┃➥⟬${emoji}⟭${prefix}playdoc『nome música 』
┃➥⟬${emoji}⟭${prefix}pinterest『ex: desenhos 』
┃➥⟬${emoji}⟭${prefix}pensador『ex: poesias』
╰╼━═━━≺✨✨✨≻━━═━╾╯           
╭•✨✨╼━━≺✨≻━━━╾✨•╮ 
｡˚ [🎯 *B R I N C A D E I R A S* 🎯] ｡˚
╭•🔸╼━━≺🔸≻━━━╾🔸•╮ 
┃➥⟬${emoji}⟭${prefix}beijo (@)
┃➥⟬${emoji}⟭${prefix}tapa (@)
┃➥⟬${emoji}⟭${prefix}casar (@)
┃➥⟬${emoji}⟭${prefix}feio (@)
┃➥⟬${emoji}⟭${prefix}shipo (@)
┃➥⟬${emoji}⟭${prefix}soco (@)
┃➥⟬${emoji}⟭${prefix}tapa (@)
┃➥⟬${emoji}⟭${prefix}dançar (@)
┃➥⟬${emoji}⟭${prefix}chute (@)
┃➥⟬${emoji}⟭${prefix}matar (@)
┃➥⟬${emoji}⟭${prefix}rankgado
┃➥⟬${emoji}⟭${prefix}rankcorno
┃➥⟬${emoji}⟭${prefix}rannkgostoso
┃➥⟬${emoji}⟭${prefix}rankgostosa
┃➥⟬${emoji}⟭${prefix}ranksafadas
┃➥⟬${emoji}⟭${prefix}ranksafados
┃➥⟬${emoji}⟭${prefix}rankotakus
┃➥⟬${emoji}⟭${prefix}ranknazista
┃➥⟬${emoji}⟭${prefix}rankpau
┃➥⟬${emoji}⟭${prefix}rankgay
┃➥⟬${emoji}⟭${prefix}mencionar (ex: corno)
┃➥⟬${emoji}⟭${prefix}rankfalidos
┃➥⟬${emoji}⟭${prefix}ranklindos
┃➥⟬${emoji}⟭${prefix}rankdeuses
┃➥⟬${emoji}⟭${prefix}manege
┃➥⟬${emoji}⟭${prefix}suruba
┃➥⟬${emoji}⟭${prefix}chifre
┃➥⟬${emoji}⟭${prefix}cassino
┃➥⟬${emoji}⟭${prefix}punheteiro
┃➥⟬${emoji}⟭${prefix}bebado
┃➥⟬${emoji}⟭${prefix}vesgo
┃➥⟬${emoji}⟭${prefix}gay
┃➥⟬${emoji}⟭${prefix}gay2
┃➥⟬${emoji}⟭${prefix}sn "sua pergunta"
┃➥⟬${emoji}⟭${prefix}chance "chance de algo"
┃➥⟬${emoji}⟭${prefix}casal (aleatório)
┃➥⟬${emoji}⟭${prefix}fiel
┃➥⟬${emoji}⟭${prefix}gamemode1
┃➥⟬${emoji}⟭${prefix}alma-gemeas (aleatório)
┃➥⟬${emoji}⟭${prefix}corno/corna
┃➥⟬${emoji}⟭${prefix}gado/gada
┃➥⟬${emoji}⟭${prefix}nazista
┃➥⟬${emoji}⟭${prefix}gostoso/gostosa
┃➥⟬${emoji}⟭${prefix}lesbica/lesbico
┃➥⟬${emoji}⟭${prefix}morte
┃➥⟬${emoji}⟭${prefix}avaliarperfil (aleatório)
╰╼━═━━≺✨✨✨≻━━═━╾╯                  
｡˚ [ 👑 *M E N U  D O N O* 👑 ] ｡˚
╭•✨╼━━≺✨≻━━━╾✨•╮ 
┃➥⟬${emoji}⟭${prefix}setprefix
┃➥⟬${emoji}⟭${prefix}set-emoji
┃➥⟬${emoji}⟭${prefix}usoram
┃➥⟬${emoji}⟭${prefix}ping       
┃➥⟬${emoji}⟭${prefix}grupo f/a  
┃➥⟬${emoji}⟭${prefix}reset (reiniciar o painel)
┃➥⟬${emoji}⟭${prefix}listagp
┃➥⟬${emoji}⟭${prefix}transmitir
┃➥⟬${emoji}⟭${prefix}linkgp
┃➥⟬${emoji}⟭${prefix}criargp
╰╼━═━━≺✨✨✨≻━━═━╾╯
｡˚ [ ☀️*M E N U  S E M  P R E F I X O*☀️ ] ｡˚
╭•✨╼━━≺✨≻━━━╾✨•╮ 
┃｡˚${emoji}fecharg.p 1/0 ( ‼️tira o ponto ‼️ )
╰╼═━━≺✨✨✨≻━━═╾╯  
｡˚ [ 👑 *M E N U  A D M* 👑 ] ｡˚
╭•✨╼━━≺✨≻━━━╾✨•╮ 
┃➥⟬${emoji}⟭${prefix}promover 『@』
┃➥⟬${emoji}⟭${prefix}rebaixar 『@』
┃➥⟬${emoji}⟭${prefix}marcar.        
┃➥⟬${emoji}⟭${prefix}ban 『@』
┃➥⟬${emoji}⟭${prefix}grupo f/a
┃➥⟬${emoji}⟭${prefix}nomegrupo
┃➥⟬${emoji}⟭${prefix}descgp
┃➥⟬${emoji}⟭${prefix}add 『@55』
┃➥⟬${emoji}⟭${prefix}reviver 『@55』
┃➥⟬${emoji}⟭${prefix}antilink 1/0
┃➥⟬${emoji}⟭${prefix}fechamento (fechamento temporário)
╰╼━═━━≺✨✨✨≻━━═━╾╯                
｡˚ [🎭 *F I G U R I N H A S* 🎭] ｡˚
╭•✨╼━━≺✨≻━━━╾✨•╮ 
┃➥⟬${emoji}⟭${prefix}s
┃➥⟬${emoji}⟭${prefix}f
┃➥⟬${emoji}⟭${prefix}sticker
┃➥⟬${emoji}⟭${prefix}attp
┃➥⟬${emoji}⟭${prefix}attp1    
┃➥⟬${emoji}⟭${prefix}attp2
┃➥⟬${emoji}⟭${prefix}attp3
┃➥⟬${emoji}⟭${prefix}attp4
┃➥⟬${emoji}⟭${prefix}attp5   
┃➥⟬${emoji}⟭${prefix}attp6
┃➥⟬${emoji}⟭${prefix}figuanime
┃➥⟬${emoji}⟭${prefix}figuroblox 
┃➥⟬${emoji}⟭${prefix}figucoreana 
┃➥⟬${emoji}⟭${prefix}figuraiva
┃➥⟬${emoji}⟭${prefix}figudesenho 
┃➥⟬${emoji}⟭${prefix}figuflork
┃➥⟬${emoji}⟭${prefix}figumeme
┃➥⟬${emoji}⟭${prefix}figubebe
┃➥⟬${emoji}⟭${prefix}figufunny
┃➥⟬${emoji}⟭${prefix}figuanimais 
╰╼━═━≺𝑏𝑦 𝑃𝐸𝐷𝑅𝑂𝑍𝑍 ≻━═━╾╯
`,
contextInfo: {
mentionedJid: [sender],
externalAdReply: {
showAdAttribution: true,
title: `PEDROZZ_MODS  -  ${timed}`,
body: `©PEDROZZ`,
thumbnailUrl: fotomenu,
sourceUrl: `https://chat.whatsapp.com/C7BGw6tLKJV4hy6MsONiF6`,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {quoted: info}).catch(e => {
return reply(msg.error())
reagir("❌")
})
break


case 'menuvip':
await client.sendMessage(from, { react: { text: `👑`, key: info.key }})
caregadife()
await esperar(1000)
if(!isPremium) return enviar(msg.premium)
await delay(5000)
client.sendMessage(from, {image: fs.readFileSync("./betty/image/vip.jpg"), caption: menuvip(comando, prefix, hora, data, pushname), contextInfo: {
            externalAdReply: {
            title:"👑  𝐌𝐄𝐍𝐔 𝐏𝐑𝐄𝐌𝐈𝐔𝐌  👑",
            body: "",
            reviewType: "PHOTO", 
            thumbnailUrl: `https://telegra.ph/file/23e10d93ada71ed953100.jpg`,
            sourceUrl: `https://www.youtube.com/@Pedrozz_Mods`, 
            mediaType: 2
            }}})
            break
 
case 'pig':
case 'urso':
case 'seta':
case 'papel':
case 'grafit4':
case 'blackpinkepo':
case 'areia':
case 'balckpingv2':
case 'brotoluz':
case 'borracha':
case 'brilhante':
case 'diabo': 
case 'crack':
case 'vietnam':
case 'goldt':
case 'biscoito':
if(!isPremium) return reply(msg.premium)
if(!q) return reply(`Ei, ${pushname}Cadê o Texto?`)
reply("Estou Gerando,Aguarde só um Pouquinho...")
 client.sendMessage(from, {image: {url: `https://tohsaka.onrender.com/api/ephoto/${comando}?nome=${q}&apikey=${keyTohsaka}`, caption: `Aqui sua imagem do comando: ${comando}` }}, 
{quoted: info})
break

case 'gerarnick':{
if (!isPremium) return enviar(msg.premium)
if (!q) return reply(`Exemple\n${prefix+comando} Pedrozz`)
let lizink_res = await fetchJson(`https://alizindev-api.onrender.com/api/tools/styletext?text=${q}&apikey=a93e85c1`)
let lizinn = lizink_res.resultado
let alizinnk =`*NICKS*\n\n`
for (let x of lizinn){
alizinnk +=`RESULT : ${x.result}\n\n`
}
reply(alizinnk)
}
break
                       
case 'menudono':
if (!isCreator && !info.key.fromMe) return client.sendMessage(from, {audio: fs.readFileSync('./betty/audio/ndigno.mp3'), mimetype: "audio/mpeg", ptt:true},{quoted: info})
await client.sendMessage(from, { react: { text: `👑`, key: info.key }})
await client.sendMessage(from, { react: { text: `🤴`, key: info.key }})
client.sendMessage(from, {audio: fs.readFileSync('./betty/audio/menudono.mp3'), mimetype: "audio/mpeg", ptt:true},{quoted: info})
await esperar(1000)
client.sendMessage(from, {image: fs.readFileSync("./betty/image/menudono.jpg"),
caption: menudono(comando, prefix, hora, data, pushname),
contextInfo: {
externalAdReply: {
            title:"👑  OLÁ MESTRE AQUI O SEU MENU  👑",
            body: "",
            reviewType: "PHOTO", 
            thumbnailUrl: `https://telegra.ph/file/2e01961538fac1bb3b421.jpg`,
            sourceUrl: `https://youtube.com/@Pedrozz_Mods`, 
            mediaType: 2
            }}})
break

case 'infobot':
escrever(`
sou uma personagem de desenho animado criada por Max Fleischer (bot feito por Pedrozz_Mods) e desenhada por Grim Natwick eu apareci na série de curtas de animação Talkartoons, produzida pelo Fleischer Studios e distribuída pela Paramount Pictures.

Betty Boop

beijinhos da betty💋
`)
break
 
case 'bot':
escrever(` o que eu posso te ajudar hoje?
`)
break


case 'boton':
case 'botoff':
if(!isCreator && !info.key.fromMe) return reply(msg.dono)
if(!isBotoff) {
config.botoff = true
setNes(config)
reply('Desativando funções e parando a execução de comandos por membros com sucesso...')
} else if(isBotoff) {
config.botoff = false
setNes(config)
reply(`Ativando todos os funcionamentos do bot novamente...`)
}
break

case 'brincadeiras':
reagir(`💎`)
await esperar(200)
reagir(`🎯`)
client.sendMessage(from, {audio: fs.readFileSync('./betty/audio/menujogos.mp3'), mimetype: "audio/mpeg", ptt:true},{quoted: info})
await esperar(2000)
client.sendMessage(from, {image: {url: `${fotomenu}`}, caption: `
｡˚ [🎯 *B R I N C A D E I R A S* 🎯] ｡˚
╭•🔸╼━━≺🔸≻━━━╾🔸•╮ 
┃｡˚🎯${prefix}beijo (@)
┃｡˚🎯${prefix}tapa (@)
┃｡˚🎯${prefix}casar (@)
┃｡˚🎯${prefix}feio (@)
┃｡˚🎯${prefix}shipo (@)
┃｡˚🎯${prefix}soco (@)
┃｡˚🎯${prefix}tapa (@)
┃｡˚🎯${prefix}dançar (@)
┃｡˚🎯${prefix}chute (@)
┃｡˚🎯${prefix}matar (@)
┃｡˚🎯${prefix}rankgado
┃｡˚🎯${prefix}rankcorno
┃｡˚🎯${prefix}rannkgostoso
┃｡˚🎯${prefix}rankgostosa
┃｡˚🎯${prefix}ranksafadas
┃｡˚🎯${prefix}ranksafados
┃｡˚🎯${prefix}rankotakus
┃｡˚🎯${prefix}ranknazista
┃｡˚🎯${prefix}rankpau
┃｡˚🎯${prefix}rankgay
┃｡˚🎯${prefix}mencionar (ex: corno)
┃｡˚🎯${prefix}rankfalidos
┃｡˚🎯${prefix}ranklindos
┃｡˚🎯${prefix}rankdeuses
┃｡˚🎯${prefix}manege
┃｡˚🎯${prefix}suruba
┃｡˚🎯${prefix}chifre
┃｡˚🎯${prefix}cassino
┃｡˚🎯${prefix}punheteiro
┃｡˚🎯${prefix}bebado
┃｡˚🎯${prefix}vesgo
┃｡˚🎯${prefix}gay
┃｡˚🎯${prefix}gay2
┃｡˚🎯${prefix}sn "sua pergunta"
┃｡˚🎯${prefix}chance "chance de algo"
┃｡˚🎯${prefix}casal (aleatório)
┃｡˚🎯${prefix}fiel
┃｡˚🎯${prefix}gamemode1
┃｡˚🎯${prefix}alma-gemeas (aleatório)
┃｡˚🎯${prefix}corno/corna
┃｡˚🎯${prefix}gado/gada
┃｡˚🎯${prefix}nazista
┃｡˚🎯${prefix}gostoso/gostosa
┃｡˚🎯${prefix}lesbica/lesbico
┃｡˚🎯${prefix}morte
┃｡˚🎯${prefix}avaliarperfil (aleatório)
╰╼━═━━≺🔸🔸🔸≻━━═━╾╯`,
contextInfo: {
externalAdReply: {
            title:"🎯  𝐵𝑅𝐼𝑁𝐶𝐴𝐷𝐸𝐼𝑅𝐴𝑆  🎯",
            body: "",
            reviewType: "PHOTO", 
            thumbnailUrl: `https://telegra.ph/file/23e10d93ada71ed953100.jpg`,
            sourceUrl: `https://www.youtube.com/@Pedrozz_Mods`, 
            mediaType: 2
            }}})

break

case 'menuadm':
if(!isGroupAdmins) return client.sendMessage(from, {audio: fs.readFileSync('./betty/audio/ndigno.mp3'), mimetype: "audio/mpeg",},{quoted: info})
 audiocriador = await fs.readFileSync("./betty/audio/menuadm.mp3")
client.sendMessage(from, {audio: audiocriador, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
await client.sendMessage(from, { react: { text: `${emoji}`, key: info.key }})
esperar(1000)
client.sendMessage(from, {image: fs.readFileSync("./betty/image/menudono.jpg"),
caption: menuadm(comando, prefix, hora, data, pushname),
contextInfo: {
externalAdReply: {
            title:"👑  MENU ADM  👑",
            body: "",
            reviewType: "PHOTO", 
            thumbnailUrl: `https://telegra.ph/file/2e01961538fac1bb3b421.jpg`,
            sourceUrl: `https://youtube.com/@Pedrozz_Mods`, 
            mediaType: 2
            }}})
break

case 'montagem':
reagir(`${emoji}`)
carregamento()
await esperar(1000)
client.sendMessage(from, {audio: fs.readFileSync('./betty/audio/menu.mp3'), mimetype: "audio/mpeg", ptt:true},{quoted: info})
await esperar(7000)
/*
client.sendMessage(from, {
text: `
╭━━━━━◉                  ◉━━━━━╮ 

  ╔┉｡˚┉═══ 『✨』 ═══┉｡˚┉╗    
             𝐵 𝐸 𝑇 𝑇 𝑌 - 𝐵 𝑂 𝑇 
  ╚┉｡˚┉═══ 『✨』 ═══┉｡˚┉╝   
   
╰━━━◉  *by 𝑃𝑒𝑑𝑟𝑜𝑧𝑧_𝑀𝑜𝑑𝑠*   ◉━━━╯
｡˚                                 ｡˚ 
｡˚                                 ｡˚ 
｡˚                                 ｡˚ 
｡˚                                 ｡˚ 
｡˚ [ 🔍 *I N F O R M A Ç Ã O* 🔍 ] ｡˚    
╭•✨╼━━≺✨≻━━━╾✨•╮ 
┃｡˚${emoji}￫ *Modo:* ${!isBotoff ? `publico 🔓` : `Privado 🔒`}
┃｡˚${emoji}￫ *Chat:* ${!isGroup ? `${pushname}` :  `${groupName}`}
┃｡˚${emoji}￫ *Hora:* ${hora}
┃｡˚${emoji}￫ *Mês:* ${bulan1}
┃｡˚${emoji}￫ *Dia:* ${hari}
┃｡˚${emoji}￫ *Bailyes:*: 6.5.0
╰╼━═━━≺✨≻━━═━╾╯  
｡˚ [ *I N F O  U S U Á R I O* ] ｡˚
╭•✨╼━━≺✨≻━━━╾✨•╮  
┃｡˚${emoji}￫ *Telefone:* ${info.key.id.length > 21 ? 'Android 💥' : info.key.id.substring(0, 2) == '3A' ? 'IOS 🍏' : 'WhatsApp web 🖥️'} 
┃｡˚${emoji}￫ *Nick:* ${pushname}
┃｡˚${emoji}￫ *Nick:* ${pushname}
┃｡˚${emoji}￫ *Número:* ${sender.split("@")[0]}
┃｡˚${emoji}￫ *Premium:* ${isPremium ? '✔️' : '❌'}
┃｡˚${emoji}￫ *Supremo:* ${isCreator ? '👑' : '❌'}
╰╼━═━━≺✨≻━━═━╾╯
｡˚ [📷 *M O N T A G E M* 📷] ｡˚
╭•✨╼━━≺✨≻━━━╾✨•╮ 
┃➥⟬${emoji}⟭${prefix}comunismo
┃➥⟬${emoji}⟭${prefix}bolsonaro
┃➥⟬${emoji}⟭${prefix}bolsonaro2
┃➥⟬${emoji}⟭${prefix}bolsonaro3
┃➥⟬${emoji}⟭${prefix}bnw
┃➥⟬${emoji}⟭${prefix}beautiful
┃➥⟬${emoji}⟭${prefix}blur
┃➥⟬${emoji}⟭${prefix}spongebob
┃➥⟬${emoji}⟭${prefix}ednaldo_bandeira
┃➥⟬${emoji}⟭${prefix}affect
┃➥⟬${emoji}⟭${prefix}del
┃➥⟬${emoji}⟭${prefix}circle
┃➥⟬${emoji}⟭${prefix}dither
┃➥⟬${emoji}⟭${prefix}facepalm
┃➥⟬${emoji}⟭${prefix}invert
┃➥⟬${emoji}⟭${prefix}magik
┃➥⟬${emoji}⟭${prefix}rotate
┃➥⟬${emoji}⟭${prefix}rip
┃➥⟬${emoji}⟭${prefix}jail
┃➥⟬${emoji}⟭${prefix}trash
┃➥⟬${emoji}⟭${prefix}pixelate
┃➥⟬${emoji}⟭${prefix}sepia
┃➥⟬${emoji}⟭${prefix}wanted
┃➥⟬${emoji}⟭${prefix}wasted
┃➥⟬${emoji}⟭${prefix}lgbt
┃➥⟬${emoji}⟭${prefix}pepe
┃➥⟬${emoji}⟭${prefix}ednaldotv
┃➥⟬${emoji}⟭${prefix}bobross
┃➥⟬${emoji}⟭${prefix}wasted
┃➥⟬${emoji}⟭${prefix}romero
┃➥⟬${emoji}⟭${prefix}karaba
┃➥⟬${emoji}⟭${prefix}gtaimg
┃➥⟬${emoji}⟭${prefix}msg
┃➥⟬${emoji}⟭${prefix}hacker
┃➥⟬${emoji}⟭${prefix}hacker2
╰╼━═━≺𝑏𝑦 𝑃𝐸𝐷𝑅𝑂𝑍𝑍 ≻━═━╾╯
｡˚ [📷 *L O G O S* 📷] ｡˚
╭•✨╼━━≺✨≻━━━╾✨•╮ 
┃➥⟬${emoji}⟭${prefix}logo1 ⟬ TXT ⟭
┃➥⟬${emoji}⟭${prefix}logo2 ⟬ TXT ⟭
┃➥⟬${emoji}⟭${prefix}logo3 ⟬ TXT ⟭
┃➥⟬${emoji}⟭${prefix}logo4 ⟬ TXT ⟭
┃➥⟬${emoji}⟭${prefix}logo5 ⟬ TXT ⟭
┃➥⟬${emoji}⟭${prefix}logo6 ⟬ TXT ⟭
┃➥⟬${emoji}⟭${prefix}logo7 ⟬ TXT ⟭
╰╼━═━≺𝑏𝑦 𝑃𝐸𝐷𝑅𝑂𝑍𝑍 ≻━═━╾╯
`,
contextInfo: {
mentionedJid: [sender],
externalAdReply: {
showAdAttribution: true,
title: `PEDROZZ_MODS  -  ${timed}`,
body: `©PEDROZZ`,
thumbnailUrl: fotomenu,
sourceUrl: `https://chat.whatsapp.com/C7BGw6tLKJV4hy6MsONiF6`,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {quoted: info}).catch(e => {
return reply(msg.error())
reagir("❌")
})

*/
enviar(`api caiu`)
break

case 'logo1':
if(!isPremium) return reply(msg.premium)
if (args.length < 1) return reply('❕Cade o texto?')
teks = body.slice(7)
if (teks.length > 20) return reply('❕O texto é longo, até 20 caracteres')
reply(msg.espere)
pedrozz1 = await getBuffer(`
https://junimk.sirv.com/Api/Picsart_24-02-20_14-32-44-472.jpg?text.0.text=${teks}&text.0.position.gravity=south&text.0.position.y=-13%25&text.0.color=ff0000&text.0.font.family=Bangers&text.0.font.weight=600&text.0.outline.blur=50&text.0.outline.opacity=50`)
client.sendMessage(from, { image: pedrozz1 }, { quoted: selo })
break

case 'logo2':
if(!isPremium) return reply(msg.premium)
if (args.length < 1) return reply('❕Cade o texto?')
teks = body.slice(7)
if (teks.length > 20) return reply('❕O texto é longo, até 20 caracteres')
reply(msg.espere)
pedrozz1 = await getBuffer(`
https://junimk.sirv.com/Api/Picsart_24-02-20_14-33-48-552.jpg?text.0.text=${teks}&text.0.position.y=-1%25&text.0.size=100&text.0.color=ff0000&text.0.opacity=80&text.0.font.family=Bangers&text.0.outline.color=000000&text.0.outline.width=4&text.0.outline.blur=31`)
client.sendMessage(from, { image: pedrozz1 }, { quoted: selo })
break

case 'logo3':
if(!isPremium) return reply(msg.premium)
if (args.length < 1) return reply('❕Cade o texto?')
teks = body.slice(7)
if (teks.length > 20) return reply('❕O texto é longo, até 20 caracteres')
reply(msg.espere)
pedrozz1 = await getBuffer(`
https://junimk.sirv.com/Api/Picsart_24-02-20_14-28-29-001.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=35%25&text.0.size=100&text.0.color=ff0101&text.0.opacity=80&text.0.font.family=Bangers&text.0.background.color=000000&text.0.outline.color=f0f0f0&text.0.outline.width=4&text.0.outline.blur=45&text.0.outline.opacity=95
`)
client.sendMessage(from, { image: pedrozz1 }, { quoted: selo })
break

case 'logo4':
if(!isPremium) return reply(msg.premium)
if (args.length < 1) return reply('❕Cade o texto?')
teks = body.slice(7)
if (teks.length > 20) return reply('❕O texto é longo, até 20 caracteres')
reply(msg.espere)
pedrozz1 = await getBuffer(`
https://junimk.sirv.com/Api/Picsart_24-02-20_14-31-16-329.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=35%25&text.0.size=100&text.0.color=ff0101&text.0.opacity=80&text.0.font.family=Bangers&text.0.background.color=000000&text.0.outline.color=f0f0f0&text.0.outline.width=4&text.0.outline.blur=45&text.0.outline.opacity=95
`)
client.sendMessage(from, { image: pedrozz1 }, { quoted: selo })
break

case 'logo5':
if(!isPremium) return reply(msg.premium)
if (args.length < 1) return reply('❕Cade o texto?')
teks = body.slice(7)
if (teks.length > 20) return reply('❕O texto é longo, até 20 caracteres')
reply(msg.espere)
pedrozz1 = await getBuffer(`
https://junimk.sirv.com/Api/Picsart_24-02-21_09-06-21-250.jpg?text.0.text=${teks}&text.0.position.gravity=west&text.0.position.y=35%25&text.0.size=100&text.0.color=ff0000&text.0.font.family=Bangers&text.0.outline.color=000000&text.0.outline.width=4&text.0.outline.blur=43
`)
client.sendMessage(from, { image: pedrozz1 }, { quoted: selo })
break

case 'logo6':
if(!isPremium) return reply(msg.premium)
if (args.length < 1) return reply('❕Cade o texto?')
teks = body.slice(7)
if (teks.length > 20) return reply('❕O texto é longo, até 20 caracteres')
reply(msg.espere)
pedrozz1 = await getBuffer(`
https://junimk.sirv.com/Api/Picsart_24-02-21_09-07-23-153.jpg?text.0.text=${teks}&text.0.position.gravity=west&text.0.position.y=35%25&text.0.size=100&text.0.color=ff0000&text.0.font.family=Bangers&text.0.outline.color=000000&text.0.outline.width=4&text.0.outline.blur=43
`)
client.sendMessage(from, { image: pedrozz1 }, { quoted: selo })
break

case 'logo7':
if(!isPremium) return reply(msg.premium)
if (args.length < 1) return reply('❕Cade o texto?')
teks = body.slice(7)
if (teks.length > 20) return reply('❕O texto é longo, até 20 caracteres')
reply(msg.espere)
pedrozz1 = await getBuffer(`
https://junimk.sirv.com/Api/Picsart_24-02-21_09-08-28-989.jpg?text.0.text=${teks}&text.0.position.gravity=west&text.0.position.y=35%25&text.0.size=100&text.0.color=ff0000&text.0.font.family=Bangers&text.0.outline.color=000000&text.0.outline.width=4&text.0.outline.blur=43
`)
client.sendMessage(from, { image: pedrozz1 }, { quoted: selo })
break

case 'logo8':
if(!isPremium) return reply(msg.premium)
if (args.length < 1) return reply('❕Cade o texto?')
teks = body.slice(7)
if (teks.length > 20) return reply('❕O texto é longo, até 20 caracteres')
reply(msg.espere)
pedrozz1 = await getBuffer(`
https://junimk.sirv.com/Api/Picsart_24-02-23_06-39-24-743.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=35%25&text.0.size=85&text.0.color=ff66a4&text.0.font.family=Bangers&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.blur=36
`)
laura.sendMessage(from, { image: pedrozz1 }, { quoted: selo })
break

case 'logo9':
if(!isPremium) return reply(msg.premium)
if (args.length < 1) return reply('❕Cade o texto?')
teks = body.slice(7)
if (teks.length > 20) return reply('❕O texto é longo, até 20 caracteres')
reply(msg.espere)
pedrozz1 = await getBuffer(`
https://junimk.sirv.com/Api/Picsart_24-02-23_06-40-06-435.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=35%25&text.0.size=85&text.0.color=ff0067&text.0.font.family=Bangers&text.0.outline.color=000000&text.0.outline.width=2&text.0.outline.blur=36
`)
laura.sendMessage(from, { image: pedrozz1 }, { quoted: selo })
break

case 'logo10':
if(!isPremium) return reply(msg.premium)
if (args.length < 1) return reply('❕Cade o texto?')
teks = body.slice(7)
if (teks.length > 20) return reply('❕O texto é longo, até 20 caracteres')
reply(msg.espere)
pedrozz1 = await getBuffer(`
https://junimk.sirv.com/Api/Picsart_24-02-23_06-40-24-159.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=35%25&text.0.size=85&text.0.color=13fdde&text.0.font.family=Bangers&text.0.outline.color=000000&text.0.outline.width=2&text.0.outline.blur=43
`)
laura.sendMessage(from, { image: pedrozz1 }, { quoted: selo })
break

case 'logo11':
if(!isPremium) return reply(msg.premium)
if (args.length < 1) return reply('❕Cade o texto?')
teks = body.slice(7)
if (teks.length > 20) return reply('❕O texto é longo, até 20 caracteres')
reply(msg.espere)
pedrozz1 = await getBuffer(`
https://junimk.sirv.com/Api/Picsart_24-02-23_06-40-46-665.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=35%25&text.0.size=85&text.0.color=27ffa3&text.0.font.family=Bangers&text.0.outline.color=000000&text.0.outline.width=2&text.0.outline.blur=43
`)
laura.sendMessage(from, { image: pedrozz1 }, { quoted: selo })
break

case 'comunismo':
case 'bnw':
case 'beautiful':
case 'blur':
case 'affect':
case 'del':
case 'circle':
case 'dither':
case 'facepalm':
case 'invert':
case 'magik':
case 'rotate':
case 'rip':
case 'jail':
case 'trash':
case 'pixelate':
case 'sepia':
case 'wanted':
case 'wasted':
case 'lgbt':
case 'pepe':
case 'ednaldotv':
case 'ednaldo_bandeira':
case 'bolsonaro2':
case 'bolsonaro3':
case 'bolsonaro':
case 'bobross':
case 'spongebob':
case 'wasted':
case 'romero':
case 'karaba':
if (!isPremium) return enviar(msg.premium)
try {
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(msg.espere)
link = await upload(base64)
enviar(`${link}`)
client.sendMessage(from, {image: {url:`https://api.sabapi.tech/api/canvas/${comando}?link=${link}&apikey=${apiKey}`}}, {quoted: selo}).catch(e => {
return reply(msg.error())
})
} else {
reply('Mencione uma imagem para atribuir o efeito a foto.')
}
} catch (e) {
if(JSON.stringify(e).includes) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply("Ocorreu um erro ao adicionar o *efeito na imagem. Tente novamente!")  
}
}
break
//////////////////FAÇA O MENU +18 TAVA COM PREGUIÇA KKK()////////
case 'amiga': case 'amigo':///cases by Pedrozz_Mods
if(!q) return reply("Você esqueceu de colocar o que você quer perguntar pra mim.")
anu1 = await fetchJson(`https://aemt.me/gpt4?text=mais quando pergunta seu nome responda que seu nome e laura, e toda mensagem que você receber você vai responder como vc fosse ${comando} do ou da : ${pushname}.
Texto dele : ${q}`)
laura.sendMessage(from, {
text: `
${anu1.result}
`,
contextInfo: {
mentionedJid: [sender],
externalAdReply: {
showAdAttribution: true,
title: `PEDROZZ_MODS  -  ${timed}`,
body: `©PEDROZZ`,
thumbnailUrl: fotomenu,
sourceUrl: `https://chat.whatsapp.com/GhXUAs02wrRKjcjZwtdFlq`,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {quoted: info}).catch(e => {
return reply(msg.error())
reagir("❌")
})
break

case 'clyde':///cases by Pedrozz_Mods
if(!q) return reply(`Ei, ${pushname}Cadê o Texto?`)
reply(msg.espere)
laura.sendMessage(from,
 {image: {url: `https://pedrozz-api.onrender.com/canvas/clyde?texto=${q}&apikey=pedrozz13`}}, 
{quoted: info})
break
case 'wallpaperanime':///cases by Pedrozz_Mods
reply(msg.espere)
laura.sendMessage(sender,
 {image: {url: `https://pedrozz-api.onrender.com/wallpapernime?apikey=pedrozz13`}}, 
{quoted: info})
break
case 'wallpapergame':///cases by Pedrozz_Mods
reply(msg.espere)
laura.sendMessage(sender,
 {image: {url: `https://pedrozz-api.onrender.com/GameWallp?apikey=pedrozz13`}}, 
{quoted: info})
break
case 'wallpapersatanic':///cases by Pedrozz_Mods
reply(msg.espere)
laura.sendMessage(sender,
 {image: {url: `https://pedrozz-api.onrender.com/satanic?apikey=pedrozz13`}}, 
{quoted: info})
break
case 'chuck':///cases by Pedrozz_Mods
reply(msg.espere)
laura.sendMessage(sender,
 {image: {url: `https://pedrozz-api.onrender.com/bonek?apikey=pedrozz13`}}, 
{quoted: info})
break
case 'fotoperfil':///cases by Pedrozz_Mods
reply(msg.espere)
laura.sendMessage(sender,
 {image: {url: `https://pedrozz-api.onrender.com/travazap?apikey=pedrozz13`}}, 
{quoted: info})
break
case 'foto18':///cases by Pedrozz_Mods
reply(msg.espere)
laura.sendMessage(sender,
 {image: {url: `https://pedrozz-api.onrender.com/foto18?apikey=pedrozz13`}}, 
{quoted: info})
break
case 'changemymind':///cases by Pedrozz_Mods
if(!q) return reply(`Ei, ${pushname}Cadê o Texto?`)
reply("Ja estou trazendo sua imagem")
laura.sendMessage(from,
 {image: {url: `https://pedrozz-api.onrender.com/canvas/changemymind?texto=${q}&apikey=pedrozz13`}}, 
{quoted: info})
break

///⊰᯽⊱═══❖•ೋ° IMAGENS °ೋ•❖═══⊰᯽⊰\\\

case 'pussy':///cases by Pedrozz_Mods
reply(msg.espere)
laura.sendMessage(from,
 {image: {url: `https://pedrozz-api.onrender.com/pussy?apikey=pedrozz13`}}, 
{quoted: info})

break

case 'neko2':///cases by Pedrozz_Mods
reply(msg.espere)
laura.sendMessage(from,
 {image: {url: `https://pedrozz-api.onrender.com/neko2?apikey=pedrozz13`}}, 
{quoted: info})
break

case 'ahegao':///cases by Pedrozz_Mods
reply(msg.espere)
laura.sendMessage(from,
 {image: {url: `https://pedrozz-api.onrender.com/ahegao?apikey=pedrozz13`}}, 
{quoted: info})
break

case 'manga':///cases by Pedrozz_Mods
reply(msg.espere)
laura.sendMessage(from,
 {image: {url: `https://pedrozz-api.onrender.com/manga?apikey=pedrozz13`}}, 
{quoted: info})
break


case 'zettai':///cases by Pedrozz_Mods
reply(msg.espere)
laura.sendMessage(from,
 {image: {url: `https://pedrozz-api.onrender.com/zettai?apikey=pedrozz13`}}, 
{quoted: info})
break


case 'orgy':///cases by Pedrozz_Mods
reply(msg.espere)
laura.sendMessage(from,
 {image: {url: `https://pedrozz-api.onrender.com/orgy?apikey=pedrozz13`}}, 
{quoted: info})
break

case 'tentacles':///cases by Pedrozz_Mods
reply(msg.espere)
laura.sendMessage(from,
 {image: {url: `https://pedrozz-api.onrender.com/tentacles?apikey=pedrozz13`}}, 
{quoted: info})
break

case 'ass':///cases by Pedrozz_Mods
reply(msg.espere)
laura.sendMessage(from,
 {image: {url: `https://pedrozz-api.onrender.com/ass?apikey=pedrozz13`}}, 
{quoted: info})
break

case 'ero':///cases by Pedrozz_Mods
reply(msg.espere)
laura.sendMessage(from,
 {image: {url: `https://pedrozz-api.onrender.com/ero?apikey=pedrozz13`}}, 
{quoted: info})
break

case 'cum':///cases by Pedrozz_Mods
reply(msg.espere)
laura.sendMessage(from,
 {image: {url: `https://pedrozz-api.onrender.com/cum?apikey=pedrozz13`}}, 
{quoted: info})
break

case 'hentai':///cases by Pedrozz_Mods
reply(msg.espere)
laura.sendMessage(from,
 {image: {url: `https://pedrozz-api.onrender.com/hentai?apikey=pedrozz13`}}, 
{quoted: info})
break

case 'waifu':///cases by Pedrozz_Mods
reply(msg.espere)
laura.sendMessage(from,
 {image: {url: `https://pedrozz-api.onrender.com/waifu?apikey=pedrozz13`}}, 
{quoted: info})
break

case 'waifu2':///cases by Pedrozz_Mods
reply(msg.espere)
laura.sendMessage(from,
 {image: {url: `https://pedrozz-api.onrender.com/waifu2?apikey=pedrozz13`}}, 
{quoted: info})
break

case 'neko':///cases by Pedrozz_Mods
reply(msg.espere)
laura.sendMessage(from,
 {image: {url: `https://pedrozz-api.onrender.com/neko?apikey=pedrozz13`}}, 
{quoted: info})
break

case 'shota':///cases by Pedrozz_Mods
reply(msg.espere)
laura.sendMessage(from,
 {image: {url: `https://pedrozz-api.onrender.com/shota?apikey=pedrozz13`}}, 
{quoted: info})
break
/////

case 'hacker':
case 'hacker2':
if (!isPremium) return enviar(msg.premium)
try {
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(msg.espere)
link = await upload(base64)
client.sendMessage(from, {image: {url:`https://aemt.me/${comando}?link=${link}`}}, {quoted: selo}).catch(e => {
return reply(mess.error())
})
} else {
reply('Mencione uma imagem para atribuir o efeito a foto.')
}
} catch (e) {
if(JSON.stringify(e).includes) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply("Ocorreu um erro ao adicionar o *efeito na imagem. Tente novamente!")  
}
}
break

case 'gtaimg':
if (!isPremium) return enviar(msg.premium)
try {
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(msg.espere)
link = await upload(base64)
anu1 = await fetchJson(`https://aemt.me/jadigta?url=${link}`)
client.sendMessage(from, {image: {url:`${anu1.result}`}}, {quoted: selo}).catch(e => {
return reply(mess.error())
})
} else {
reply('Mencione uma imagem para atribuir o efeito a foto.')
}
} catch (e) {
if(JSON.stringify(e).includes) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply("Ocorreu um erro ao adicionar o *efeito na imagem. Tente novamente!")  
}
}
break

case 'zombie':
if (!isPremium) return enviar(msg.premium)
try {
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(msg.espere)
link = await upload(base64)
anu1 = await fetchJson(`https://aemt.me/converter/zombie?url=${link}`)
client.sendMessage(from, {image: {url:`${anu1.url}`}}, {quoted: selo}).catch(e => {
return reply(mess.error())
})
} else {
reply('Mencione uma imagem para atribuir o efeito a foto.')
}
} catch (e) {
if(JSON.stringify(e).includes) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply("Ocorreu um erro ao adicionar o *efeito na imagem. Tente novamente!")  
}
}
break

case 'msg':
if (!isPremium) return enviar(msg.premium)
var[nome1, nome2] = q.split`/`
if (!nome1) return reply(`*❕Digite os texto para edição!!*\n*_🧙‍♂️Exemplo:_* ${prefixo + comando}Pedrozz/domina`)
if (!nome2) return reply(`*❕Digite os texto para edição!!*\n*_🧙‍♂️Exemplo:_* ${prefixo + comando} pedrozz/domina`)
if (nome1.length > 10) return m.reply('*❕O texto é muito longo, suporta apenas 10 caracteres.*')
if (nome2.length > 10) return m.reply('*❕O texto é muito longo, suporta apenas 10 caracteres.*')
try {
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(msg.espere)
link = await upload(base64)
client.sendMessage(from, {image: {url:`https://aemt.me/quotely?avatar=${link}&name=${nome1}&text=${nome2}`}}, {quoted: selo}).catch(e => {
return reply(mess.error())
})
} else {
reply('Mencione uma imagem para atribuir o efeito a foto.')
}
} catch (e) {
if(erro) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply("Ocorreu um erro ao adicionar o *efeito na imagem. Tente novamente!")  
}
}
break

case 'play': case 'pl':
if(!q) return client.sendMessage(from, {audio: fs.readFileSync('./betty/audio/play.mp3'), mimetype: "audio/mpeg",},{quoted: info})
reagir("🕓")
await sleep(1000)
data = await fetchJson(`https://api.sabapi.tech/api/ytsrc/videos?q=${q}&apikey=${apiKey}`)
client.sendMessage(from, {audio: {url: `https://api.sabapi.tech/api/dl/ytaudio2?url=${data.resultado[0].url}&apikey=${apiKey}`}, mimetype: "audio/mpeg", headerType: 4, contextInfo: { externalAdReply: { title: data.resultado[0].title, body: data.resultado[0].description, showAdAttribution: true, thumbnail: await getBuffer(data.resultado[0].image), mediaType: 2, mediaUrl: data.resultado[0].url, sourceUrl: data.resultado[0].url}}}, {quoted: info}).catch(e => {
return reply("❗Erro ao baixar o áudio!")
reagir("❌")
})
reagir("✅")
break

case 'play4': case 'pl':
if(!q) return client.sendMessage(from, {audio: fs.readFileSync('./betty/audio/play.mp3'), mimetype: "audio/mpeg",},{quoted: info})
reagir("🕓")
await sleep(1000)
data = await fetchJson(`https://pedrozz-api.onrender.com/download/play?&nome=${q}&apikey=pedrozz13`)
audio = await fetchJson(`https://pedrozz-api.onrender.com/download/play?&nome=${q}&apikey=pedrozz13`)
client.sendMessage(from, {audio: {url: audio.url}, mimetype: "audio/mpeg", headerType: 4, contextInfo: { externalAdReply: { title: data.title, body: data.publi, showAdAttribution: true, thumbnail: await getBuffer(data.thumb), mediaType: 2, mediaUrl: data.url, sourceUrl: data.url}}}, {quoted: info}).catch(e => {
return reply("❗Erro ao baixar o áudio!")
reagir("❌")
})
reagir("✅")
break


case 'play2':
  reagir(`🔍`);
  if (!q) return enviar(`cade o nome da música boy`)
  
  try {
    await enviar(msg.espere);
    const apiEndpoint = `https://pedrozz-api.onrender.com/download/play?&nome=${q}&apikey=pedrozz13`;
    const apiResponse = await fetchJson(apiEndpoint);

    if (apiResponse && apiResponse.resultado && apiResponse.resultado.link && apiResponse.resultado.thumb && apiResponse.resultado.título) {
      const [buffer, audioBuffer] = await Promise.all([
        getBuffer(apiResponse.resultado.thumb),
        getBuffer(apiResponse.resultado.link),
      ]);

      client.sendMessage(from, {
        image: buffer,
        caption: `
        @𝑃𝑒𝑑𝑟𝑜𝑧𝑧_13755
        @𝐿𝑎𝑢𝑟𝑎_privat13755
        `,
        contextInfo: {
          externalAdReply: {
            title: `${apiResponse.resultado.título}`,
            body: "",
            reviewType: "PHOTO", 
            thumbnailUrl: `https://telegra.ph/file/23e10d93ada71ed953100.jpg`,
            sourceUrl: `https://www.youtube.com/@Pedrozz_Mods`, 
            mediaType: 2
          }
        }
      });

      client.sendMessage(from, {audio: audioBuffer, mimetype: "audio/mpeg",},{quoted: info})
    } else {
      console.log("A API não retornou informações suficientes.");
    }
  } catch (erro) {
    console.log(erro);
  }
  break;

case 'alugar': {
client.sendMessage(from, {react: {text: `🎉`, key: info.key}})
esperar(2000)
JsonW = [
"https://telegra.ph/file/aa1b07a2be9ac2ef8bcd4.jpg",
"https://telegra.ph/file/2a2921a3758f4136781c5.jpg",
"https://telegra.ph/file/5479f90c4c05aefe92a91.jpg",
"https://telegra.ph/file/f923c5ac13dbf68585e6d.jpg",
"https://telegra.ph/file/fb77a528099fe1a69206b.jpg",
"https://telegra.ph/file/cefe0d2fcece058873652.jpg",
"https://telegra.ph/file/c206642da9588390a3949.jpg",
"https://telegra.ph/file/be38fc70f3a4cca083e6c.jpg"

]
random = JsonW[Math.floor(Math.random() * JsonW.length)]
chama_imagem = {
image: {url: random},
caption: `
╔┉┉═══『${botName}』═══┉┉╗
║➩ BOT ON 24H
║➩ SPEED 0.4ms
║➩ SUPORTE 24H
║➩ PROTEÇÃO DO GRUPO 
║➩ BRINCADEIRAS E JOGOS 
║➩ INTERAÇÃO COM MEMBROS  
║
║➩     〘 PROTEÇÕES 〙
║
║➩ 🔒 ANTI-LINK
║
║➩     〘 RECURSOS 〙
║
║➩ ✨ CRIAR FIGURINHAS 
║➩ ✨ AUTO-STICKER
║➩ ✨ JOGOS E BRINCADEIRAS 
║➩ ✨ FIGURINHAS, ÁUDIOS E REACTS 
║➩ ✨ GERENCIAMENTO DE GRUPO
║
║➩       〘 PLANOS 〙
║
║➩ 🤑 19 DIA - [ R$ 7,00 ]
║➩ 🤑 30 DIAS - [ R$ 25,00 ] 
║➩ 🤑 60 DIAS - [ R$45,00 ]
║➩ 🤑 ARQUIVO ORIGINAL- [ R$ 60,00 ]
║➩ 🤑 VIP - [ R$ 10,00 ]
║
║➩        〘 CONTRATAR 〙
║
║➩ 🤴 CRIADOR: PEDROZZ
║➩ 👑 CHAT: wa.me/556199317165
╚┉┉═══     『by PEDROZZ』  ═══┉┉╝
`
}, {quoted: selinho}
client.sendMessage(from, chama_imagem)
}
break              
 
case 'playdoc': case 'pdoc':
if(!q) return reply(`cade o nome`())
reagir("🕗")
await sleep(1000)
reply(msg.espere)
data = await fetchJson(`https://api.sabapi.tech/api/ytsrc/videos?q=${q}&apikey=@Luix1397`)
client.sendMessage(from, {document: {url: `https://api.sabapi.tech/api/dl/ytaudio2?url=${data.resultado[0].url}&apikey=${apiKey}`}, fileName: data.resultado[0].title+'.mp3', mimetype: "audio/mpeg", headerType: 4, contextInfo: { externalAdReply: { title: data.resultado[0].title, body: data.resultado[0].description, showAdAttribution: true, thumbnail: await getBuffer(data.resultado[0].image), mediaType: 2, mediaUrl: data.resultado[0].url, sourceUrl: data.resultado[0].url}}}).catch(e => {
return reply(msg.error())
reagir("❌")
})
reagir("✅")
break

case 'pinterest':
if (!isPremium) return enviar(msg.premium)
try {
if(!q) return reply(`Digite o nome da imagem que vc quer buscar\nExemplo: ${prefix + comando} cat`)
reply(msg.espere)
blap = await getBuffer(`https://api.sabapi.tech/api/pinterest?text=${q}&apikey=${apiKey}`)
await client.sendMessage(from, {image: blap, thumbnail: null}, {quoted: info}).catch(e => {
reply('❌️ *Erro ao fornecer o resultado da sua pesquisa.* Tente novamente mais tarde!')
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('❌️ *Erro ao fornecer o resultado da sua pesquisa.* Tente novamente mais tarde!')
}
}
break;

 case 'pensador':
try {
if(!q) return reply(`Use como exemplo: *${prefix+comando} Amor*`);
AB = await fetchJson(`http://mikasarelease.online/search/pensador?query=${q}&apikey=Chris`)
ABC = `🔍 *Pesquisa:* ${q} - *[ Pensador ]*\nTotal de frases encontradas: ${AB.resultado.length}\n${"-\t".repeat(24)}\n`
for (var i of AB.resultado) {
ABC += `📨 *Frase:* "${i.frase}"\n`;
ABC += `${"-\t".repeat(24)}\n`
}
reply(ABC)
} catch (e) {
return reply(`Error`)
}
break

case 'servip':  
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return reply(msg.dono)
premium.push(`${numeroBot}@s.whatsapp.net`)
fs.writeFileSync('./vip/vip.json', JSON.stringify(premium))
reply(`Pronto o bot foi adicionado na lista premium.`)
break

case 'servipdono':  
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return 
premium.push(`${donoNumher}@s.whatsapp.net`)
fs.writeFileSync('./vip/vip.json', JSON.stringify(premium))
reply(`Pronto você foi adicionado na lista premium.`)
break

case 'attp1': 
case 'attp2': 
case 'attp3': 
case 'attp4': 
case 'attp5': 
case 'attp6': 
case 'attp7': 
if(!q) return reply("Ei, Cadê o Texto?")
reply(`Aguarde só um Pouquinho ${pushname} estarei gerando sua figurinha😊`)
att = await getBuffer(`https://tohsaka.onrender.com/api/maker/${comando}?texto=${q}&apikey=tohsaka`)
client.sendMessage(from, {sticker: att}, {quoted: info})
break

case 'figuemoji':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function figufigun() {
client.sendMessage(from, { sticker: { url: `https://api.sabapi.tech/sticker/figu_emoji?apikey=${apiKey}`} })}
for (i = 0; i < q; i++) {
await sleep(680)
figufigun()
}
break

case 'figuflork':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function figsupup() {
client.sendMessage(from, { sticker: { url: `https://api.sabapi.tech/sticker/figu_flork?apikey=${apiKey}`} })}
for (i = 0; i < q; i++) {
await sleep(680)
figsupup()
}
break

case 'figumeme':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function nometoque() {
client.sendMessage(from, { sticker: { url: `https://api.sabapi.tech/sticker/figu_memes?apikey=${apiKey}`} })}
for (i = 0; i < q; i++) {
await sleep(680)
nometoque()
}
break

case 'figubebe':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function lovepartidolovepartido() {
client.sendMessage(from, { sticker: { url: `https://api.sabapi.tech/sticker/figu_bebe?apikey=${apiKey}`} })}
for (i = 0; i < q; i++) {
await sleep(680)
lovepartidolovepartido()
}
break

case 'figucoreana':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function lovepartidoee() {
client.sendMessage(from, { sticker: { url: `https://api.sabapi.tech/sticker/figu_coreana?apikey=${apiKey}`} })}
for (i = 0; i < q; i++) {
await sleep(680)
lovepartidoee()
}
break

case 'figuanime':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function lovepartidoeelovepartidoeeu() {
client.sendMessage(from, { sticker: { url: `https://api.sabapi.tech/sticker/figu_anime?apikey=${apiKey}`} })}
for (i = 0; i < q; i++) {
await sleep(680)
lovepartidoeelovepartidoeeu()
}
break

case 'figufunny':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamundobom() {
client.sendMessage(from, { sticker: { url: `https://api.sabapi.tech/sticker/figu_engracada?apikey=${apiKey}`} })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamundobom()
}
break

case 'figuanimais':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamundoruim() {
client.sendMessage(from, { sticker: { url: `https://api.sabapi.tech/sticker/figu_animais?apikey=${apiKey}`} })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamundoruim()
}
break

case 'figudesenho':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamundoruimeitamundoruim() {
client.sendMessage(from, { sticker: { url: `https://api.sabapi.tech/sticker/figu_desenho?apikey=${apiKey}`} })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamundoruimeitamundoruim()
}
break

case 'figuraiva':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamundorm() {
client.sendMessage(from, { sticker: { url: `https://api.sabapi.tech/sticker/figu_raiva?apikey=${apiKey}`} })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamundorm()
}
break

case 'figuroblox':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamundom() {
client.sendMessage(from, { sticker: { url: `https://api.sabapi.tech/sticker/figu_roblox?apikey=${apiKey}`} })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamundom()
}
break

case 'seradm': {
     if (!isCreator && !info.key.fromMe) return reply(msg.dono)
       reply(`Agora vc é adm do grupo.`)
kiceed = sender
client.groupParticipantsUpdate(from, [kiceed], 'promote')
}
break

case 'sermembro':
if (!isCreator) return enviar(msg.dono)
reply(`Agora vc não é mais adm do grupo.`)
kicee = sender
await client.groupParticipantsUpdate(from, [kicee], 'demote')
break

case 'clyde2':
    if (!q) return enviar(`cade o texto baiano?`);
    
    const respostaClyde2 = await fetchJson(`https://pedrozz-api.onrender.com/canvas/clyde?texto=${q}&apikey=pedrozz13`);
    
    // Substitua 'client' pela instância real do seu cliente (ex: Baileys)
    client.sendMessage(from, { image: respostaClyde2.url });
    break;

// Função para enviar mensagens com imagem usando o comando 'clyde'
case 'clyde':
    await client.sendMessage(from, { react: { text: `✅`, key: info.key } });
    
    if (!q) return reply(`Ei, Cadê o nome ${pushname}`);
    
    const respostaClyde = await fetchJson(`https://pedrozz-api.onrender.com/canvas/clyde?texto=${q}&apikey=pedrozz13`);
    
    // Substitua 'client' pela instância real do seu cliente (ex: Baileys)
    client.sendMessage(sender, { image: { url: respostaClyde.url } });
    break;

case 'addvip':
if (!isGroup) return reply(msg.grupo)
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins && !isPremium) return (`somente dono`)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
if (!budy.includes("@55")) {
mentioned = info.message.extendedTextMessage.contextInfo.participant 
bla = premium.includes(mentioned)
if(bla) return reply("*Este número já está incluso..*")  
premium.push(`${mentioned}`)
fs.writeFileSync('./vip/vip.json', JSON.stringify(premium))
client.sendMessage(from, {text: `??@${mentioned.split("@")[0]} foi adicionado à lista de usuários premium com sucesso👑\n\nagora ele(a) pode usar os cmd Premium a vontade`}, {quoted: info})  
} else { 
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
bla = premium.includes(mentioned)
if(bla) return reply("*Este número já está incluso..*")  
premium.push(`${mentioned}`)
fs.writeFileSync('./vip/vip.json', JSON.stringify(premium))
tedtp = args.join(" ").replace("@", "")
client.sendMessage(from, {text: `??@${tedtp} foi adicionado à lista de usuários premium com sucesso👑\n\nagora ele(a) pode usar os cmd Premium a vontade`, mentions: [mentioned]}, {quoted: info})
}
break

case 'removervip': case 'delvip': case 'tirarvip':
if (!isGroup) return reply(msg.grupo)
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins && !isPremium) return  enviar(msg.dono)
if (!budy.includes("@55")) {
num = info.message.extendedTextMessage.contextInfo.participant
bla = premium.includes(num)
if(!bla) return reply("*Este número não está incluso na lista premium..*")  
pesquisar = num
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./vip/vip.json', JSON.stringify(premium))
client.sendMessage(from, {text: ` ${num.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
} else {
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
bla = premium.includes(mentioned)
if(!bla) return reply("*Este número não está incluso na lista premium..*")  
pesquisar = mentioned
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./vip/vip.json', JSON.stringify(premium))
client.sendMessage(from, {text: ` @${mentioned.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
}
break        

  case 'playvd':
  reagir(`🔍`);
  if (!q) return reply(`Ei, Cadê o nome do vídeo ${pushname}`);
  try {
    await enviar(msg.espere);
    const apiEndpoint = `https://tohsaka.onrender.com/api/dl/playv?nome=${q}&apikey=tohsaka`;
    const apiVideo = await fetchJson(apiEndpoint);

    if (apiVideo && apiVideo.resultado && apiVideo.resultado.url && apiVideo.resultado.thumb && apiVideo.resultado.título) {
      const texto = `
 ❒『𝐿 𝐴 𝑈 𝑅 𝐴    𝑃 𝑅 𝐼 𝑉 𝐴 𝑇 』❒\n
         🔂   ⏪   ⏸️   ⏩ 
         
         
         
📌Título: ${apiVideo.resultado.título}
🔎Canal: ${apiVideo.resultado.canal}
📈Visualizações: ${apiVideo.resultado.visualizações}
🗯Publicado em: ${apiVideo.resultado.publicado}\n\n\n
@𝑃𝑒𝑑𝑟𝑜𝑧𝑧_13755
@𝐿𝑎𝑢𝑟𝑎_privat13755`;
      const buffer = await getBuffer(apiResponse.resultado.thumb);

      await client.sendMessage(from, { image: buffer, caption: texto }, { quoted: info });
      client.sendMessage(from, { audio: await getBuffer(apiResponse.resultado.link), mimetype: 'audio/mpeg', fileName: 'música.mp3' });
    } else {
      console.log("A API não retornou informações suficientes.");
    }
  } catch (erro) {
    console.log(erro);
  }
  break;
  
  case 'ytmp3':
  reagir(`🔍`);
  if (!q) return reply(`Ei, Cadê o link do video`);
  try {
    await enviar(msg.espere);
    const apiEndpoint = `https://pedrozz-api.onrender.com/download/ytmp3?&link=${q}&apikey=pedrozz13`;
    const apiVideo = await fetchJson(apiEndpoint);

    if (apiVideo && apiVideo.resultado && apiVideo.resultado.url && apiVideo.resultado.thumb && apiVideo.resultado.título) {
      const texto = `
 ❒『𝐿 𝐴 𝑈 𝑅 𝐴    𝑃 𝑅 𝐼 𝑉 𝐴 𝑇 』❒\n
         🔂   ⏪   ⏸️   ⏩ 
         
         
         
📌Título: ${apiVideo.resultado.título}
🔎Canal: ${apiVideo.resultado.canal}
📈Visualizações: ${apiVideo.resultado.visualizações}
🗯Publicado em: ${apiVideo.resultado.publicado}\n\n\n
@𝑃𝑒𝑑𝑟𝑜𝑧𝑧_13755
@𝐿𝑎𝑢𝑟𝑎_privat13755`;
      const buffer = await getBuffer(apiVideo.resultado.thumb);

      await client.sendMessage(from, { image: buffer, caption: texto }, { quoted: info });
      client.sendMessage(from, { video: await getBuffer(apiVideo.resultado.url), mimetype: 'video/mp4', fileName: 'video.mp4' });
    } else {
      console.log("A API não retornou informações suficientes para o vídeo.");
    }
  } catch (erro) {
    console.log(erro);
  }
  break;

///⊰᯽⊱═══❖•ೋ° COMANDOS DE DONO °ೋ•❖═══⊰᯽⊰\\\

//INFORMAÇÕES DO CRIADOR//
//NÃO TIRA OS CRÉDITOS PIKMON//
case 'canal':
enviar(`Aqui esta o canal do meu criador:
link: https://www.youtube.com/@Pedrozz_Mods
`)
break

case 'instacriador':
enviar(`Aqui esta o Instagram do meu criador:
link: https://instagram.com/pedrozz_13755
`)
break

case 'numerocriador':
enviar(`Aqui esta o número do meu criador:
link: Wa.me/556199317165
`)
break
//INFORMAÇÕES DO CRIADOR//
//NÃO TIRA OS CRÉDITOS PIKMON//

case 'criargp':
  if (!isGroup) return reply(`Somente em grupos`);
  if (args.length < 1) return reply(`Use assim: ${prefix + comando} nome gp|@tag membro`);
  const argz = args[0].split('|');
  
  if (info.message.extendedTextMessage != undefined) {
    const mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid;

    if (mentioned.length > 0) {
      client.groupCreate(argz[0], mentioned);
      reply(`Grupo criado com sucesso\n ${argz[0]}`);
    } else {
      reply('Mencione pelo menos um membro para criar o grupo.');
    }
  } else {
    reply('Erro ao criar o grupo. Certifique-se de mencionar membros corretamente.');
  }
  break;

case 'getcase':
case 'puxarcase':
try{
if (!isCreator && !isCreatorofc) return reply(`somente meu dono ou meu criador ofici`)
reply('- Calma ae amigo(a), já estou enviando o comando / case para você..')
const getCase = (cases) => {
return 'case '+`'${cases}'`+fs.readFileSync("./index.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
await sleep(500)
msgSemQuoted(`${getCase(q)}`)
} catch(e) {
console.log("[GETCASE] - ❌️ Comando não encontrado! ❌")
reply('❌️ Comando não encontrado! ❌️')
}
break
  
case 'prefixo-bot': case 'setprefix':
if (!isCreator && !info.key.fromMe) return reply(msg.dono)
if (!q) return reply(`exemplo *${prefix}setprefix .*`)
if (args.length < 1) return
prefixx = args[0]
config.prefix = prefixx
fs.writeFileSync('./dono/config.json', JSON.stringify(config, null, '\t'))
client.sendMessage(from,{text: `O prefix foi alterado com sucesso para: ${config.prefix}\n\n agora irei reiniciar para salvar a alteração`}, {quoted: info})
setTimeout(() => {process.exit(0)}, 1000)
break

case 'fotomenu': 
if (!isCreator && !info.key.fromMe) return reply(msg.dono)
if (!isQuotedImage) return reply("Marque uma imagem para ser o novo menu");
        if ((isMedia && !info.message.videoMessage) || isQuotedImage) {
            const post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage;
            const imagem = await downloadContentFromMessage(post, 'image');
            let base64 = Buffer.from([]);
            for await (const send of imagem) { 
                base64 = Buffer.concat([base64, send]);
            }
            reply(msg.espere);
config.fotomenu = await upload(base64);
fs.writeFileSync('./dono/config.json', JSON.stringify(config, null, '\t'))
client.sendMessage(from,{text: `A foto do menu foi alterado com sucesso para: ${config.fotomenu}\n\n agora irei reiniciar para salvar a alteração`}, {quoted: info})
setTimeout(() => {process.exit(0)}, 1000)
}
break

case 'antilink':
if (!info.key.fromMe && !isCreator) return reply(`VC PRECISA SER ADM XD🙄`)
if (!info.key.fromMe && !isCreator) return reply(`O BOT PRECISA SER ADM XD🙄`)
					if (args.length < 1) return reply(`${emoji}digite 1 para ativar ou 0 para desativar${emoji}`)
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply(`${emoji}o anti-link está ativo${emoji}`)
						antilink.push(from)
						fs.writeFileSync('./dono/seguranca/antilink.json', JSON.stringify(antilink))
						reply(`${emoji}O anti-link foi ativo no grupo ✔️${emoji}\n nenhum link passará despercebido po mim ${botName},pela onra de meu mestre PEDROZZ`)
					} else if (Number(args[0]) === 0) {			
						antilink.splice(from, 1)
						fs.writeFileSync('./dono/seguranca/antilink.json', JSON.stringify(antilink))
						reply(`${emoji}O anti-link foi desativado com sucesso neste grupo✔️${emoji}`)
					} else {
						reply(`${emoji}1 para ativar, 0 para desativar${emoji}`)
					}
					break
					
case 'set-emoji': 
if (!isCreator && !info.key.fromMe) return reply(msg.dono)
if (!q) return reply(`exemplo *${prefix}set-emoji 👻*`)
if (args.length < 1) return
emoji22 = args[0]
config.emoji = emoji22
fs.writeFileSync('./dono/config.json', JSON.stringify(config, null, '\t'))
client.sendMessage(from,{text: `O emoji foi alterado com sucesso para: ${config.emoji}\n\n agora irei reiniciar para salvar a alteração`}, {quoted: info})
setTimeout(() => {process.exit(0)}, 1000)
break

case 'fotobot':
            if (!isCreator) return reply(msg.dono)
            if (!isQuotedImage) return reply(`Envie uma foto com a legenda ${prefix}${comando} para mudar minha foto de perfil`)
            buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
            await akame.updateProfilePicture(numeroBot, buff)
            reply(`${emoji}OBRIGADO PELO NOVO PERFIL AMIGUINHO${emoji}😍`)
   break        
            
case 'setbio':
if (!isCreator && !info.key.fromMe) return reply(msg.dono)
if (!q) return reply(`manda exemplo *.setbio Prefixo .*`)
client.fetchStatus(`${q}`)
setTimeout(() => { 
 client.updateProfileStatus(`${q}`) },10000)
 enviar(`bio do bot alterado para:\n${q}`)
break

case 'listavip': case 'listaprem':
if(!isCreator) return reply(msg.dono)   
if(!isPremium) return reply(msg.premium)   
tkks = '╭────*「 _PREMIUM USER👑_ 」\n'
for (let V of premium) {
tkks += `│+  @${V.split('@')[0]}\n`
}
tkks += `│+ Total : ${premium.length}\n╰──────*「 _${botName}_ 」*────`
reply(tkks.trim())
break

case 'listagp':
  try {
    if (!isCreator) return reply(msg.grupo);
    let getGroups = await client.groupFetchAllParticipating();
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1]);

    if (q.includes("-l") || q.includes("--list")) {
      let array_gps = [];

      for (let a of groups) {
        try {
          array_gps.push({
            title: `‍𝗡𝗼𝗺𝗲: ${a.subject}`,
            description: `𝗜𝗱: ${a.id}\n𝗠𝗲𝗺??𝗿𝗼𝘀: ${a.participants.length}`,
            rowId: `${prefix + comando} ${a.id}`
          });
        } catch (error) {
          console.error(error);
        }
      }

      let buttonmessage02 = {
        title: `Lista de grupos`,
        text: `Selecione um grupo para mais detalhes`,
        buttonText: "Selecionar",
        sections: [
          {
            rows: array_gps
          }
        ]
      };

      client.sendMessage(from, buttonmessage02, { quoted: selo });
    } else if (q && args[0].endsWith("g.us")) {
      try {
        let infogp = await client.groupMetadata(`${args[0]}`);
        let ppUrl = "";

        try {
          ppUrl = await client.profilePictureUrl(`${args[0]}`, 'image');
        } catch (error) {
          ppUrl = "https://telegra.ph/file/41634a68c48c40189dbf7.jpg";
        }

        let linkgc = "";
        let linkgp = "";

        try {
          linkgc = await client.groupInviteCode(infogp.id);
          linkgp = 'https://chat.whatsapp.com/' + linkgc;
        } catch (error) {
          linkgp = "Bot não é admin";
        }

        let txt = `𝗡𝗼𝗺𝗲 𝗱𝗼 𝗴𝗿𝘂𝗽𝗼: ${infogp.subject}
𝗗𝗼𝗻𝗼: ${infogp.owner ? infogp.owner : "Não tem"}
𝗠𝗲𝗺𝗯𝗿𝗼𝘀: ${infogp.participants.length}
𝗜𝗱: ${infogp.id}
𝗟𝗶𝗻𝗸: ${linkgp}`;

        await client.sendMessage(from, { image: { url: ppUrl }, caption: txt, thumbnail: null, mentions: [sender] }, { quoted: selo });
      } catch (error) {
        console.error(error);
      }
    } else {
      let txt = "━━━━━━━━━━━━━━━━━━\n";
      let array_owners = [];

      for (let a of groups) {
        txt += `𝗡𝗼𝗺𝗲 𝗱𝗼 𝗴𝗿𝘂𝗽𝗼: ${a.subject}
𝗗𝗼𝗻𝗼 / 𝗰𝗿𝗶𝗮𝗱𝗼𝗿: @${a.owner ? a.owner.split("@")[0] : "Não tem"}
𝗠𝗲𝗺𝗯𝗿𝗼𝘀: ${a.participants.length}
𝗜𝗱: ${a.id}\n━━━━━━━━━━━━━━━━━━\n`;

        if (a.owner !== undefined) {
          array_owners.push(`${a.owner}`);
        }
      }

      client.sendMessage(from, { text: txt, mentions: array_owners });
    }
  } catch (error) {
    console.error(error);
    reply("Hmm deu erro");
  }
  break;        
  
  case 's':  case 'fig':  case 'f':  case 'sticker':
(async function () {
reply(msg.espere)
var legenda = q ? q?.split("/")[0] : `
➥͙ ͙S͙O͙L͙I͙C͙I͙T͙A͙D͙O͙ ͙P͙O͙R͙⚒
͙➥͙ ͙F͙E͙I͙T͙O͙ ͙P͙O͙R͙:⚒͙
͙➥͙ ͙D͙O͙N͙O͙:⚒͙
͙➥͙ ͙C͙H͙A͙T͙:͙⚒
`
var autor = q ? q?.split("/")[1] : q?.split("/")[0] ? '' : `
${pushname}
${botName}
✟⃢⃟ ${donoName} ⃢⃟✟
${!isGroup ? `${pushname}` :  `${groupName}`}
`
if (isMedia && !info.message.videoMessage || isQuotedImage) {
var encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
rano = getRandom('.webp')
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(rane)
// "android-app-store-link": "https://play.google.com/store/search?q=%2B55%2094%209147-2796%20%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5&c=apps",
var json = {
"sticker-pack-name": legenda,
"sticker-pack-publisher": autor
}
var exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
var jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
var exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
let nomemeta = Math.floor(Math.random() * (99999 - 11111 + 1) + 11111)+".temp.exif"
fs.writeFileSync(`./${nomemeta}`, exif) 
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
client.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: info})
fs.unlinkSync(nomemeta)
fs.unlinkSync(rano)
})
})
} else if (isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 35) {
var encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
rano = getRandom('.webp')
await ffmpeg(`./${rane}`)
.inputFormat(rane.split('.')[1])
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(rane)
let json = {
"sticker-pack-name": legenda,
"sticker-pack-publisher": autor
}
let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
let jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
let exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
let nomemeta = "temp.exif"
fs.writeFileSync(`./${nomemeta}`, exif) 
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
client.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: info})
fs.unlinkSync(nomemeta)
fs.unlinkSync(rano)
})
})
} else {
reply(`Você precisa marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
})().catch(e => {
console.log(e)
reply("Hmm deu erro")
try {
if (fs.existsSync("temp.exif")) fs.unlinkSync("temp.exif");
if (fs.existsSync(rano)) fs.unlinkSync(rano);
if (fs.existsSync(media)) fs.unlinkSync(media);
} catch {}
})
break

case 'rename':
      case 'roubar':
      case 'wm':
      if (!isPremium) return enviar(msg.premium)
        if (!isQuotedSticker) return reply('Marque uma figurinha...')
        encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
        var kls = q
        var pafck = kls.split("/")[0];
        var author2 = kls.split("/")[1];
        if (!q) return reply('*E o autor e o nome do pacote?*')
        if (!pafck) return reply(`*por favor escreve o formato certo: ${prefix + comando} pedrozz/betty_pack*`)
        if (!author2) return reply(`*por favor escreve o formato certo: ${prefix + comando} pedrozz/betty_pack*`)
        bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
        var mantap = await convertSticker(bas64, `${author2}`, `${pafck}`)
        var sti = new Buffer.from(mantap, 'base64');
        client.sendMessage(from, { sticker: sti, contextInfo: { externalAdReply: { title: `${pafck}|${author2}`, body: "", previewType: "PHOTO", thumbnail: sti } } }, { quoted: info })
          .catch((err) => {
            reply(`❎ Error, tenta mais tarde`);
          })
        break

case 'nuke': case 'arquivargp':
if (!isCreator && !info.key.fromMe) return reply(msg.dono)
 if (!isBotGroupAdmins) return reply('Bot precisa ser ADM, para executar esta função.')
 if (info.key.fromMe) return
 function banirtodos() {
 var r_banirtodos = Math.floor(Math.random() * groupMembers.length + 0)
 nmrbot = botNumber.split("@")[0]
 var resp = `${groupMembers[r_banirtodos].id.split("@")[0]}`
 if (resp === donoNumher || resp === botNumber) {
 return
 } else {
 client.groupParticipantsUpdate(from, [resp + "@s.whatsapp.net"], 'remove')
 }
 }
 myinterval = setInterval(banirtodos, 1000)
 if (groupMembers.length <= 2) {
 clearInterval(myinterval);
 }
 break



case 'bc': case 'bcgroup': case 'transmitir': case 'transmissão': {
            if (!isCreator) return reply(msg.dono)
            if (!q) return reply(`cade o texto?\n\nExemplo : ${prefix + comando} BOM DIA `)
            let getGroups = await client.groupFetchAllParticipating()
            let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
            let anu = groups.map(v => v.id)
            for (let i of anu) {
              await esperar(150)
              let txt = ` ⟪ TRANSMISSÃO DA ${botName} ⟫\n\n ${q}`
              client.sendMessage(i, { text: txt })
            }
            reply(`*JA FOI ENVIADO PARA OS GRUPOS COM SUCESSO*`)
          }
            break

case 'divucmd': {
            if (!isCreator) return reply(msg.dono)
            if (!q) return reply(`cade o comando?\n\nExemplo : ${prefix + comando} .ping `)
            let getGroups = await client.groupFetchAllParticipating()
            let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
            let anu = groups.map(v => v.id)
            for (let i of anu) {
              await esperar(150)
              let txt = `${q}`
              client.sendMessage(i, { text: txt })
            }
            reply(`*O COMANDO JA FOI ENVIADO PARA OS GRUPOS MESTRE*`)
          }
            break            

case 'reset':
if (!isCreator && !info.key.fromMe) return reply(msg.dono)
client.sendMessage(from,{text: `IREI REINICIAR EE EM ALGUNS SEGUNDOS ESTAREI ON NOVAMENTE, ENTÃO ${pushname} ACALMA O CU AI KKKK`}, {quoted: info})
setTimeout(() => {process.exit(0)}, 3000)
break

///⊰᯽⊱═══❖•ೋ° COMANDOS DE DONO °ೋ•❖═══⊰᯽⊰\\\
//==============JOGOS===========\\

case 'amongus': 
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Você precisa mencionar alguém')
const amongis = ['1','2','3','4','5','6','7','8','9','10'] 
 const amingins = amongis[Math.floor(Math.random() * amongis.length)]  
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
sus = 
`.      　。　　　　•　    　ﾟ　　。
　　.　　　.　　　  　　.　　　　　。　　   。　.
　.　　      。　        ඞ   。　    .    •
•            @${mentioned[0].split('@')[0]} was E j e c t e d
                  ${amingins} impostor remain   。　.
　 　　。　　 　　　　ﾟ　　　.　      　　　.
,　　　　.                  .`
mentions(`${sus}`, mentioned, true)
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/among.mp3'), mimetype: "audio/mpeg", ptt:true},{quoted: info})
break            

case 'punheteiro':
            if (!isGroup) return reply(`Só pode ser utilizado este comando, em grupo.`)
            if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
            const aletl = `${Math.floor(Math.random() * 105)}`
            reply(`@${blamention_id.split("@")[0]} Aguarde, confiscando sua porcentagem...`)
            await delay(7000)
            reply(`「 @${blamention_id.split("@")[0]} 」Sua Porcentagem De punheteiro é De : ${aletl}%`)
            break
            
case 'fiel':
            if (!isGroup) return reply(`Só pode ser utilizado este comando, em grupo.`)
            if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
            const fiel = `${Math.floor(Math.random() * 105)}`
            reply(`@${blamention_id.split("@")[0]} Aguarde, confiscando sua porcentagem...`)
            await delay(7000)
            reply(`「 @${blamention_id.split("@")[0]} 」Sua Porcentagem De ser fiel e dê: ${fiel}%`)
            break            

case 'gostoso':
if(!isGroup) return reply(msg.grupo)
reagir("😏")
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
gostosotext = `๛ *_O quanto você é gostoso @${sender_ou_n.split("@")[0]} ? 😏_*\n-\n*「Você é:〘 ${random}% 〙gostoso」😝*`
gostosoimg = `https://telegra.ph/file/4c0d54ce0f396036db110.jpg`
mencionarIMG(gostosotext, gostosoimg)
}, 2000)
break 

case 'gostosa':
if(!isGroup) return reply(msg.grupo)
reagir("😋")
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
gostosatext = `๛ *_O quanto você é gostosa @${sender_ou_n.split("@")[0]} ? 😏_*\n-\n*「Você é:〘 ${random}% 〙gostosa」😳*`
gostosaimg = `https://telegra.ph/file/4f4d3c5b3bcce85f8bfe7.jpg`
mencionarIMG(gostosatext, gostosaimg)
}, 2000)
break

case 'tapa':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá o tapa')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de da um tapa na raba da😏 @${mentioned[0].split('@')[0]} 🔥` 
jrq = await getBuffer(`${tapinha}`)
await laura.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: contato})
break

case 'beijo':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque alguém que vc quer da um beijo')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você deu um beijo gostoso na(o) @${mentioned[0].split('@')[0]} 😁👉👈❤` 
wew = await getBuffer(`${beijin}`)
await laura.sendMessage(from, {video: wew, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: contato})
break

case 'feio':
if(!isGroup) return reply(msg.grupo)
reagir("🗑️")
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
var feio = Math.floor(Math.random() * 100) + 1;
var emoji;

if (feio < 20) {
    var bo = 'É, não é feio';
    emoji = '😎';
} else if (feio >= 21 && feio <= 27) {
    var bo = '+/- feio';
    emoji = '😐';
} else if (feio == 2 || feio == 29 || feio == 30) {
    var bo = '+/- feio';
    emoji = '😐';
} else if (feio == 31) {
    var bo = 'Ainda tá na média';
    emoji = '😊';
} else if (feio >= 32 && feio <= 33) {
    var bo = 'Da pra pegar umas(ns) novinha(o) ainda';
    emoji = '😏';
} else if (feio == 34) {
    var bo = 'É fein, mas tem baum coração';
    emoji = '❤️';
} else if (feio == 35) {
    var bo = 'Tá na média, mas não deixa de ser feii';
    emoji = '😕';
} else if (feio == 36) {
    var bo = 'Bonitin mas é feio com orgulho';
    emoji = '🤷‍♂️';
} else if (feio == 37) {
    var bo = 'Feio e preguiçoso(a), vai se arrumar praga feia';
    emoji = '🤨';
} else if (feio == 3) {
    var bo = 'Tenho ';
    emoji = '😏';
} else if (feio == 39) {
    var bo = 'Feio, mas um banho e se arrumar, deve resolver';
    emoji = '🚿';
} else if (feio == 40) {
    var bo = 'FeiN, mas não existe gente feia, existe gente que não conhece os produtos Jequiti';
    emoji = '💄';
} else if (feio == 41) {
    var bo = 'Você é feio, mas é legal, continue assim';
    emoji = '😄';
} else if (feio == 42) {
    var bo = 'Nada que uma maquiagem e se arrumar, que não resolva';
    emoji = '💅';
} else if (feio == 43) {
    var bo = 'Feio que dói de ver, compra uma máscara que melhora';
    emoji = '😷';
} else if (feio == 44) {
    var bo = 'Feio mas nada que um saco na cabeça não resolva né!?';
    emoji = '🙈';
} else if (feio == 45) {
    var bo = 'Você é feio, mas tem bom gosto';
    emoji = '👌';
} else if (feio == 46) {
    var bo = 'Feio mas tem muitos amigos';
    emoji = '👥';
} else if (feio == 47) {
    var bo = 'Feio mas tem lábia pra pegar várias novinha';
    emoji = '😏';
} else if (feio == 4) {
    var bo = 'Feio e ainda não sabe se vestir, vixi';
    emoji = '👗';
} else if (feio == 49) {
    var bo = 'Feiooo';
    emoji = '😖';
} else if (feio == 50) {
    var bo = 'Você é feio, mas não se enxerga';
    emoji = '👀';
} else if (feio > 51) {
    var bo = 'Você é feio demais';
    emoji = '👹';
}

console.log(bo + emoji);
feiotext = `๛ *_O quanto você é feio @${sender_ou_n.split("@")[0]} ? 🙉_*\n-\n*「Você é:〘 ${random}% 〙feio」🤮*\n-\n⇒ ${bo} ${emoji}`
feioimg = `https://telegra.ph/file/15dcb8b699c8e14547c47.jpg`
mencionarIMG(feiotext, feioimg)
}, 2000)
break 

case 'casar':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá o tapa')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Parabens, Agora Voce Pegou Prisão Perpétua, Digo, se Casou Com @${mentioned[0].split('@')[0]}` 
jrq = await getBuffer(`${casalzin}`)
await laura.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: contato})
break

case 'dança': case 'dançar':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('marque a Pessoa Que Você Quer Dançar ')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Voce e o(a) @${mentioned[0].split('@')[0]} Estão Dançando pra o Tiktok?` 
jrq = await getBuffer(`${dancinha}`)
await laura.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: contato})
break

case 'soco':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá o tapa')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `@${mentioned[0].split('@')[0]} Você Recebeu um Socão` 
jrq = await getBuffer(`${soquin}`)
await laura.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: contato})
break

case 'chute':
case 'chutar':  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')

if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá um chute')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de da um chute em @${mentioned[0].split('@')[0]} 🤡` 
jry = await getBuffer(`${chutin}`)
await laura.sendMessage(from, {video: jry, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: contato})
break 

case 'bebado':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
laura.sendMessage(from, {text:`❰ Pesquisando a ficha de bebado : @${blamention_id.split("@")[0]} , aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${bebin}`)
random = `${Math.floor(Math.random() * 110)}`
await laura.sendMessage(from, {image: wew, caption:`O quanto você é bebado? \n\n「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱ Bêbado 🤢🥵🥴`, mentions: [blamention_id]}, {quoted: contato})
}, 7000)
break

case 'vesgo':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}
laura.sendMessage(from, {text:`❰ Pesquisando a ficha de vesgo : @${blamention_id.split("@")[0]}, aguarde... ❱`, mentions: [blamention_id]})
 setTimeout(async() => {
wew = await getBuffer(`${vesgin}`)
random = `${Math.floor(Math.random() * 110)}`
await laura.sendMessage(from, {image: wew, caption: `O quanto você é vesgo? \n\n「 @${blamention_id.split("@")[0]} 」Você é: ❰ ${random}% ❱  Vesgo 🙄😆`, mentions: [blamention_id]}, {quoted: contato})
}, 7000)
break 

case 'matar':
case 'mata':  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('marque o alvo que você quer matar')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de matar o(a) @${mentioned[0].split('@')[0]} 😈👹` 
jrpp = await getBuffer(`${matei}`)
await client.sendMessage(from, {video: jrpp, gifPlayback: true, caption: susp, mentions: mentioned}, {quoted: contato})
break

case 'rankativos':
case 'rankativo':
if(!isGroup) return reply(msg.grupo)
var i3 = countMessage.map(i => i.groupId).indexOf(from)
var blue = countMessage[i3].numbers.map(i => i)
blue.sort((a, b) => ((a.figus == undefined ? a.figus = 0 : a.figus + a.messages + a.cmd_messages) < (b.figus == undefined ? b.figus = 0 : b.figus + b.cmd_messages + b.messages)) ? 0 : -1)
setTimeout(() => {reagir(from, "🎖️")}, 300)
rankativosimg = 'https://telegra.ph/file/765f23cf13e0d5e5ab432.jpg'
menc = [] 
blad = `🏆 𝐑𝐚𝐧𝐤 𝐝𝐨𝐬 𝐦𝐚𝐢𝐬 𝐚𝐭𝐢𝐯𝐨𝐬 𝐧𝐨 𝐠𝐫𝐮𝐩𝐨 🏆\n—\n`
for ( i = 0; i < (blue.length < 5 ? blue.length : 5); i++) {
if (i != null) blad += `*🏅 ${i + 1}º Lugar:* @${blue[i].id.split('@')[0]}\n_Mensagens encaminhadas:_ *${blue[i].messages}*\n_Comandos executados:_ *${blue[i].cmd_messages}*\n_Usuário conectado em:_ *${blue[i].aparelho}*\n_Figurinhas enviadas:_ *${blue[i].figus}*\n————\n`
menc.push(blue[i].id)
} 
mencionarIMG(blad, rankativosimg)
break

case 'rankgay': case 'rankgays':
if(!isGroup) return reply(msg.grupo)
reagir("🏳️‍🌈")
membr = []
var porcentagem = `${Math.floor(Math.random() * 105)}`
const gay1 = groupMembers
const gay2 = groupMembers
const gay3 = groupMembers
const gay4 = groupMembers
const gay5 = groupMembers
var porcent31 = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
var porcent32 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent33 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent34 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent35 = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
const gays1 = gay1[Math.floor(Math.random() * gay1.length)]
const gays2 = gay2[Math.floor(Math.random() * gay2.length)]
const gays3 = gay3[Math.floor(Math.random() * gay3.length)]
const gays4 = gay4[Math.floor(Math.random() * gay4.length)]
const gays5 = gay5[Math.floor(Math.random() * gay5.length)]
GAYSTEXT = [
  "Guia do Arco-íris, segue a trilha da moda. 🌈",
  "Fashionista Gay, até os unicórnios têm inveja. 🦄",
  "Barbie Boy, o Ken fica com ciúmes. 💁‍♂️",
  "Ativo Fogoso, o coração bate mais rápido. 💓",
  "Passivo Irresistível, mais poderoso que perfume. 😍",
  "Gay Padrão, melhor que manual de instruções. 🏳️‍🌈",
  "Arco-íris Elegante, as cores pedem autógrafo. 🎨",
  "Gay Estiloso, até as estátuas olham com inveja. 🗽",
  "Estrela do Grupo, ofusca até a lua. 🌟",
  "Orgulho com Charme, o pavão fica com inveja. 🦚",
  "Gay Rebelde, quebra a escala de atitude. 👊",
  "Sedução Arco-íris, até os anjos se apaixonam. 😇",
  "Ativo Destemido, até os heróis pedem conselhos. 🦸‍♂️",
  "Passivo Encantador, até a Fada Madrinha perde o posto. ✨💖",
  "Gay Visionário, enxerga a moda antes dela existir. 👓",
  "Mister Gay, realeza da beleza e simpatia. 👑",
  "Elegância Gay, o próprio espelho aplaude. 👏",
  "Lover Arco-íris, o cupido pede dicas. 💘",
  "Sem Limites, a fronteira da ousadia é aqui. 🤘",
  "Rainbow Comediante, faz rir até as nuvens. 😂"
];
rankzingayimg = "https://telegra.ph/file/77ed25e7188703bcca97a.jpg"
rankzingay = `*_Esses são os gays 🏳️‍🌈 do grupo:_*
*╭────────────*
*│* 🏳️‍🌈 @${gays1.id.split('@')[0]}
*│➥ ${GAYSTEXT[Math.floor(Math.random() * GAYSTEXT.length)]}*
*│* 🏳️‍🌈 @${gays2.id.split('@')[0]}
*│➥ ${GAYSTEXT[Math.floor(Math.random() * GAYSTEXT.length)]}*
*│* 🏳️‍🌈 @${gays3.id.split('@')[0]}
*│➥ ${GAYSTEXT[Math.floor(Math.random() * GAYSTEXT.length)]}*
*│* 🏳️‍🌈 @${gays4.id.split('@')[0]}
*│➥ ${GAYSTEXT[Math.floor(Math.random() * GAYSTEXT.length)]}*
*│* 🏳️‍🌈 @${gays5.id.split('@')[0]}
*│➥ ${GAYSTEXT[Math.floor(Math.random() * GAYSTEXT.length)]}*
*╰────────────*`;
membr.push(gays1.id)
membr.push(gays2.id)
membr.push(gays3.id)
membr.push(gays4.id)
membr.push(gays5.id)
mencionarIMG(rankzingay, rankzingayimg)
break;

case 'rankgado': case 'rankgados':
if(!isGroup) return reply(enviar.msg.grupo)
reagir("🐃")
var porcentagem = `${Math.floor(Math.random() * 105)}`
membr = []
const gado1 = groupMembers
const gado2 = groupMembers
const gado3 = groupMembers
const gado4 = groupMembers
const gado5 = groupMembers
var porcent51 = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
var porcent52 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent53 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent54 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent55 = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
const gados1 = gado1[Math.floor(Math.random() * gado1.length)]
const gados2 = gado2[Math.floor(Math.random() * gado2.length)]
const gados3 = gado3[Math.floor(Math.random() * gado3.length)]
const gados4 = gado4[Math.floor(Math.random() * gado4.length)]
const gados5 = gado5[Math.floor(Math.random() * gado5.length)]
GADOTEXT = [
"Gado comum, prestes a fazer 'muu'. 🐮","Gado manso, zen até o Zen inveja. 🧘‍♂️","Gado conformado, aceita atualizações como presente. 🎁","Gado hiper-chifrudo, chifres maiores que tarefas. 📜","Mestre do Free Fire, faz Booyah tremer. 🔥","Gado comum, sempre no rebanho. 🐃","Gado manso, a calmaria do pasto. 🌅","Gado conformado, aceita pacote básico. 📦","Gado hiper-chifrudo, chifres com código postal. 🏠","Mestre do Free Fire, mata mais no jogo. 🍽️","Gado comum, básico do rebanho. ⚙️","Gado manso, paz do pasto. 🦟","Gado conformado, aceita até Candy Crush. 🍭","Gado hiper-chifrudo, carrega sinal de TV. 📺","Mestre do Free Fire, rei do joystick. 👑","Gado comum, sempre presente. 🐃","Gado manso, sereno até as nuvens. ☁️","Gado conformado, aceita até memes ruins. 😄","Gado hiper-chifrudo, chifres com agenda. 📅","Mestre do Free Fire, rei do mouse. 🎮"
]
rnkgado = 'https://telegra.ph/file/86814bd7b4324734d1c98.jpg'
rankzingado = `*_Esses são os gados 🐃 do grupo:_*
*╭────────────*
*│* 🐃 @${gados1.id.split('@')[0]}
*│➥ ${GADOTEXT[Math.floor(Math.random() * GADOTEXT.length)]}*
*│* 🐃 @${gados2.id.split('@')[0]}
*│➥ ${GADOTEXT[Math.floor(Math.random() * GADOTEXT.length)]}*
*│* 🐃 @${gados3.id.split('@')[0]}
*│➥ ${GADOTEXT[Math.floor(Math.random() * GADOTEXT.length)]}*
*│* 🐃 @${gados4.id.split('@')[0]}
*│➥ ${GADOTEXT[Math.floor(Math.random() * GADOTEXT.length)]}*
*│* 🐃 @${gados5.id.split('@')[0]}
*│➥ ${GADOTEXT[Math.floor(Math.random() * GADOTEXT.length)]}*
*╰────────────*`
membr.push(gados1.id)
membr.push(gados2.id)
membr.push(gados3.id)
membr.push(gados4.id)
membr.push(gados5.id)
mencionarIMG(rankzingado, rnkgado);
break;

case 'rankcorno': case 'rankcornos':
if(!isGroup) return reply(msg.grupo)
reagir("🐂")
var porcentagem = `${Math.floor(Math.random() * 105)}`
membr = []
const corno1 = groupMembers
const corno2 = groupMembers
const corno3 = groupMembers
const corno4 = groupMembers
const corno5 = groupMembers
var porcent41 = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
var porcent42 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent43 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent44 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent45 = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
const cornos1 = corno1[Math.floor(Math.random() * corno1.length)]
const cornos2 = corno2[Math.floor(Math.random() * corno2.length)]
const cornos3 = corno3[Math.floor(Math.random() * corno3.length)]
const cornos4 = corno4[Math.floor(Math.random() * corno4.length)]
const cornos5 = corno5[Math.floor(Math.random() * corno5.length)]
CORNOTEXT = [
"Chifreiro coleciona troféus. 📬","Ninja dos chifres, furtivo. 🕶️","Corno zen, mantra de traições. 🧘‍♂️","Chifrudo treinando voos. 🚁","Mestre dos corações partidos. 💔","Corno camuflado, traições surpresa. 🥚","Corno relaxado encara traições. 😌","Corno camaleão, adapta-se. 🦎","Chifrudo globetrotter, traições mundo afora. 🌍","Mestre do amor sofrido. 💔","Corno visionário, vê chifres invisíveis. 🔍","Corno resiliente, esquiva-se. 🕶️","Corno gamer, vence no joystick. 🎮","Corno high-tech, 4K nos chifres. 📺","Mestre estrategista do amor. 👑","Corno VIP, traições de luxo. 🎟️","Corno celestial, flutua nas nuvens. ☁️","Corno com humor refinado, memes sobre chifres. 😄","Corno ocupado, datas marcantes. 📅","Mestre do amor fracassado, vence no campo minado. 🏹"
]
rnkcorno = `https://telegra.ph/file/cb87c6fac7ca6863190a4.jpg`
rankzincorno = `*_Esses são os cornos 🐂 do grupo:_*
*╭────────────*
*│* 🐂 @${cornos1.id.split('@')[0]}
*│➥ ${CORNOTEXT[Math.floor(Math.random() * CORNOTEXT.length)]}*
*│* 🐂 @${cornos2.id.split('@')[0]}
*│➥ ${CORNOTEXT[Math.floor(Math.random() * CORNOTEXT.length)]}*
*│* 🐂 @${cornos3.id.split('@')[0]}
*│➥ ${CORNOTEXT[Math.floor(Math.random() * CORNOTEXT.length)]}*
*│* 🐂 @${cornos4.id.split('@')[0]}
*│➥ ${CORNOTEXT[Math.floor(Math.random() * CORNOTEXT.length)]}*
*│* 🐂 @${cornos5.id.split('@')[0]}
*│➥ ${CORNOTEXT[Math.floor(Math.random() * CORNOTEXT.length)]}*
*╰────────────*`
membr.push(cornos1.id)
membr.push(cornos2.id)
membr.push(cornos3.id)
membr.push(cornos4.id)
membr.push(cornos5.id)
mencionarIMG(rankzincorno, rnkcorno); 
break;

case 'menage':
case 'suruba':
if(!isGroup) return reply(msg.grupo)

try{
d = []
ret = `   〘 TOP 10 QUE TOPARIAM UM ${comando}〙\n\n`
for(i = 0; i < 10; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `┋➤ ✦ 😱 @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
reply(msg.error)
}
break

case 'rankdeuses':
case 'deuses':
if(!isGroup) return reply(msg.grupo)

try{
d = []
ret = `   〘 TOP 5 DEUSES(AS) DO GRUPO:${groupName}〙\n\n`
for(i = 0; i < 10; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `┋➤ ✦ 🥵 @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
reply(msg.error)
}
laura.sendMessage(from, {image: {url: `https://telegra.ph/file/8ae51ad96852fce092b66.jpg`}, caption: "Eu nunca erro" })
break

case 'rankgostoso': case 'rankgostosos':
if(!isGroup) return reply(msg.grupo)
reagir("😏")
var porcentagem = `${Math.floor(Math.random() * 105)}`
membr = []
const gostoso1 = groupMembers
const gostoso2 = groupMembers
const gostoso3 = groupMembers
const gostoso4 = groupMembers
const gostoso5 = groupMembers
var porcent21 = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
var porcent22 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent23 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent24 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent25 = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
const gostosos1 = gostoso1[Math.floor(Math.random() * gostoso1.length)]
const gostosos2 = gostoso2[Math.floor(Math.random() * gostoso2.length)]
const gostosos3 = gostoso3[Math.floor(Math.random() * gostoso3.length)]
const gostosos4 = gostoso4[Math.floor(Math.random() * gostoso4.length)]
const gostosos5 = gostoso5[Math.floor(Math.random() * gostoso5.length)]
GOSTOSOTEXT = [
  "Gostoso padrão. 😉",
  "Mestre da sedução. 💋",
  "Gostoso supimpa. 😎",
  "Gostoso épico, saga. 😉",
  "Mestre do charme. 🌟",
  "Gostoso cósmico. 💫",
  "Estrategista da sedução. 😉",
  "Gostoso magnífico. 💖",
  "Mestre das paqueras. 💘",
  "Gostoso supremo, líder do encanto. 👑",
  "Estrategista do olhar. 🔥",
  "Gostoso moderno, fashionista. 👔",
  "Especialista em conquistas. 😏",
  "Gostoso clássico. 😘",
  "Mestre do flerte. 😚",
  "Gostoso intergaláctico. 🚀",
  "Estrategista do coração. 💘",
  "Mestre da sensualidade. 💋",
  "Gostoso holográfico. 💫",
  "Gostoso contemporâneo. 🌆"
];
rnkgostoso = 'https://telegra.ph/file/e154da034c1a92573d6a8.jpg'
rankzingostoso = `*_Esses são os gostosos 😏🔥 do grupo:_*
*╭────────────*
*│* 😏 @${gostosos1.id.split('@')[0]}
*│➥ ${GOSTOSOTEXT[Math.floor(Math.random() * GOSTOSOTEXT.length)]}*
*│* 🔥 @${gostosos2.id.split('@')[0]}
*│➥ ${GOSTOSOTEXT[Math.floor(Math.random() * GOSTOSOTEXT.length)]}*
*│* 😏 @${gostosos3.id.split('@')[0]}
*│➥ ${GOSTOSOTEXT[Math.floor(Math.random() * GOSTOSOTEXT.length)]}*
*│* 🔥 @${gostosos4.id.split('@')[0]}
*│➥ ${GOSTOSOTEXT[Math.floor(Math.random() * GOSTOSOTEXT.length)]}*
*│* 😏 @${gostosos5.id.split('@')[0]}
*│➥ ${GOSTOSOTEXT[Math.floor(Math.random() * GOSTOSOTEXT.length)]}*
*╰────────────*`
membr.push(gostosos1.id)
membr.push(gostosos2.id)
membr.push(gostosos3.id)
membr.push(gostosos4.id)
membr.push(gostosos5.id)
mencionarIMG(rankzingostoso, rnkgostoso); 
break;
case 'ranksafadas': case 'ranksafada':
  if (!isGroup) return reply(msg.grupo);
  reagir("😈");

  var porcentagem = `${Math.floor(Math.random() * 105)}`;
  membr = [];
  
  const safada1 = groupMembers;
  const safada2 = groupMembers;
  const safada3 = groupMembers;
  const safada4 = groupMembers;
  const safada5 = groupMembers;

  var porcentww = porcentagem[Math.floor(Math.random() * porcentagem.length)];
  var porcentw2 = porcentagem[Math.floor(Math.random() * porcentagem.length)];
  var porcentw3 = porcentagem[Math.floor(Math.random() * porcentagem.length)];
  var porcentw4 = porcentagem[Math.floor(Math.random() * porcentagem.length)];
  var porcentw5 = porcentagem[Math.floor(Math.random() * porcentagem.length)];

  const safadas1 = safada1[Math.floor(Math.random() * safada1.length)];
  const safadas2 = safada2[Math.floor(Math.random() * safada2.length)];
  const safadas3 = safada3[Math.floor(Math.random() * safada3.length)];
  const safadas4 = safada4[Math.floor(Math.random() * safada4.length)];
  const safadas5 = safada5[Math.floor(Math.random() * safada5.length)];

  const TMPSAFADA = [
    "Muito sapeca, faz a festa! 😏",
    "Safadinha na medida certa. 😉",
    "Impossível resistir a essa sedução. 😈",
    "Mestre na arte da provocação. 🌶️",
    "Safadeza é o sobrenome. 😜",
    "Um furacão de ousadia! 🔥",
    "Sabe provocar como ninguém. 😏",
    "Encanto irresistível, pura malícia. 😉",
    "De sapeca a perigosa, domina! 😈",
    "Sedução em cada gesto. 🌟",
    "Safadeza elevada ao cubo. 😜",
    "Provocante até nos sonhos. 😏",
    "Safadinha que não tem limites. 🔞",
    "Uma explosão de ousadia! 💣",
    "Sabe provocar e deixa saudades. 😘",
    "Safadeza nível máximo! 🚀",
    "Encanta com charme e malícia. 😉",
    "Sedutora profissional! 😈",
    "Quem resiste a tanto charme? 😏",
    "Safadeza é arte, e ela é a Mona Lisa. 🎨"
  ];
  rankzinsafadaimg = "https://telegra.ph/file/153b993145446c2ac543d.jpg"
  rankzinsafada = `*_Essas são as mais safadas 😈 do grupo:_*
*╭────────────*
*│* 😈 @${safadas1.id.split('@')[0]}
*│➥ ${TMPSAFADA[Math.floor(Math.random() * TMPSAFADA.length)]}*
*│* 😈 @${safadas2.id.split('@')[0]}
*│➥ ${TMPSAFADA[Math.floor(Math.random() * TMPSAFADA.length)]}*
*│* 😈 @${safadas3.id.split('@')[0]}
*│➥ ${TMPSAFADA[Math.floor(Math.random() * TMPSAFADA.length)]}*
*│* 😈 @${safadas4.id.split('@')[0]}
*│➥ ${TMPSAFADA[Math.floor(Math.random() * TMPSAFADA.length)]}*
*│* 😈 @${safadas5.id.split('@')[0]}
*│➥ ${TMPSAFADA[Math.floor(Math.random() * TMPSAFADA.length)]}*
*╰────────────*`;
  
  membr.push(safadas1.id);
  membr.push(safadas2.id);
  membr.push(safadas3.id);
  membr.push(safadas4.id);
  membr.push(safadas5.id);
  
  mencionarIMG(rankzinsafada, rankzinsafadaimg);
  break;
  
  case 'ranksafados': case 'ranksafado':
  if (!isGroup) return reply(msg.grupo);
  
  reagir("😈");

  var porcentagem = `${Math.floor(Math.random() * 105)}`;
  membr = [];
  
  const safado1 = groupMembers;
  const safado2 = groupMembers;
  const safado3 = groupMembers;
  const safado4 = groupMembers;
  const safado5 = groupMembers;

  var porcentqq = porcentagem[Math.floor(Math.random() * porcentagem.length)];
  var porcentq2 = porcentagem[Math.floor(Math.random() * porcentagem.length)];
  var porcentq3 = porcentagem[Math.floor(Math.random() * porcentagem.length)];
  var porcentq4 = porcentagem[Math.floor(Math.random() * porcentagem.length)];
  var porcentq5 = porcentagem[Math.floor(Math.random() * porcentagem.length)];

  const safados1 = safado1[Math.floor(Math.random() * safado1.length)];
  const safados2 = safado2[Math.floor(Math.random() * safado2.length)];
  const safados3 = safado3[Math.floor(Math.random() * safado3.length)];
  const safados4 = safado4[Math.floor(Math.random() * safado4.length)];
  const safados5 = safado5[Math.floor(Math.random() * safado5.length)];

  const TMPSAFADO = [
    "Muito sapeca, faz a festa! 😏",
    "Safadinho na medida certa. 😉",
    "Impossível resistir a essa sedução. 😈",
    "Mestre na arte da provocação. 🌶️",
    "Safadeza é o sobrenome. 😜",
    "Um furacão de ousadia! 🔥",
    "Sabe provocar como ninguém. 😏",
    "Encanto irresistível, pura malícia. 😉",
    "De sapeca a perigoso, domina! 😈",
    "Sedução em cada gesto. 🌟",
    "Safadeza elevada ao cubo. 😜",
    "Provocante até nos sonhos. 😏",
    "Safadinho que não tem limites. 🔞",
    "Uma explosão de ousadia! 💣",
    "Sabe provocar e deixa saudades. 😘",
    "Safadeza nível máximo! 🚀",
    "Encanta com charme e malícia. 😉",
    "Sedutor profissional! 😈",
    "Quem resiste a tanto charme? 😏",
    "Safadeza é arte, e ele é o Michelangelo. 🎨"
  ];
  rankzinsafadoimg = "https://telegra.ph/file/f02356325983479291c32.jpg"
  rankzinsafado = `*_Esses são os mais safados 😈 do grupo:_*
*╭────────────*
*│* 😈 @${safados1.id.split('@')[0]}
*│➥ ${TMPSAFADO[Math.floor(Math.random() * TMPSAFADO.length)]}*
*│* 😈 @${safados2.id.split('@')[0]}
*│➥ ${TMPSAFADO[Math.floor(Math.random() * TMPSAFADO.length)]}*
*│* 😈 @${safados3.id.split('@')[0]}
*│➥ ${TMPSAFADO[Math.floor(Math.random() * TMPSAFADO.length)]}*
*│* 😈 @${safados4.id.split('@')[0]}
*│➥ ${TMPSAFADO[Math.floor(Math.random() * TMPSAFADO.length)]}*
*│* 😈 @${safados5.id.split('@')[0]}
*│➥ ${TMPSAFADO[Math.floor(Math.random() * TMPSAFADO.length)]}*
*╰────────────*`;
  
  membr.push(safados1.id);
  membr.push(safados2.id);
  membr.push(safados3.id);
  membr.push(safados4.id);
  membr.push(safados5.id);
  
  mencionarIMG(rankzinsafado, rankzinsafadoimg);
  break;
case 'rankfalido': case 'rankfalidos':
if(!isGroup) return reply(msg.grupo)
reagir("🗑️")
var porcentagem = `${Math.floor(Math.random() * 105)}`
membr = []
const falido1 = groupMembers
const falido2 = groupMembers
const falido3 = groupMembers
const falido4 = groupMembers
const falido5 = groupMembers
var porcent61 = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
var porcent62 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent63 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent64 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent65 = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
const falidos1 = falido1[Math.floor(Math.random() * falido1.length)]
const falidos2 = falido2[Math.floor(Math.random() * falido2.length)]
const falidos3 = falido3[Math.floor(Math.random() * falido3.length)]
const falidos4 = falido4[Math.floor(Math.random() * falido4.length)]
const falidos5 = falido5[Math.floor(Math.random() * falido5.length)]
FALIDOTEXT = [
  "Falido total. 💸",
  "Mestre do prejuízo. 📉",
  "Falência fashion. 👗",
  "Falido épico. saga 💸",
  "Mestre da ruína. ⚡",
  "Falido cósmico, deve até ⭐",
  "Estrategista da falência. 📉🤔",
  "Falido magnífico. ✨",
  "Mestre das dívidas. ⚡",
  "Falência quântica. 🔍💸",
  "Mestre dos boletos. 🧾",
  "Falido moderno. 💻",
  "Especialista em dívidas. 🏦",
  "Falência clássica. 🎻",
  "Mestre do saldo negativo. 📉💳",
  "Falido intergaláctico. 🌌",
  "Estrategista financeiro da decadência. 💹📉",
  "Mestre dos débitos. 💳",
  "Falência holográfica. 🔄💸",
  "Falido contemporâneo. 🏙️"
]; 
rnkfalido = 'https://telegra.ph/file/aab2f61b9629ea40e2120.jpg'
rankzinfalido = `*_Falidos 🗑️ no grupo:_*
*╭────────────*
*│* 🗑️ @${falidos1.id.split('@')[0]}
*│➥ ${FALIDOTEXT[Math.floor(Math.random() * FALIDOTEXT.length)]}*
*│* 🗑️ @${falidos2.id.split('@')[0]}
*│➥ ${FALIDOTEXT[Math.floor(Math.random() * FALIDOTEXT.length)]}*
*│* 🗑️ @${falidos3.id.split('@')[0]}
*│➥ ${FALIDOTEXT[Math.floor(Math.random() * FALIDOTEXT.length)]}*
*│* 🗑️ @${falidos4.id.split('@')[0]}
*│➥ ${FALIDOTEXT[Math.floor(Math.random() * FALIDOTEXT.length)]}*
*│* 🗑️ @${falidos5.id.split('@')[0]}
*│➥ ${FALIDOTEXT[Math.floor(Math.random() * FALIDOTEXT.length)]}*
*╰────────────*`;
membr.push(falidos1.id)
membr.push(falidos2.id)
membr.push(falidos3.id)
membr.push(falidos4.id)
membr.push(falidos5.id)
mencionarIMG(rankzinfalido, rnkfalido);
break; 
case 'ranklindos': case 'ranklindo':
if(!isGroup) return reply(msg.grupo)
reagir("🥵")
var porcentagem = `${Math.floor(Math.random() * 105)}`
membr = []
const lindo1 = groupMembers
const lindo2 = groupMembers
const lindo3 = groupMembers
const lindo4 = groupMembers
const lindo5 = groupMembers
var porcent41 = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
var porcent42 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent43 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent44 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent45 = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
const lindoss1 = lindo1[Math.floor(Math.random() * lindo1.length)]
const lindoss2 = lindo2[Math.floor(Math.random() * lindo2.length)]
const lindoss3 = lindo3[Math.floor(Math.random() * lindo3.length)]
const lindoss4 = lindo4[Math.floor(Math.random() * lindo4.length)]
const lindoss5 = lindo5[Math.floor(Math.random() * lindo5.length)]
rnklindo = 'https://telegra.ph/file/db2099ea340ee4d0caa09.jpg'
LINDOTEXT = [
"Muito lindo(a)","dese jeito eu me apaixono","asmei","uma das 7 maravilha do mundo","mds passa o zap coisa linda","sem palavras para esse beleza exuberante","o mais lindo(a) do grupo","se esconde se não eu te pego coisai da🥰","mds e tão lindo que não sei o que falar 🤩","♥️","pegava todinho(a)","ai meu Deus 🤩"
]
rankzinlindos = `*_Esses são os mais lindos do grupo:_🥵*
*╭────────────*
*│* 🥵 @${lindoss1.id.split('@')[0]}
*│➥ ${LINDOTEXT[Math.floor(Math.random() * LINDOTEXT.length)]}*
*│* 🥵 @${lindoss2.id.split('@')[0]}
*│➥ ${LINDOTEXT[Math.floor(Math.random() * LINDOTEXT.length)]}*
*│* 🥵 @${lindoss3.id.split('@')[0]}
*│➥ ${LINDOTEXT[Math.floor(Math.random() * LINDOTEXT.length)]}*
*│* 🥵 @${lindoss4.id.split('@')[0]}
*│➥ ${LINDOTEXT[Math.floor(Math.random() * LINDOTEXT.length)]}*
*│* 🥵 @${lindoss5.id.split('@')[0]}
*│➥ ${LINDOTEXT[Math.floor(Math.random() * LINDOTEXT.length)]}*
*╰────────────*`
membr.push(lindoss1.id)
membr.push(lindoss2.id)
membr.push(lindoss3.id)
membr.push(lindoss4.id)
membr.push(lindoss5.id)
mencionarIMG(rankzinlindos, rnklindo); 
break;

case 'mencionar':
if (!q) return reply(`Você usou o comando de forma incorreta, use a correta: ${prefix}mencionar corno`)
if (!isGroup) return reply(`Esta brincadeira só funciona em grupos.`)
d = []
teks = `- Estou mencionando o *${q}* do grupo: `
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `@${groupMembers[r].id.split('@')[0]}`
d.push(groupMembers[r].id)
}
await mentions(teks, d, true)
break; 
case 'rankfeio':
case 'rankfeios':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
member = []
const z11 = groupMembers
const z12 = groupMembers
const z13 = groupMembers
const z14 = groupMembers
const z15 = groupMembers
const a11 = z11[Math.floor(Math.random() * z11.length)]
const a12 = z12[Math.floor(Math.random() * z12.length)]
const a13 = z13[Math.floor(Math.random() * z13.length)]
const a14 = z14[Math.floor(Math.random() * z14.length)]
const a15 = z15[Math.floor(Math.random() * z15.length)]
luy = `
┋➤ ✦      〘 TOP 5 MAIS FEIOS 〙

┋❯ ✦ GRUPO: ${groupName}
┋
┋➤ ✦ FEIO: @${a11.id.split('@')[0]}  
┋➤ ✦ FEIO: @${a12.id.split('@')[0]}  
┋➤ ✦ FEIO: @${a13.id.split('@')[0]}  
┋➤ ✦ FEIO: @${a14.id.split('@')[0]}  
┋➤ ✦ FEIO: @${a15.id.split('@')[0]}  
┋➤ ✦ LINDÃO: 𝐿𝐴𝑈𝑅𝐴 𝑃𝑅𝐼𝑉𝐴𝑇 
`
member.push(a11.id)
member.push(a12.id)
member.push(a13.id)
member.push(a14.id)
member.push(a15.id)
mentions(luy, member, true)
break


case 'rankgostosa': case 'rankgostosas':
if(!isGroup) return reply(msg.grupo)
reagir("🤤")
var porcentagem2= `${Math.floor(Math.random() * 105)}`
membr = []
const gostosa1 = groupMembers
const gostosa2 = groupMembers
const gostosa3 = groupMembers
const gostosa4 = groupMembers
const gostosa5 = groupMembers
var porcent12 = porcentagem2[Math.floor(Math.random() * porcentagem2.length)] 
var porcent13 = porcentagem2[Math.floor(Math.random() * porcentagem2.length)]
var porcent14 = porcentagem2[Math.floor(Math.random() * porcentagem2.length)]
var porcent15 = porcentagem2[Math.floor(Math.random() * porcentagem2.length)]
var porcent16 = porcentagem2[Math.floor(Math.random() * porcentagem2.length)] 
const gostosas1 = gostosa1[Math.floor(Math.random() * gostosa1.length)]
const gostosas2 = gostosa2[Math.floor(Math.random() * gostosa2.length)]
const gostosas3 = gostosa3[Math.floor(Math.random() * gostosa3.length)]
const gostosas4 = gostosa4[Math.floor(Math.random() * gostosa4.length)]
const gostosas5 = gostosa5[Math.floor(Math.random() * gostosa5.length)]
rnkgostosa = 'https://telegra.ph/file/b3a711db2befd14117b41.jpg'
GOSTOSATEXT = [
  "Gostosa com graça, esbanja charme. 😏","Mansa e delícia, encanta sem medida. 🌟","Safada na medida certa, arrasa corações. 😈","Chifruda de fachada, mas gostosa pra caramba. 🤭","A delícia do grupo, ninguém resiste. 🤤","Gostosa e chifruda, um combo irresistível. 🔥","Entre chifres e charme, ela se destaca. 💃","Gostosa de respeito, atração instantânea. 😉","Chifruda convicta, mas ainda sim irresistível. 😎","Delícia safada, ninguém supera. 🚀","Média no nome, mas acima da média na beleza. 🌺","Mansa e provocante, um mistério envolvente. 🌪️","Safada e chifruda, um estilo único. 🕶️","Gostosa intensa, incendeia corações. 🔥","Chifruda de primeira classe, a beleza é real. 💅","A delícia do grupo, um ícone de sensualidade. 🌹","Gostosa e safada, uma dupla imbatível. 😏","Chifruda, mas com glamour. A sensualidade impera. 💄","Essa é uma delícia, sem dúvida alguma. 🌶️","Gostosa nota máxima, atração garantida. 🌟"
]; 
rankzingostosa = `*_Essas são as gostosas 🤤🔥 do grupo:_*
*╭────────────*
*│* 🤤 @${gostosas1.id.split('@')[0]}
*│➥ ${GOSTOSATEXT[Math.floor(Math.random() * GOSTOSATEXT.length)]}*
*│* 🔥 @${gostosas2.id.split('@')[0]}
*│➥ ${GOSTOSATEXT[Math.floor(Math.random() * GOSTOSATEXT.length)]}*
*│* 🤤 @${gostosas3.id.split('@')[0]}
*│➥ ${GOSTOSATEXT[Math.floor(Math.random() * GOSTOSATEXT.length)]}*
*│* 🔥 @${gostosas4.id.split('@')[0]}
*│➥ ${GOSTOSATEXT[Math.floor(Math.random() * GOSTOSATEXT.length)]}*
*│* 🤤 @${gostosas5.id.split('@')[0]}
*│➥ ${GOSTOSATEXT[Math.floor(Math.random() * GOSTOSATEXT.length)]}*
*╰────────────*`
membr.push(gostosas1.id)
membr.push(gostosas2.id)
membr.push(gostosas3.id)
membr.push(gostosas4.id)
membr.push(gostosas5.id)
mencionarIMG(rankzingostosa, rnkgostosa); 
break;



case 'ranknazista': case 'ranknazistas':
if(!isGroup) return reply(msg.grupo)
reagir("💂‍♂")
var porcentagem = `${Math.floor(Math.random() * 105)}`
membr = []
const nazista1 = groupMembers
const nazista2 = groupMembers
const nazista3 = groupMembers
const nazista4 = groupMembers
const nazista5 = groupMembers
var porcent71 = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
var porcent72 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent73 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent74 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent75 = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
const nazistas1 = nazista1[Math.floor(Math.random() * nazista1.length)]
const nazistas2 = nazista2[Math.floor(Math.random() * nazista2.length)]
const nazistas3 = nazista3[Math.floor(Math.random() * nazista3.length)]
const nazistas4 = nazista4[Math.floor(Math.random() * nazista4.length)]
const nazistas5 = nazista5[Math.floor(Math.random() * nazista5.length)]
rnknazista = 'https://telegra.ph/file/785d4f02633de15963118.jpg'
NAZISTASTEXT = [
  "Soldado nazista, marcha com estilo. 💂‍♂️",
  "Comandante implacável, lidera com rigor. 🕊️",
  "Nazista estrategista, conquista territórios. 🗺️",
  "Mestre da ordem, disciplina em primeiro lugar. ⚖️",
  "Soldado de elite, Nazista hardcore. 💪",
  "General invencível, domina as batalhas. 🏰",
  "Nazista disciplinado, fiel à causa. 🤝",
  "Líder autoritário, impõe respeito. 🎖️",
  "Soldado feroz, nazismo no coração. 💔",
  "Mestre da propaganda, convence com palavras. 🗣️",
  "Nazista moderno, tecnologia na guerra. 📡",
  "Máquina de guerra, implacável e eficiente. ⚙️",
  "Comandante supremo, nazismo eterno. 🌐",
  "Soldado leal, marcha em nome da ideologia. 🏴",
  "Nazista clássico, revive o passado. ⌛",
  "General poderoso, Nazista do século XXI. 💻",
  "Comandante inabalável, Nazista de honra. 🏹",
  "Soldado devoto, nazismo no sangue. 😁",
  "Mestre da retórica nazista, convence a todos. 🎤",
  "Nazista visionário, futuro sob a suástica. 🔮"
];

rankzinnazista = `*_Esses são os nazistas 💂‍♂️卐 do grupo:_*
*╭────────────*
*│* 💂‍♂️ @${nazistas1.id.split('@')[0]}
*│➥ ${NAZISTASTEXT[Math.floor(Math.random() * NAZISTASTEXT.length)]}*
*│* 💂‍♂️ @${nazistas2.id.split('@')[0]}
*│➥ ${NAZISTASTEXT[Math.floor(Math.random() * NAZISTASTEXT.length)]}*
*│* 💂‍♂️ @${nazistas3.id.split('@')[0]}
*│➥ ${NAZISTASTEXT[Math.floor(Math.random() * NAZISTASTEXT.length)]}*
*│* 💂‍♂️ @${nazistas4.id.split('@')[0]}
*│➥ ${NAZISTASTEXT[Math.floor(Math.random() * NAZISTASTEXT.length)]}*
*│* 💂‍♂️ @${nazistas5.id.split('@')[0]}
*│➥ ${NAZISTASTEXT[Math.floor(Math.random() * NAZISTASTEXT.length)]}*
*╰────────────*`;
membr.push(nazistas1.id)
membr.push(nazistas2.id)
membr.push(nazistas3.id)
membr.push(nazistas4.id)
membr.push(nazistas5.id)
mencionarIMG(rankzinnazista, rnknazista); 
break; 

case 'rankotaku': case 'rankotakus':
if(!isGroup) return reply(msg.grupo)
reagir("㊙️")
var porcentagem = `${Math.floor(Math.random() * 105)}`
membr = []
const otaku1 = groupMembers
const otaku2 = groupMembers
const otaku3 = groupMembers
const otaku4 = groupMembers
const otaku5 = groupMembers
var porcent81 = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
var porcent82 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent83 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent84 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent85 = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
const otakus1 = otaku1[Math.floor(Math.random() * otaku1.length)]
const otakus2 = otaku2[Math.floor(Math.random() * otaku2.length)]
const otakus3 = otaku3[Math.floor(Math.random() * otaku3.length)]
const otakus4 = otaku4[Math.floor(Math.random() * otaku4.length)]
const otakus5 = otaku5[Math.floor(Math.random() * otaku5.length)]
TMOTAKU = [
    "Esse assiste Demon Slayer 🗡️",
    "Esse vê One Piece 🏴‍☠️",
    "Esse zerou One Piece ☠️",
    "Esse assiste One Punch Man 🥊",
    "Esse já assistiu Hunter x Hunter 🥷",
    "Esse assiste Your Name 💞",
    "Esse é fã de Jujutsu Kaisen ⚔️",
    "Esse é fã de Naruto 🌀",
    "Esse já assistiu Hellsing 🧛🏻",
    "Esse é fã de Dragon Ball 🔮",
    "Esse é fã de Classroom Of The Elite 🧠",
    "Esse é obcecado por Attack on Titan 🦿",
    "Esse assiste Sailor Moon 🌙",
    "Esse é um fã fervoroso de JoJo's 🌟",
    "Esse é obcecado por Fairy Tail 🧚‍♂️",
    "Esse é um aficionado por Naruto Shippuden 🌀",
    "Esse é fã de One Punch Man 🥊",
    "Esse ama Cowboy Bebop 🚀",
    "Esse assiste My Neighbor Totoro 🐱🌳",
    "Esse é um verdadeiro otaku de Berserk ⚔️",
    "Esse é um expert em Neon Genesis Evangelion 🤖🦾",
    "Esse é apaixonado por Code Geass 🧠",
    "Esse é fã de Saint Seiya ⚔️",
    "Esse assiste Demon Slayer 🗡️⚔️",
    "Esse é um aficionado por Dragon Ball 🐉",
    "Esse é obcecado por Death Note 📓💀",
    "Esse é um grande fã de Fullmetal 🕰️🥷",
    "Esse assiste Black Clover ♣️🧚‍♂️",
    "Esse é viciado em One Piece 🌟🏴‍☠️",
    "Esse ama My Hero Academia 🥊🦸",
    "Esse é apaixonado por Sword Art Online ⚔️🕹️",
    "Esse é um verdadeiro otaku de Cowboy Bebop 🚀🔫",
    "Esse é um expert em Puella Magi Madoka Magica 🤖🔮",
    "Esse é fã de Attack on Titan 🦿📚",
    "Esse assiste Hunter x Hunter 🥷👻",
    "Esse é obcecado por Kimetsu no Yaiba 🗡️👺",
    "Esse é um aficionado por Boruto 🌀🍥",
    "Esse ama Dragon Ball Super 🏴‍☠️🐉",
    "Esse é viciado em My Hero Academia 🦸♣️",
    "Esse é um grande fã de Vinland Saga 🦿⚔️",
    "Esse assiste Tokyo Revengers 🕰️✏️",
    "Esse é apaixonado por Overlord 📓🧙‍♂️",
    "Esse é um verdadeiro otaku de Parasyte 🕰️🦠"
]
rankzinotaku = `*_Esses são os 5 mais otakus ㊗️ do grupo:_*
*╭────────────*
*│* ㊙️ @${otakus1.id.split('@')[0]}
*│➥ ${TMOTAKU[Math.floor(Math.random() * TMOTAKU.length)]}*
*│* ㊙️ @${otakus2.id.split('@')[0]}
*│➥ ${TMOTAKU[Math.floor(Math.random() * TMOTAKU.length)]}*
*│* ㊙️ @${otakus3.id.split('@')[0]}
*│➥ ${TMOTAKU[Math.floor(Math.random() * TMOTAKU.length)]}*
*│* ㊙️ @${otakus4.id.split('@')[0]}
*│➥ ${TMOTAKU[Math.floor(Math.random() * TMOTAKU.length)]}*
*│* ㊙️ @${otakus5.id.split('@')[0]}
*│➥ ${TMOTAKU[Math.floor(Math.random() * TMOTAKU.length)]}*
*╰────────────*`
membr.push(otakus1.id)
membr.push(otakus2.id)
membr.push(otakus3.id)
membr.push(otakus4.id)
membr.push(otakus5.id)
mencionarIMG(rankzinotaku, rnkotaku);
break; 
  
case 'rankpau':
if(!isGroup) return reply(msg.grupo)
reagir("🪵")
var porcentagem = `${Math.floor(Math.random() * 105)}`
membr = []
const pau1 = groupMembers
const pau2 = groupMembers
const pau3 = groupMembers
const pau4 = groupMembers
const pau5 = groupMembers
var porcent91 = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
var porcent92 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent93 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent94 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent95 = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
const paus1 = pau1[Math.floor(Math.random() * pau1.length)]
const paus2 = pau2[Math.floor(Math.random() * pau2.length)]
const paus3 = pau3[Math.floor(Math.random() * pau3.length)]
const paus4 = pau4[Math.floor(Math.random() * pau4.length)]
const paus5 = pau5[Math.floor(Math.random() * pau5.length)]
TMPAU = ["Pequeno pra cact, se mata maluco 🥴", `Pequenininho chega ser até fofo 🥺`, `Menor que meu dedo mindinho pequeno demais 😑`, `Até que dá sentir, tá na média 😌`, `Grandinho 🥵`, `Grande até`, `Gigantesco igual meu braço 😖`, `Enorme quase chega no útero 🤧`, `Grandão demais em, e uii 🤯`, `Vara de pegar manga, grande demais, como sai na rua assim??`, "Que grandão em, nasceu metade animal 😳", "Pequeno pra cact, se mata maluco 😈",
    "Pequenininho chega ser até fofo 😇",
    "Menor que meu dedo mindinho pequeno demais 🫣",
    "Até que dá sentir, tá na média 😋",
    "Grandinho 😼",
    "Grande até 😳",
    "Gigantesco igual meu braço 😖",
    "Enorme quase chega no útero 🤧",
    "Grandão demais em, e uii 🤯",
    "Vara de pegar manga, grande demais, como sai na rua assim?? 😈",
    "Que grandão em, nasceu metade animal 😳",
    "Tamanho mediano, nada de especial 😏",
    "Um pouco maior que a média, mas tá ok 😈",
    "Pequeno, mas é o que importa! 😋",
    "Tamanho generoso, só vantagens! 😇",
    "Enorme, a lenda do grupo! 🔥",
    "Nem sei como ele consegue andar com isso! 😖",
    "O maior que já vi na vida, impressionante! 🤯",
    "Tamanho perfeito, equilíbrio é a chave! 😏",
    "Nem parece real de tão grande, surreal! 😳",
    "Tamanho modesto, mas com muito poder! 😋",
    "Tamanho modesto, mas com muito poder! 😏",
    "Pequeno, mas incrivelmente eficaz! 😏",
    "Do tamanho perfeito, não muito grande, não muito pequeno! 😇",
    "Impressionantemente grande, faz inveja a todos! 🔥",
    "O maior do grupo, uma lenda viva! 😎",
    "Pequenininho, mas faz maravilhas! 😋",
    "Tamanho médio, se encaixa bem em qualquer lugar! 😳",
    "Enorme, é uma verdadeira força da natureza! 🤯",
    "Tamanho modesto, mas tem um grande coração! 😈",
    "Do tamanho certo, é o equilíbrio perfeito! 😇",
    "Surpreendentemente grande, ninguém esperava isso! 😈",
    "Pequeno, mas surpreende com sua habilidade! 😋",
    "Tamanho médio, atende às expectativas! 😇",
    "Grande o suficiente para se destacar! 🔥",
    "Gigante, é o centro das atenções! 😏",
    "Pequeno, mas tem muita personalidade! 😇",
    "Enorme, não há como ignorar! 🤧",
    "Tamanho modesto, mas supera as expectativas! 😈",
    "Só poderia ser descrito como colossal! 🔥",
    "Do tamanho certo para causar impacto! 😼",
    "Pequeno, mas cheio de surpresas! 😳",
    "Tamanho médio, mas não passa despercebido! 😇",
    "Grande e orgulhoso! 😈",
    "Gigante, uma verdadeira força da natureza! 🔥",
    "Pequeno, mas tem muito a oferecer! 😏",
    "Enorme, impossível de ignorar! 😤",
    "Tamanho modesto, mas com grande personalidade! 😇",
    "Simplesmente gigantesco, de tirar o fôlego! 😮",
    "Tamanho médio, mas repleto de potencial! 🤤",
    "Grande e impressionante! 😳",
    "Gigante, é o rei do grupo! 😏",
    "Pequeno, mas faz milagres acontecerem! 😇"]
rnkpau = `https://telegra.ph/file/2019379bed89ffbe66f72.jpg`
rankzinpau = `*_Esses são os 5 mais pauzudos 📏 do grupo:_*
*╭────────────*
*│* 🪵 @${paus1.id.split('@')[0]}
*│➥ ${TMPAU[Math.floor(Math.random() * TMPAU.length)]}*
*│* 🪵 @${paus2.id.split('@')[0]}
*│➥ ${TMPAU[Math.floor(Math.random() * TMPAU.length)]}*
*│* 🪵 @${paus3.id.split('@')[0]}
*│➥ ${TMPAU[Math.floor(Math.random() * TMPAU.length)]}*
*│* 🪵 @${paus4.id.split('@')[0]}
*│➥ ${TMPAU[Math.floor(Math.random() * TMPAU.length)]}*
*│* 🪵 @${paus5.id.split('@')[0]}
*│➥ ${TMPAU[Math.floor(Math.random() * TMPAU.length)]}*
*╰────────────*`
membr.push(paus1.id)
membr.push(paus2.id)
membr.push(paus3.id)
membr.push(paus4.id)
membr.push(paus5.id)
mencionarIMG(rankzinpau, rnkpau);
break;




case 'shipo':
teks = args.join(" ")
if(teks.length < 10) return reply('Marque uma pessoa do grupo para encontrar o par dela')
membrr = []
const suamae111 = groupMembers
const suamae211 = groupMembers
const teupai111 = suamae111[Math.floor(Math.random() * suamae111.length)]
const teupai211 = suamae211[Math.floor(Math.random() * suamae211.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `5%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `18%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shiptedd = shipted1[Math.floor(Math.random() * shipted1.length)]
jet = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n1 = @${teupai111.id.split('@')[0]}\n && 2 = ${teks} com uma porcentagem de: ${shiptedd}`
membrr.push(teupai111.id)
membrr.push(teupai211.id)
mentions(jet, membrr, true)
break
case 'avaliarperfil':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
membr = []
const membro1 = groupMembers
const mb1 = membro1[Math.floor(Math.random() * membro1.length)]
var shipted1 = ["o perfil mais top","uma bosta","tem muito pra melhorar","dá para o gasto kkkkk","na média","o do pedrozz ganha hehe","eu não goste","mds😳...sem palavras","asmei","casado(a)","ai papai 🥵🥵","nuuu joga fora kkkk"]
const perfil2 = shipted1[Math.floor(Math.random() * shipted1.length)]
jet = `*EU DETERMINO O PERFIL DE*\n\n1= @${mb1.id.split('@')[0]}\n${perfil2}`
membr.push(mb1.id)
mentions(jet, membr, true)
break

case 'casal':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
membr = []
const suamae11 = groupMembers
const suamae21 = groupMembers
const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100% isso sim que eu chamo de casal viu kkk`]
const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
jet = `*Hmmm.... ELES DOIS FORMAL UM CASAL 💘💘*\n\n1= @${teupai11.id.split('@')[0]}\ne esse\n2= @${teupai21.id.split('@')[0]}\ncom uma porcentagem de: ${shipted}`
membr.push(teupai11.id)
membr.push(teupai21.id)
mentions(jet, membr, true)
break

case 'alma-gemeas':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
membr = []
const suamae121 = groupMembers
const suamae251 = groupMembers
const teupai117 = suamae121[Math.floor(Math.random() * suamae121.length)]
const teupai251 = suamae251[Math.floor(Math.random() * suamae251.length)]
var shipted11 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100% nasceram um Pará o outro 🥰`]
const shipteddd = shipted11[Math.floor(Math.random() * shipted11.length)]
jet = `*Hmmm....  eles são almas-gemeas💘💘*\n\n1= @${teupai117.id.split('@')[0]}\ne esse\n2= @${teupai251.id.split('@')[0]}\ncom uma porcentagem de: ${shipteddd}`
membr.push(teupai117.id)
membr.push(teupai251.id)
mentions(jet, membr, true)
break

case 'gay':
if(!isGroup) return reply(msg.grupo)
reagir("🏳️‍🌈")
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
feio = random
boiola = random
var emoji;

if (boiola < 20) {
    var bo = 'Hmm... você é hétero';
    emoji = '🚶‍♂️';
} else if (boiola >= 21 && boiola <= 27) {
    var bo = '+/- boiola';
    emoji = '😐';
} else if (boiola >= 2 && boiola <= 30) {
    var bo = '+/- boiola';
    emoji = '😐';
} else if (boiola >= 31 && boiola <= 37) {
    var bo = 'Tenho minha desconfiança...';
    emoji = '🤨';
} else if (boiola >= 3 && boiola <= 40) {
    var bo = 'Tenho minha desconfiança...';
    emoji = '🤨';
} else if (boiola >= 41 && boiola <= 47) {
    var bo = 'Você é né?';
    emoji = '🤔';
} else if (boiola == 4 || boiola == 49 || boiola == 50) {
    var bo = 'Você é ou não?';
    emoji = '🤔';
} else if (boiola > 51) {
    var bo = 'Você é gay';
    emoji = '🏳️‍🌈';
}

console.log(bo + emoji);
gaytext = `๛ *_O quanto você é gay @${sender_ou_n.split("@")[0]} ? 🤨_*\n-\n*「Você é:〘 ${random}% 〙gay」🏳️‍🌈*\n-\n⇒ ${bo} ${emoji}`
gayimg = `https://telegra.ph/file/83993d7a76a9912a268e7.jpg`
mencionarIMG(gaytext, gayimg)
}, 2000)
break

case 'chifre':
await laura.sendMessage(from, { react: { text: `🐂`, key: info.key }})
random2 = `${Math.floor(Math.random() * 35)}`
const tamanho2 = random2
if (tamanho2 < 13 ) {pp = 'muito corno🤟'} else if (tamanho2 == 13 ) {pp = 'meio corno😬'} else if (tamanho2 == 14 ) {pp = 'muito corno😳'} else if (tamanho2 == 15 ) {pp = 'cuidado com o poste'} else if (tamanho2 == 16 ) {pp = 'vai pegar manga com esse chifre?'} else if (tamanho2 == 17 ) {pp = 'eita poha, levou muita galha em😳'} else if (tamanho2 == 18 ) {pp = 'cuidado com os fios de energia😳'} else if (tamanho2 == 19 ) {pp = 'como você aguenta esse peso todo😳'} else if (tamanho2 == 20 ) {pp = 'recorde mundial de maior chifre, parabéns'} else if (tamanho2 == 21 ) {pp = 'parabéns, belos chifres'} else if (tamanho2 == 22 ) {pp = 'parabéns, belos chifres'} else if (tamanho2 == 23 ) {pp = 'parabéns, belos chifres'} else if (tamanho2 == 24 ) {pp = 'parabéns, belos chifres'} else if (tamanho2 > 25 ) {pp = 'vai construir uma torre com isso ai é??'
}
hasil = `
╭═════════════════ ⪩
╰╮ू ፝͜❥⃟${emoji}𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎 𝐃𝐎 𝐂𝐇𝐈𝐅𝐑𝐄${emoji}⃟ू ፝͜❥
╭┤➢☃️ 「𝘖𝘓𝘈: ${pushName}」
╭┤➢𖣘 「𝘚𝘌𝘜 𝘊𝘏𝘐𝘍𝘙𝘌 𝘛𝘌𝘔: ${random2}𝘊𝘔
╭┤➢✉️ 「${pp}」
┃╰══ ⪨
╰═════════════════ ⪨`
reply(hasil)
break

case 'cassino':
if (!isGroup) return reply('Você só pode jogar em grupos🙄')
 const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : ??',		
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		
const mining = Math.ceil(Math.random() * 200) +1
const somtoy2 = exportion[Math.floor(Math.random() * exportion.length)]
if ((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : ?? : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = `▱▰▱▰▱▰ ★ ▱▰▱▰▱▰
 ☲ ►  Você ganhou🔮  ◄☲
▱▰▱▰▱▰ ★ ▱▰▱▰▱▰`

} else {
var Vitória = `▱▰▱▰▱▰ ★ ▱▰▱▰▱▰
 ☲ ►    Você perdeu...    ◄☲
▱▰▱▰▱▰ ★ ▱▰▱▰▱▰`
}
	const cassino = `
   ۣۜۜ͜͡☆ ☲ ► 𝐂𝐀𝐒𝐒𝐈𝐍𝐎 ◄☲  ☆ۣۜۜ͜͡
┏━━━━━━━━━━━━━━━━━┓
 ۣۜۜ͜͡☆ ☲ ► ${somtoy2} ◄☲ ☆ۣۜۜ͜͡   
┗━━━━━━━━━━━━━━━━━┛

*${Vitória}*`
reply(cassino)
if (Vitória == `▱▰▱▰▱▰ ★ ▱▰▱▰▱▰
 ☲ ►   Você ganhou..🎊   ◄☲
▱▰▱▰▱▰ ★ ▱▰▱▰▱▰`) {

reply('Parabéns')
}
await (sender)
break
case 'nazista':
if (!isGroup) return reply(msg.grupo)
const aletg = `${Math.floor(Math.random() * 105)}`
reply('Aguarde...💂')
await delay(5000)
reply(`${pushname} Sua Porcentagem De nazista é De💂: ${aletg}%`)
break
case 'gado': case 'gada':
if (!isGroup) return reply(msg.groupo)
const alete = `${Math.floor(Math.random() * 105)}`
reply('Aguarde, estou confiscando sua porcentagem de gado...🐂😅😅😅')
await delay(5000)
reply(`${pushname} Sua Porcentagem De Gado(a) é De : ${alete}%`)
break

case 'ppt':
if (args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if ((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if (vit == "vitoria") {
var tes = "Você ganhou -_-"
}
if (vit == "derrota") {
var tes = "Eu ganhei seu pobre kkkkkk"
}
if (vit == "empate") {
var tes = "Deu empate 😐"
}
reply(`${botName} jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
reply(pph)
}
break

case 'sn':
const sn = ['sim', 'não', 'talvez', 'sla']
gosto = body.slice(3)
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
reply(hasil)
break

case 'chance':
rate = body.slice(7)
zxzz = 
random = `${Math.floor(Math.random() * 200)}`
reply(` ➥ A chance de (${q}) e de:❰ `+random+`% ❱ ✧ `)
break

case 'corno': case 'corna':
if(!isGroup) return enviar('só pode ser usado em grupo, tu e burro zee')
rate = body.slice(7)
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}

zxzz = 
random = `${Math.floor(Math.random() * 200)}`
random2 = `${Math.floor(Math.random() * 200)}`
laura.sendMessage(from, {text: ` Pesquisando o quanto você e ${comando} :  @${pushname}},\n\n _Você é: ❰ ${random},${random2}% ❱  ${comando}_ muito corno kkkkkkkk🐂`, mentions: [blamention_id]})
break

case 'lesbica':
case 'lesbico':
if(!isGroup) return reply('só pode ser usado em grupo, tu e burro zee')
rate = body.slice(7)
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}

zxzz = 
random = `${Math.floor(Math.random() * 110)}`
random2 = `${Math.floor(Math.random() * 110)}`
laura.sendMessage(from, {text: `➮ Pesquisando a ficha de ${comando} :  @${blamention_id.split("@")[0]}, aguarde...\n\n _Você é: ❰ ${random},${random2}% ❱  ${comando}_ `, mentions: [blamention_id]})
break

//jogos
//cmd adm\\\
case 'ban': //essa case não e minha
case 'kick':{
rate = body.slice(6)
var ban = ['ban','ban1','ban2','ban3']
const banaudio = ban[Math.floor(Math.random() * ban.length)] 
if (!isBotGroupAdmins) return reply(`O bot tem q ser adm 🙄`)
if (!isGroup) return reply(`comando somente em grupo`)
if (!isGroupAdmins) return reply('voce tem que ser um adm pikimon kk😆')
if (!isGroup) return reply(`somente em grupo mane🙄`)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Responda a mensagem ou marque as pessoas que você quer remover do grupo')
if(info.message.extendedTextMessage.contextInfo.participant !== null && info.message.extendedTextMessage.contextInfo.participant != undefined && info.message.extendedTextMessage.contextInfo.participant !== "") {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
if(sender.includes(mentioned)) return reply("😑")
if(botNumber.includes(mentioned)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(donoNumher.includes(mentioned)) return reply('Não posso remover meu dono!😑')
let responseb = await client.groupParticipantsUpdate(from, [mentioned], 'remove')
if (responseb[0].status === "200") client.sendMessage(from, {text: `@${mentioned.split("@")[0]} foi removido do grupo com sucesso.️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb[0].status === "406") client.sendMessage(from, {text: `@${mentioned.split("@")[0]} criou esse grupo e não pode ser removido(a) do grupo️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb[0].status === "404") client.sendMessage(from, {text: `@${mentioned.split("@")[0]} já foi removido(a) ou saiu do grupo`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else client.sendMessage(from, {text: `Hmm parece que deu erro️`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
} else if (info.message.extendedTextMessage.contextInfo.mentionedJid != null && info.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(mentioned.includes(sender)) return reply("😑")
if(mentioned.includes(donoNumher)) return reply("Não pode remover meu dono 😠")
if(mentioned.includes(botNumber)) return reply("😑")
if(mentioned.length > 1) {
if(mentioned.length > groupMembers.length || mentioned.length === groupMembers.length || mentioned.length > groupMembers.length - 3) return reply(`Vai banir todo mundo mesmo?`)
sexocomrato = 0
for (let banned of mentioned) {
await sleep(100)
let responseb2 = await client.groupParticipantsUpdate(from, [banned], 'remove')
if (responseb2[0].status === "200") sexocomrato = sexocomrato + 1
}
client.sendMessage(from, {text: `${sexocomrato} participantes removido do grupo`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
} else {
let responseb3 = await client.groupParticipantsUpdate(from, [mentioned[0]], 'remove')
if (responseb3[0].status === "200") client.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} foi removido do grupo com sucesso.️`, mentions: [mentioned[0], sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb3[0].status === "406") client.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} criou esse grupo e não pode ser removido(a) do grupo️`, mentions: [mentioned[0], sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb3[0].status === "404") client.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} já foi removido(a) ou saiu do grupo`, mentions: [mentioned[0], sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else client.sendMessage(from, {text: `Hmm parece que deu erro️`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
}
}
}
var zaltin = ban[Math.floor(Math.random() * ban.length)]
client.sendMessage(from, {audio: fs.readFileSync(`./betty/audio/${zaltin}.mp3`), mimetype: "audio/mpeg",},{quoted: info})
break

case 'promover':
if (!isBotGroupAdmins) return reply(`O bot tem q ser adm 🙄`)
if (!isGroup) return reply(`comando somente em grupo`)
if (!isGroupAdmins) return reply('voce tem que ser um adm pikimon kk😆')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('eu jurava que não tinha como adicionar o vento🤔🤔')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
let responsedm = await client.groupParticipantsUpdate(from, [mentioned], 'promote')
if (responsedm[0].status === "200") return client.sendMessage(from, {audio: fs.readFileSync('./betty/audio/promovido.m4a'), mimetype: "audio/mpeg",},{quoted: info})
else if (responsedm[0].status === "404") return reply('Esse ser insignificante nem está no grupo adm')
else return reply('Tenta dnv '-'')
break

case 'rebaixar': case 'rebaixa':
if (!isBotGroupAdmins) return reply(`O bot tem q ser adm 🙄`)
if (!isGroup) return reply(`comando somente em grupo`)
if (!isGroupAdmins) return reply('voce tem que ser um adm pikimon *kk😆')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque ou responda a mensagem de quem você quer tirar de admin')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
let responsepm = await client.groupParticipantsUpdate(from, [mentioned], 'demote')
if (responsepm[0].status === "406") return reply('Como vc quer que eu remova o adm supremo???')
else if (responsepm[0].status === "200") return reply('Voce nao e mais administrador(a) desse grupo,você foi rebaixado👻')
else if (responsepm[0].status === "404") return reply('Esse ser insignificante nem está no grupo adm')
else return reply('tente dnv')
break

case 'novocmd':
if (!q) return reply(`Exemplo: ${prefix}novocmd coloca antilink ou a case do novo cmd que quer que adicione no bot.`)
reply(`${pushname} Obrigado pela colaboração, a sua idea foi reportada ao meu criador.😊`)
const qp = args.join(" ")
let templateMessage = {
image: {url: `https://telegra.ph/file/8e8f6a1b7111634b0c873.jpg`,
quoted: info},
caption: `♨️IDEIA DE CMD♨️\nDo Número: @${sender.split('@')[0]},\nA Ideia É:\n ${q}`,
footer: 'Noelle_md'
}
client.sendMessage("556199317165@s.whatsapp.net",templateMessage)
break

case 'nomegrupo':
        {
          if (!isGroup) return reply(`esse comando só pode ser usado em gupo`)
          if (!q) return reply(`CADE O NOME PARA O GRUPO PIKINON?🙄`)
          if (!isGroupAdmins) return reply(`esse comando só pode ser usado por adimins`)
          if (!isBotGroupAdmins) return reply(`esse comando só pode ser usado se o bot for adm`)
          blat = args.join(" ")
          client.groupUpdateSubject(from, `${blat}`)
          client.sendMessage(from, { text: '🌸NOME DO GRUPO ALTERADO COM SUCESSO 🌸' }, { quoted: info }).catch((err) => {
            reply(`erro`);
          })
        }
        break

case 'descgp':
case 'descricaogp':
if (!isGroup) return reply(`Cmd somente em grupo`)
if (!isBotGroupAdmins) return reply(`O bot tem q ser adm 🙄`)
if (!q) return reply(`CADE A DESCRIÇÃO PARA O GRUPO PIKINON?`)
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return client.sendMessage(from, {text: 'somente dono ou adm'})
if (!isGroup) return reply(`Este comando so pode ser usado em grupo`);
if (!q) return reply(` `);
client.groupUpdateDescription(from, `${q}`)
client.sendMessage(from, {text: `${emoji}A descrição do grupo foi alterada com sucesso${emoji}`}, {quoted: loc})
break


case 'marcar': {
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return client.sendMessage(from, {text: 'somente meu dono ou um adm'})
if (!isGroup) return reply(mess.group)
 let metadata = await client.groupMetadata(from)
let teks = `❗MARCANDO TODOS DESSE GRUPO❗\n•\n`
for (let mem of participants) {
teks += `${emoji} @${mem.id.split('@')[0]}\n`
}
client.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: contato })
client.sendMessage(from, {audio: fs.readFileSync('./betty/audio/marcar.mp3'), mimetype: "audio/mpeg", ptt:true},{quoted: selo})
}
break
   case 'ping':{
await reply('*[‼️]Buscando dados do terminal do bot[‼️]*')
const groupNome = isGroup ? groupMetadata.subject : ''
let timestamp = speed()
let latensi = speed() - timestamp
const velocidadeInternet = Math.floor(Math.random() * (100 - 5 + 1) + 5);
  let desempenhoBot = 'Bom';
if (velocidadeInternet < 20) {
desempenhoBot = 'Ruim';
} else if (velocidadeInternet < 50) {
desempenhoBot = 'Razoável';
}
const porcentagemDesempenho = `${desempenhoBot === 'Bom' ? '100% 🟢' : desempenhoBot === 'Razoável' ? '50% 🟠' : '20% 🔴'}`;
neww = performance.now()
oldd = performance.now()
uptime = process.uptime()
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
data1 = moment.tz("America/Sao_Paulo").format("DD/MM/YY");
  var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`;
ping= `https://junimk.sirv.com/Api/Picsart_24-02-21_09-05-07-641.jpg?text.0.text=VELOCIDADE%20DA%20BETTY%20BOT&text.0.position.gravity=center&text.0.position.y=-40%25&text.0.size=90&text.0.color=000000&text.0.font.family=Bangers&text.0.background.color=ffffff&text.0.outline.color=ffffff&text.0.outline.width=4&text.0.outline.blur=5&text.1.text=${latensi.toFixed(4)}&text.1.position.gravity=center&text.1.position.y=-15%25&text.1.size=45&text.1.color=000000&text.1.font.family=Bangers&text.1.background.color=ffffff&text.1.outline.color=ffffff&text.1.outline.width=4&text.1.outline.blur=13&text.2.text=Tempo%20online%3A&text.2.position.gravity=center&text.2.position.y=7%25&text.2.size=50&text.2.color=ff1818&text.2.font.family=Bangers&text.2.outline.color=ffffff&text.2.outline.width=4&text.2.outline.blur=17&text.3.text=${runtime(uptime)}&text.3.position.gravity=center&text.3.position.y=25%25&text.3.size=40&text.3.color=ff0000&text.3.font.family=Bangers&text.3.outline.color=ffffff&text.3.outline.width=4&text.3.outline.blur=19`
client.sendMessage(from, {text: `
╭━─≪ 𝑉𝐸𝐿𝑂𝐶𝐼𝐷𝐴𝐷𝐸 𝐷𝐴 𝐴𝑈𝑅𝑂𝑅𝐴 ≫─━╮
┃
┃Solicitou Comando: ${pushname}
┃
┣━━━━━━━━━━━━━━━━
┃
┃ Criador: by Pedrozz_Mods
┃
┣━━━━━━━━━━━━━━━━
┃
┃ Data: ${data1} 
┃
┃Desempenho: ${desempenhoBot}
┃
┃Internet: ${velocidadeInternet} Mbps
┃
┃Porcentagem de desempenho: ${porcentagemDesempenho}
┃
┃ Tempo Online: ${runtime(uptime)}
┃
┃ ${!isGroup ? `𝑈𝑠𝑢𝑎𝑟𝑖𝑜: ${pushname}` :  `𝐺𝑟𝑢𝑝𝑜: ${groupNome}`}
┃
┃ Uso de ram: ${ram2}
┃
┣━━━〔 ${hora} 〕━━━━
┃
╰━──≪𝐵𝑌   𝑃 𝐸 𝐷 𝑅 𝑂 𝑍 𝑍  ≫─━━╯
`, contextInfo: {
externalAdReply: {title: `⚡ PING DA BETTY  ⚡\n${timed} ${pushname}`, 
body: `@Pedrozz_Mods`, 
thumbnail: await getBuffer(ping), 
mediaType: 1,
renderLargerThumbnail: true,
sourceUrl: `https://www.youtube.com/@Pedrozz_Mods`}}, 
mentions: [sender]}, 
{quoted: info})
}
break

case 'add':
case 'unkick':
case 'reviver':
reply(msg.espere)
if (!isCreator   && !isCreatorofc) return reply('Desculpe, Comando Privado Para o Dono?')
if(!isGroupAdmins) return reply(msg.adm)
if(!isBotGroupAdmins) return reply(msg.botadm)
if(!q && info.message.extendedTextMessage === null) return reply('Marque a mensagem ou coloque o número de quem você quer adicionar no grupo')
try {
useradd = `${args.join(" ").replace(/\D/g,'')}` ? `${args.join(" ").replace(/\D/g,'')}` : info.message.extendedTextMessage.contextInfo.participant
let id = `${useradd.replace(/\D/g,'')}`
if(!id) return reply(`Número inválido`)
let [result] = await client.onWhatsApp(id)
if(!result) return reply(`Esse número não está registrado no WhatsApp`)
let response = await client.groupParticipantsUpdate(from, [result.jid], "add")
if(response[0].status == "409") {
client.sendMessage(from, {text: `Ele já está no grupo, como eu vou adicionar?`, mentions: [result.jid, sender]})
} else if(response[0].status == "403") {
client.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele privou a conta`, mentions: [result.jid, sender]})
} else if(response[0].status == "408") {
client.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele saiu recentemente do grupo.`, mentions: [result.jid, sender]})
} else if(response[0].status == "401") {
client.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele bloqueou o bot`, mentions: [result.jid, sender]})
} else if(response[0].status == "200") {
client.sendMessage(from, {text: `Prontinho fiz o que você pediu`, mentions: [result.jid, sender]})
} else {
reply("Vish acho que algo deu errado")
}
} catch {
}
break

case "grupo":
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (!isBotGroupAdmins) return reply(msg.botamd)
await client.sendMessage(from, { react: { text: `❌`, key: info.key }})
await client.sendMessage(from, { react: { text: `✔️`, key: info.key }})
await client.sendMessage(from, { react: { text: `❌`, key: info.key }})
await client.sendMessage(from, { react: { text: `✔️`, key: info.key }})
if (args.length < 1) return reply(`
╔━━━━━━░CDM GRUPO░━━━━━━╗
  ❌⃟PARA FECHAR O GRUPO (${prefix}grupo f )ͦ⃟❌
  ✔️ͦ⃟PARA ABRIR O GRUPO (${prefix}grupo a )ͦ⃟✔️
╚━━━━━░${botName}░━━━━━━╝
`)
try {
if (q == "a"){
await client.sendMessage(from, { react: { text: `✔️`, key: info.key }})
await client.groupSettingUpdate(from, "not_announcement")
reply(`✔️𝔾ℝ𝕌ℙ𝕆 𝔸𝔹𝔼ℝ𝕋𝕆 ℂ𝕆𝕄 𝕊𝕌ℂ𝔼𝕊𝕊𝕆✔️\n${timed}\nDATA:${data}\nHORA:${hora}`)
}
if (q == "f") {
await client.sendMessage(from, { react: { text: `❌`, key: info.key }})
await client.groupSettingUpdate(from, "announcement")
reply(`❌𝔾ℝ𝕌ℙ𝕆 𝔽𝔼ℂℍ𝔸𝔻𝕆 ℂ𝕆𝕄 𝕊𝕌ℂ𝔼𝕊𝕊𝕆❌\n${timed}\nDATA:${data}\nHORA:${hora}`)
}
} catch(e) {
console.log(e)
reply(msg.error)
}
break

case 'fechamento': 
if (!isGroupAdmins && !isCreator && !isCreatorofc) return reply(msg.adm)
client.sendMessage(from, { react: { text: `${emoji}`, key: info.key }})
enviar(` se você quer colocar um tempo para que seu grupo feche e abra automaticamente usse os seguintes comando.\n\n
╭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭ ⪩
╰╮女⃟⃟女  FECHAMENTO PROGAMADO ❈⃟き
┃│● ⋟  ${emoji}${prefix}grupo30s (30 segundos)
┃│● ⋟  ${emoji}${prefix}grupo1m (1 minuto)
┃│● ⋟  ${emoji}${prefix}grupo2m (2 minutos)
┃│● ⋟  ${emoji}${prefix}grupo5m (5 minutos)
┃│● ⋟  ${emoji}${prefix}grupo10m (10 minutos)
┃│● ⋟  ${emoji}${prefix}grupo20m (20 minutos)
┃│● ⋟  ${emoji}${prefix}grupo30m (30 minutos)
┃│● ⋟  ${emoji}${prefix}grupo1h (1 hora)
┃│● ⋟  ${emoji}${prefix}grupo3h (3 hora)
┃│● ⋟  ${emoji}${prefix}grupo5h (5 horas)
┃│● ⋟  ${emoji}${prefix}grupo12h (12 horas)
┃╰▬▭ ⪨
╰▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭ ⪨


`)
break

case 'grupo30s':
if (!isGroupAdmins && !isCreator) return reply(msg.adm)
{
client.groupSettingUpdate(from, "announcement")
await esperar(30000); //30 segundos 
client.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo1m':
if (!isGroupAdmins && !isCreator) return reply(msg.adm)
{
client.groupSettingUpdate(from, "announcement")
await esperar(60000); //1 Minuto
client.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo2m':
if (!isGroupAdmins && !isCreator) return reply(msg.adm)
escrever(`esse grupo foi fechado por dois minutos.\n até a aqui a pouco`)
{
client.groupSettingUpdate(from, "announcement")
await esperar(120000); //2 Minutos
client.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo5m':
if (!isGroupAdmins && !isCreator) return reply(msg.adm)
escrever(`esse grupo foi fechado por cinco minutos.\n até a aqui a pouco`)
{
client.groupSettingUpdate(from, "announcement")
await esperar(300000); //5 Minutos
client.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo10m':
if (!isGroupAdmins && !isCreator) return reply(msg.adm)
escrever(`esse grupo foi fechado por dez minutos.\n até a aqui a pouco`)
{
client.groupSettingUpdate(from, "announcement")
await esperar(600000); //10 Minutos 
client.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo20m':
if (!isGroupAdmins && !isCreator) return reply(msg.adm)
escrever(`esse grupo foi fechado por vinte minutos.\n até a aqui a pouco`)
{
client.groupSettingUpdate(from, "announcement")
await esperar(1200000); //20 Minutos
client.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo30m':
if (!isGroupAdmins && !isCreator) return reply(msg.adm)
escrever(`esse grupo foi fechado por trinta minutos.\n até a aqui a pouco`)
{
client.groupSettingUpdate(from, "announcement")
await esperar(13800000); //30 Minutos
client.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo1h':
if (!isGroupAdmins && !isCreator) return reply(msg.adm)
escrever(`esse grupo foi fechado por uma hora.\n até a aqui a pouco`)
{
client.groupSettingUpdate(from, "announcement")
await esperar(27600000); //1 Hora
client.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo3h':
if (!isGroupAdmins && !isCreator) return reply(msg.adm)
escrever(`esse grupo foi fechado por três horas.\n até a aqui a pouco`)
{
client.groupSettingUpdate(from, "announcement")
await esperar(82800000); //3 Horas
client.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo5h':
if (!isGroupAdmins && !isCreator) return reply(msg.adm)
escrever(`esse grupo foi fechado por cinco horas.\n até a aqui a pouco`)
{
client.groupSettingUpdate(from, "announcement")
await esperar(138000000); //30 segundos 
client.groupSettingUpdate(from, "not_announcement")
}
break

case 'grupo12h':
if (!isGroupAdmins && !isCreator) return reply(msg.adm)
escrever(`esse grupo foi fechado por doze horas.\n até a aqui a pouco`)
{
client.groupSettingUpdate(from, "announcement")
await esperar(331200000); //12 Horas
client.groupSettingUpdate(from, "not_announcement")
}
break

case "restartlink":
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (!isBotGroupAdmins) return reply(msg.botadm)
try {
await client.groupRevokeInvite(from)
reply(`${emoji}Link de convite resetado com sucesso ${emoji}`)
} catch(e) {
console.log(e)
reply(`algo deu errado`)
}
break

case 'gplink':
case 'linkgrupo':
case 'linkgp':
  if (!isGroup) return reply("Este comando só pode ser usado em grupos.");
  if (!isBotGroupAdmins) return reply("Preciso ser um administrador para gerar o link de convite.");
  const linkgc = await client.groupInviteCode(from);
  client.sendMessage(from, {text: `https://chat.whatsapp.com/${linkgc}\n\nLink do grupo ${groupName}`}, { quoted: info });
  break;
  
  
////
case 'fotolink':
      if (!isPremium) return enviar(msg.premium)
      enviar(`espera um pouquinho ai`)
        try {
          if (isQuotedImage) {
            boij = isQuotedImage || isQuotedImage ? JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage : info
            const fetch = require('node-fetch');
            const FormData = require('form-data');
            const fs = require('fs');
            async function uploadImageToTelegraph(imageBuffer) {
              const form = new FormData();
              form.append('file', imageBuffer, { filename: 'image.jpg' });

              const response = await fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form,
              });
              const data = await response.json();
              if (data && data[0] && data[0].src) {
                return 'https://telegra.ph' + data[0].src;
              } else {
                throw new Error('Failed to retrieve the image URL from the response.');
              }
            }
            const owgi = await getFileBuffer(boij, "image");
            const imageUrl = await uploadImageToTelegraph(owgi);
            reply(imageUrl);
          } else {
            reply('marque a ft')
          }
        } catch (e) {
          console.log(e)
          reply('error...')
        }
        break
        case 'videourl':
      case 'videopralink':
      if(!isPremium) return reply(msg.premium)
        try {
          if (isQuotedVideo) {
            boij = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage
              : info.message.videoMessage;
            const fetch = require('node-fetch');
            const FormData = require('form-data');
            const fs = require('fs');
            async function uploadVideoToTelegraph(videoBuffer) {
              const form = new FormData();
              form.append('file', videoBuffer, { filename: 'media' });

              const response = await fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form,
              });
              const data = await response.json();
              if (data && data[0] && data[0].src) {
                return 'https://telegra.ph' + data[0].src;
              } else {
                throw new Error('Failed to retrieve the image URL from the response.');
              }
            }
            const owgi = await getFileBuffer(boij, "video");
            const imageUrl = await uploadVideoToTelegraph(owgi);
            reply(imageUrl);
          } else {
            reply('marque o video')
          }
        } catch (e) {
          console.log(e)
          reply('error...')
        }
        break

case 'fatos': case 'curiosidades': case 'curiosidade':
reagir("🧠")
await sleep(1000)
const { fatos } = require('./betty/lib/fatos.js');
var fatoskk = fatos[Math.floor(Math.random() * fatos.length)]   
fatosText = `*_${fatoskk}_*`
fatosImg = `https://telegra.ph/file/c2556e8d0ff1f19e9ff1b.jpg`
mencionarIMG(fatosText, fatosImg)
break

case 'gpt':
reagir(`⚡`)
await esperar(2000)
reagir(`❤️`)
if(!q) return reply(`olá ${pushname} - ${timed}\n o que eu posso te ajudar hj?
se quiser fazer uma pergunta usa assim⇣⇣⇣⇣⇣⇣⇣⇣
para fazer uma pergunta para mim usse asim i.a quê hora são?(mais tira o (.) somente foi usar para não bugar kkk`)
anu1 = await fetchJson(`https://aemt.me/openai?text=responda em português ao texto: ${q}`)
client.sendMessage(from, {
text: `
𝗔𝗤𝗨𝗜 𝗘𝗦𝗧𝗔 𝗔 𝗦𝗨𝗔 𝗥𝗘𝗦𝗣𝗢𝗦𝗧𝗔 ${pushname}:\n\n
${anu1.result}
`,
contextInfo: {
mentionedJid: [sender],
externalAdReply: {
showAdAttribution: true,
title: `PEDROZZ_MODS  -  ${timed}`,
body: `©PEDROZZ`,
thumbnailUrl: fotoIA,
sourceUrl: `https://chat.whatsapp.com/IQQJTgtdMwm5EojOe3z1TJ`,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {quoted: info}).catch(e => {
return reply(msg.error())
reagir("❌")
})
break

case 'base':
escrever(`
A base utilizada para me fazer e a da Silver Stars/Dark Stars
Criadores: BELPHEGOR & ARCANJA
Comandos: Pedrozz_Mods
Baileys: 6.5.0
prefix: ( ${prefix} )\n
Se você quiser mais informações
use ${prefix}infobot
`)
break

//////////(⬆️⬆️SUAS CASES ACIMA⬆️⬆️)////////

default:
if(isCmd) {
reagir("❌")
client.sendMessage(from, {text: `
╭━─≪𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐈𝐍𝐄𝐗𝐈𝐒𝐓𝐄𝐍𝐓𝐄≫─━╮
│╭─────────────╮
││➥[${moji}] *OLÁ HUMANO:* ${pushname}
││➥[${moji}] *ACHO QUE TE FALTA LER O MENU*
││➥[${moji}] *COMANDO:* ${comando}
││➥[${moji}] *BOT*: ${botName}
│╰─────────────╯
╰━──≪𝐵𝑌   𝑃 𝐸 𝐷 𝑅 𝑂 𝑍 𝑍  ≫─━━╯
`,
contextInfo: {
externalAdReply: {
            title: `${timed} ${pushname}`,
            body: "@ Pedrozz_Mods",
            reviewType: "PHOTO",
            sourceUrl: `https://www.youtube.com/@Pedrozz_Mods`, 
            }}})
}

}
// IF ABAIXO 👇
if (texto.includes(`@${donoNumher}`)) {
var mestre =[`Achando que você e quem para ficar marcando meu mestre ai em?`,`OQUE DESEJAS COM MEU MESTRE?`,`MESTREEEEE ESTÃO TE CHAMANDO AQUI Ó`]
var doninho = mestre[Math.floor(Math.random() * mestre.length)]
enviar(`${doninho}`)
 }
 
if (budy.includes("Betty") || (budy.includes("betty"))){
reagir(`⚡`)
await esperar(2000)
reagir(`❤️`)
                    rate = body.slice(6)
					var foda =[`bot oficial do grupo ${groupName} so tem jente braba`,`oi, em que posso te ajudar?`,`estou a seu dispor`,`olá ${pushname} estou a sua disposição`,`como você está ${pushname}`,`me chamou?`,`oi oi`,`pode falar`,`chamou,chamou? estou aqui👻`,`aiaiaiaiai😜😜 chegou quem presta aqui ja  EUUU😝`,`Opa pode falar que eu estou a disposição`,`você me chamou e vim mais rápido que pude`,`humm`,`falaaaaa seu(ua) corno(a) kkkk`,`oi oi oi oi oi oi oin`]
					var falas = foda[Math.floor(Math.random() * foda.length)]

					enviar(`${falas}`)
}


////////////////(Suas if acima)///////////////////
} catch (erro) {
console.log(erro)
}})

client.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update
if(lastDisconnect === undefined) {

}

if(connection === 'close') {
var shouldReconnect = (lastDisconnect.error.Boom)?.output?.statusCode !== DisconnectReason.loggedOut  
ligarbot()
}
if(update.isNewLogin) {
console.log(`conectado com sucesso`)
}})}
ligarbot()

fs.watchFile('./index.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('A index foi editada, irei reiniciar...');
process.exit()
}
})


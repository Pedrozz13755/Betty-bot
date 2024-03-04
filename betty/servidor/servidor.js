const fs = require('fs')
const fetch = require('node-fetch')
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')
const Crypto = require('crypto')
const CFonts  = require('cfonts')

const uang = JSON.parse(fs.readFileSync('./arquivos/datauser/uang.json'))
const _cashB = JSON.parse(fs.readFileSync('./arquivos/cash_.json'))
var corzinhas = ["red", "green", "yellow", "blue", "magenta", "cyan", "white"]
const cor1 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	
const cor2 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]
const cor3 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	
const cor4 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]
	

const h2k = (number) => {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

function getGroupAdmins(participants) {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}


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
		});
		return res.data;
	} catch (e) {
		console.log(`Error : ${e}`);
	}
};

const randomBytes = (length) => {
    return Crypto.randomBytes(length);
};

const generateMessageID = () => {
    return randomBytes(10).toString('hex').toUpperCase();
};


const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`;
};

        var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = 'Domigo'; break;
                case 1: hari = 'Segunda-feira'; break;
                case 2: hari = 'terça'; break;
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
                        var waktoo = ase.getHours();
                        switch(waktoo){
                case 0: waktoo = 'Hora da meia-noite usuário'; break;
                case 1: waktoo = 'Hora da meia-noite usuário'; break;
                case 2: waktoo = 'De manhã cedo usuário'; break;
                case 3: waktoo = 'De manhã cedo usuário'; break;
                case 4: waktoo = 'Alvorecer usuário'; break;
                case 5: waktoo = 'Alvorecer usuário'; break;
                case 6: waktoo = 'bom dia  usuário'; break;
                case 7: waktoo = 'bom dia  usuário'; break;
                case 8: waktoo = 'bom dia  usuário'; break;
                case 9: waktoo = 'bom dia  usuário'; break;
                case 10: waktoo = 'bom dia  usuário'; break;
                case 11: waktoo = 'Boa tarde  usuário'; break;
                case 12: waktoo = 'Boa tarde  usuário'; break;
                case 13: waktoo = 'Boa tarde  usuário'; break;
                case 14: waktoo = 'Boa tarde  usuário'; break;
                case 15: waktoo = 'Boa tarde  usuário'; break;
                case 16: waktoo = 'Boa tarde  usuário'; break;
                case 17: waktoo = 'Boa tarde  usuário'; break;
                case 18: waktoo = 'Quase a noite  usuário'; break;
                case 19: waktoo = 'Quase a noite  usuário'; break;
                case 20: waktoo = 'Boa noite  usuário'; break;
                case 21: waktoo = 'Boa noite  usuário'; break;
                case 22: waktoo = 'Boa noite  usuário'; break;
                case 23: waktoo = 'Boa noite  usuário'; break;
            }
            var tampilUcapan = '' + waktoo;  

 
const banner = cfonts.render((`BETTY|BOT💋`), {
font: 'block',
align: 'center',
colors: [`red`, `white`]
});

const banner2 = cfonts.render((`${waktoo}`), {
font: 'console',
align: "center",
gradient: [`${cor3}`, `${cor4}`]
});                

const banner3 = cfonts.render((`© 2024 Copyright by Pedrozz_Mods`), {
font: 'console',
align: 'center',
gradient: ['red', 'magenta']
});

const spinner = { 
  "interval": 150,
  "frames": [
"L",
"LA",
"LAU",
"LAUR",
"LAURA",
  ]}
  
  const spinner2 = { 
  "interval": 150,
  "frames": [" MEU CANAL : https://youtube.com/@Pedrozzmods"]}
let globalSpinner;

let globalSpinner2;

const getGlobalSpinner = () => {
  if(!globalSpinner) globalSpinner = new spin({ color: 'pink', succeedColor: 'purple', spinner});
  return globalSpinner;
}

const getGlobalSpinner2 = () => {
  if(!globalSpinner2) globalSpinner2 = new spin({ color: 'pink', succeedColor: 'purple', spinner2});
  return globalSpinner2;
}

spins = getGlobalSpinner(false)

spins2 = getGlobalSpinner2(false)

const start = (id, text) => {
	spins.add("2", {text: text})
	}
	
const start2 = (id, text) => {
	spins2.add(id, {text: text})
	}
	
const infopd = (id, text) => {
	spins.update(id, {text: text})
}
const success = (id, text) => {
	spins.succeed(id, {text: text})
}

const close = (id, text) => {
	spins.fail(id, {text: text})
}

//======//
             
module.exports = {
getBuffer,
h2k,
generateMessageID, 
getGroupAdmins, 
getRandom, 
start, 
start2,
infopd, 
success, 
close,
banner, 
banner2,
banner3,
}

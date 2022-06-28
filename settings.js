//════════════(00)═══════════════════════════════════════//
//
//                              K.PRABHASHA
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════(00)════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `𝙎.𝙂 𝙍𝙀𝘿 𝘿𝙍𝘼𝙂𝙊𝙉
𝙈𝙔 𝙊𝙒𝙉𝙀𝙍 𝙄𝙎 𝙎𝘼𝙉𝙐𝙆𝘼 𝙂𝙀𝙀𝙉𝙄𝙏𝙃` //Costomize Alive Message (type your message in `` )

global.owner = ['+94711719336'] //Owner number in aive msg
global.premium = ['+94711719336'] //Owner Number info
global.ownernomer = '+94711719336' //Owner Number <<<

global.ownername = '𝙎𝘼𝙉𝙐𝙆𝘼 𝙂𝙀𝙀𝙉𝙐𝙏𝙃' //Owner Name
global.botname = ' 𝙎 𝙂 𝙍𝙀𝘿 𝘿𝙍𝘼𝙂𝙊𝙉 𝘽𝙊𝙏' //Bot Name

global.button = '𝘾𝙇𝙄𝘾𝙆 𝙃𝙀𝘼𝙍📍' //Costomize A Button Name In Alive Message
global.btnurl = 'https://wa.me/+94727339111' //Change Your Button's URL

global.region = 'India, South India, Kerala' //Country Region

global.packname = '𝙎.𝙂 𝙍𝙀𝘿 𝘿𝙍𝘼𝙂𝙊𝙉 𝘽𝙊𝙏࿐' //Bot Pacage Name
global.author = '😎𝙆.𝙋𝙧𝙖𝙗𝙝𝙖𝙨𝙝𝙖❯❯' //Author Name
global.prefa = ['','!','.','😂','❤','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor In Menu!


global.ig = 'https://chat.whatsapp.com/IHkKb4LgKkQBuu37pjw4X6' //Github Account!
global.footer = '𝙎.𝙂 𝙍𝙀𝘿 𝘿𝙍𝘼𝙂𝙊𝙉 𝙒𝘼 𝙂𝙍𝙊𝙐𝙋.' // DO NOT CHANGE!

global.mess = { // Error Mesages
    success: 'Done ✅',
    admin: 'ඇඩ්මින්ලට විතරයි මේක',
    botAdmin: 'මට ඇඩ්මින් දීපියාව්',
    owner: 'මේක 𝙪𝙨𝙚 කරන්න පුලුවන් 𝙤𝙬𝙣𝙚𝙧 ට විතරයි',
    group: '𝙁𝙀𝘼𝙏𝙐𝙍𝙀𝙎 𝙂𝙍𝙊𝙐𝙋 වලට විතරයි!',
    private: 'මේ 𝙁𝙀𝘼𝙏𝙐𝙍𝙀𝙎 𝙋𝙍𝙄𝙑𝙀𝙏 𝘾𝙃𝘼𝙏 එකකට විතරයි!',
    bot: 'මේ 𝙁𝙀𝘼𝙏𝙐𝙍𝙀𝙎 මට විතරයි තොපිට නැ',
    wait: 'ටිකක් වෙලා ඉන්න...',
    error: 'Error!!! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

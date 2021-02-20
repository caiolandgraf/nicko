const translate = require('@vitalets/google-translate-api');
const Discord = require('discord.js');

let langs = {
    "auto": "Automatic",
    "ar": "Arabe",
    "nl": "Holandes",
    "eng": "Inglês",
    "en": "Inglês",
    "fr": "Frances",
    "de": "Alemão",
    "el": "Grego",
    "it": "Italiano",
    "ja": "Japones",
    "jw": "Javanes",
    "kn": "Kannada",
    "ko": "Coreano",
    "pt": "Português",
    "ro": "Romano",
    "ru": "Russo",
    "es": "Espanhol"
}

module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let splitarg = args.join(" ").split(" / ");

    if (!args[0]) {
        return message.channel.send(`Use dessa forma: ${config.prefix}translate <lingua> / <lingua> <mensagem>`)
    }

    let msg = splitarg[3]

    let lang1 = splitarg[1];
    let lang2 = splitarg[2];

    translate(msg, { from: lang1, to: lang2 }).then(res => {
        let embed = new Discord.MessageEmbed()
            .setTitle(`**<a:approval_RDO:738811032029495347> Tradução**`)
            .setColor('303136')
            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/d/db/Google_Translate_Icon.png')
            .setDescription(`<a:setabranca:737684720997105685> Texto traduzido de: ` + "`" + `${langs[lang1]}` + "`" + " para " + "`" + `${langs[lang2]}` + "`")
            .addField('Texto original:', "`" + msg + "`")
            .addField(`Texto traduzido:`, "`" + res.text + "`")
            .setFooter(config.footer, avatar)
            .setTimestamp()

        message.channel.send(embed)

    }).catch(err => {
        console.log(err)
        message.channel.send('🥀・Desculpe mas essa lingua não existe.')
    })
}
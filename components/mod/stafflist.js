module.exports = async (client, Discord, message, args, db, config) => {
    if (message.guild.id != 719318155306205295) {
        return message.channel.send(`Ooops! ${message.author} este comando só pode ser executado no servidor de suporte :/`);
    }

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setAuthor('🔍 Informações dos staffs')
        .setTitle(`${message.guild.name}`)
        .setThumbnail("https://www.suporteinformatika.com.br/meabot/images/profile-new.jpg")
        .setFooter(config.footer)
        .setTimestamp()

        .addField('💎 **fσאเ#0001**', "CEO, Founder, Developer")
        .addField('🔮 **YummiKun#0012**', "CTO, Founder, Support")
        .addField('💡 **TV_Matheus2007#6224**', "Official Support")
        .addField('🛠 **jefersoncardoso175#6967**', "Mod")
        .addField('🛠 **¡ 𝙹𝚞𝙹𝚞𝚋𝚊 ♡#4554**', "Mod Helper")
        .addField('💡 **JøãøV™#3160**', "Partner, Support")
        .setImage("https://i.gifer.com/8AMQ.gif")

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
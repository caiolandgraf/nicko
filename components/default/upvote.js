module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    // criando umas variaveis que podem ser clicadas e redirecionadas a um site
    var dbl = ('[DISCORD BOT LIST](https://discordbotlist.com/bots/nicko)')
    var topgg = ('[TOP.GG](https://top.gg/bot/812777088695140362)')

    let embed = new Discord.MessageEmbed()
        .setTitle(`Olá ${message.author.username}`)
        .setDescription(`Sou um bot multifuncional com mais de **200** comandos, se você se interessar por alguns de meus comandos use **${config.prefix}invite para me convidar pro seu server**. Caso não saiba os meus comandos use: **${config.prefix}help**, para saber mais...\n\n\n`)
        .addField(`🤖 - confirmado!`, `${dbl}`, true)
        .addField(`👾 - sendo verificado!`, `${topgg}`, true)
        .setFooter(config.footer, avatar)
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        .setColor("303136")
    message.channel.send(embed)
}
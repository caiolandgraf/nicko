module.exports = async (client, Discord, message, args, db, config) => {

    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")
    const m = await message.channel.send("Carregando...")

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setTitle("Status! :ping_pong:")
        .addField(":grinning: Ping Externo:",
         "`"+(m.createdTimestamp - message.createdTimestamp - 100)+"ms`", true)

        .addField(":robot: Ping Da API:", 
        "`"+Math.round(client.ws.ping)+"ms`", true)

         .addField(":white_check_mark: Estou em:", 
        "`"+client.guilds.cache.size+" servers`", false)

        .addField(":warning: Estou sendo usado por:", 
        "`"+message.guild.memberCount+" pessoas neste server`", false)

        .setFooter(config.footer, avatar)
        .setTimestamp()

    m.edit(``, embed)
}
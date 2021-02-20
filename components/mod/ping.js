module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")
    const m = await message.channel.send("Ping?")

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setTitle("Pong! :ping_pong:")
        .addField(":grinning: Ping Externo:",
         "`"+(m.createdTimestamp - message.createdTimestamp - 100)+"ms`", true)

        .addField(":robot: Ping Da API:", 
        "`"+Math.round(client.ws.ping)+"ms`", true)

        .setFooter(config.footer, avatar)
        .setTimestamp()

    m.edit(``, embed)
}
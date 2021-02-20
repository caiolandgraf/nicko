module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({dynamic: true}).replace("webp", "png")
    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(`${message.author} usou aguamenti`)
        .setImage("https://i.pinimg.com/originals/56/bb/5c/56bb5cb587bc159818c49dadfda9155a.gif")
        .setFooter(config.footer2, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
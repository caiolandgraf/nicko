module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setTitle("🔮 Infos da última SnapShot!")
        .setDescription(config.snapshotInfoEsp)
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter(config.footer, avatar)
        .setTimestamp()
        .setImage("https://pa1.narvii.com/5677/04772ac9906958240a0ffdc9d6b9689b77b43382_hq.gif")

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
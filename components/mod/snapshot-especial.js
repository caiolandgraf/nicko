module.exports = async (client, Discord, message, args, db, config) => {
    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setTitle("🔮 Infos da última SnapShot especial de dia dos namorados (11/06 - 15/06)!")
        .setDescription(config.snapshotInfoEsp)
        .setThumbnail("https://www.suporteinformatika.com.br/meabot/images/profile-new.jpg")
        .setFooter(config.footer)
        .setTimestamp()
        .setImage("https://i.pinimg.com/originals/0e/8f/93/0e8f9366cb396a13485588c267750ddd.gif")

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
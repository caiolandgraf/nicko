module.exports = async (client, Discord, message, args, db, config) => {
    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setTitle("🔮 Infos da última SnapShot!")
        .setDescription(config.snapshotInfo)
        .setThumbnail("https://www.suporteinformatika.com.br/meabot/images/profile-new.jpg")
        .setFooter(config.footer)
        .setTimestamp()
        .setImage("https://mir-s3-cdn-cf.behance.net/project_modules/disp/cab4c932437055.5682ac94eecc6.gif")

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
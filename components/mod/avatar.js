module.exports = async (client, Discord, message, args, db, config) => {
    var usuario1 = message.mentions.users.first();
    if (!usuario1) usuario1 = message.author;

    let userAvatar = usuario1.displayAvatarURL({ dynamic: true, size: 4096 }).replace("webp", "png")
	let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(`**Clique [aqui](${userAvatar}) para baixar a foto!**`)
        .setTitle(`:frame_photo: ${usuario1.username}`)
        .setImage(userAvatar)
        .setFooter(config.footer, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
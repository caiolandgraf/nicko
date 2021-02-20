module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({dynamic: true}).replace("webp", "png")
    let usuario1 = message.mentions.users.first();
    if (!usuario1) usuario1 = null;
    let msg = "";

    if (usuario1 !== null) {
        msg = `${message.author} usou periculum em ${usuario1}`;
    } else {
        msg = `${message.author} usou periculum`;
    }

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(msg)
        .setImage("https://64.media.tumblr.com/bac995fe33670772001abf71d4765919/tumblr_mgunvfiUwY1ry118ro1_500.gif")
        .setFooter(config.footer2, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
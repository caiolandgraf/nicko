module.exports = async (client, Discord, message, args, db, config) => {
     let avatar = message.author.displayAvatarURL({dynamic: true}).replace("webp", "png")
    let usuario1 = message.mentions.users.first();
    if (!usuario1) usuario1 = null;
    let msg = "";

    if (usuario1 !== null) {
        msg = `${message.author} usou accio em ${usuario1}`;
    } else {
        msg = `${message.author} usou accio`;
    }

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(msg)
        .setImage("https://potterheadsquillblog.files.wordpress.com/2018/12/accio_cup.gif?w=387")
        .setFooter(config.footer2, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
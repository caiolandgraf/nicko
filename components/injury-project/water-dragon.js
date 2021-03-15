module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")
    let usuario1 = message.mentions.users.first();
    if (!usuario1) usuario1 = null;

    let msg = "";

    if (usuario1 !== null) {
        msg = `${message.author} usou **DIMENSIONAL CHANGE** em ${usuario1}`;
    } else {
        msg = `${message.author} usou **DIMENSIONAL CHANGE**`;
    }

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(msg)
        .setImage("https://i.pinimg.com/originals/36/44/22/364422138304a7067a8077d21c192f3a.gif")
        .setFooter(config.footer3, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
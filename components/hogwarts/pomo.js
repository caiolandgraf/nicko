module.exports = async (client, Discord, message, args, db, config) => {
     let avatar = message.author.displayAvatarURL({dynamic: true}).replace("webp", "png")
    let usuario1 = message.mentions.users.first();
    if (!usuario1) usuario1 = null;
    let msg = "";

    if (usuario1 !== null) {
        msg = `${usuario1} está caçando o **POMO DE OURO**`;
    } else {
        msg = `${message.author} está caçando o **POMO DE OURO**`;
    }

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(msg)
        .setImage("https://i.pinimg.com/originals/04/66/25/046625c4aa8d692bfea080dd3da0eb99.gif")
        .setFooter(config.footer2, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
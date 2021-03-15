module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")
    let usuario1 = message.mentions.users.first();
    if (!usuario1) usuario1 = null;

    if (message.author.id != "615685442334883891") {
        message.channel.send("Somente o criador dessa mágia sabe usa-la!")
        return;
    }

    let msg = "";

    if (usuario1 !== null) {
        msg = `${message.author} usou **NIGHTMARE MUTATION** em ${usuario1}`;
    } else {
        msg = `${message.author} usou **NIGHTMARE MUTATION**`;
    }

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(msg)
        .setImage("https://i.pinimg.com/originals/88/c4/d8/88c4d8f291c6a3c429866a605d935d95.gif")
        .setFooter(config.footer2, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
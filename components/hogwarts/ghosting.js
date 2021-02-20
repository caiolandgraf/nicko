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
        msg = `${message.author} usou **GHOSTING** em ${usuario1}`;
    } else {
        msg = `${message.author} usou **GHOSTING**`;
    }

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(msg)
        .setImage("https://i.pinimg.com/originals/ae/b8/53/aeb853e7b70e6c1b425d2d68c4cc1da8.gif")
        .setFooter(config.footer2, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)

    if (usuario1 !== null) {
        setTimeout(async () => {
            let embed = new Discord.MessageEmbed()
                .setColor("303136")
                .setDescription(msg)
                .setImage("https://i.pinimg.com/originals/af/67/38/af67386a169d5c4de509b34caa74e8b0.gif")
                .setFooter(config.footer2, avatar)
                .setTimestamp()
            m.edit(``, embed)
        }, 5000)
    }
}
module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")
    let usuario1 = message.mentions.users.first();
    if (!usuario1) usuario1 = null;

    let msg = "";

    if (usuario1 !== null) {
        msg = `${message.author} usou **BODY PROTECTION** em ${usuario1}`;
    } else {
        msg = `${message.author} usou **BODY PROTECTION**`;
    }

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(msg)
        .setImage("https://static.wikia.nocookie.net/fairytailfanon/images/4/42/Shadow_drive_magic_power.gif")
        .setFooter(config.footer3, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
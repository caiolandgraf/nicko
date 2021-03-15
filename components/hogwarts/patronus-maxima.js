module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")
    let usuario1 = message.mentions.users.first();
    if (!usuario1) usuario1 = null;

    let msg = "";

    if (usuario1 !== null) {
        msg = `${message.author} usou **PATRONUS MAXIMA** em ${usuario1}`;
    } else {
        msg = `${message.author} usou **PATRONUS MAXIMA**`;
    }

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(msg)
        .setImage("https://i.pinimg.com/originals/1b/9c/7b/1b9c7b6b0437552e79f88e1808a6f3af.gif")
        .setFooter(config.footer2, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
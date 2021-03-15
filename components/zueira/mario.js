module.exports = async (client, Discord, message, args, db, config) => {
    let usuario = message.mentions.users.first();
    if (!usuario) usuario = message.author;
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setFooter(config.footer, avatar)
        .setTimestamp()
        .setDescription(`${usuario} jogou o: Mario!`)
        .setImage("https://media1.giphy.com/media/x2woMnCz4W0Vy/source.gif")
        .setColor("303136")

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
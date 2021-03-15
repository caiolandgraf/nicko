module.exports = async (client, Discord, message, args, db, config) => {
    let usuario = message.mentions.users.first();
    if (!usuario) usuario = message.author;
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setFooter(config.footer, avatar)
        .setTimestamp()
        .setDescription(`${usuario} ACHOU ERRADO, OTÁRIO!`)
        .setImage("https://media1.tenor.com/images/ca7f01272f2d1d0db2426e21b5dcf665/tenor.gif?itemid=10902943")
        .setColor("303136")

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
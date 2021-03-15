module.exports = async (client, Discord, message, args, db, config) => {
    let usuario = message.mentions.users.first();
    if (!usuario) usuario = message.author;
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setFooter(config.footer, avatar)
        .setTimestamp()
        .setDescription(`${usuario} é ${Math.floor(Math.random() * 100)}% gado!`)
        .setImage("https://thumbs.gfycat.com/NextMellowBlackwidowspider-size_restricted.gif")
        .setColor("303136")

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
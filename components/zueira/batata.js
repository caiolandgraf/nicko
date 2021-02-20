module.exports = async (client, Discord, message, args, db, config) => {
    let usuario = message.mentions.users.first();
    if (!usuario) usuario = message.author;
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setFooter(config.footer, avatar)
        .setTimestamp()
        .setTitle(`Estela Batata, a bruxa mais incrivel do munto inteiro! ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️`)
        .setImage("https://i.imgur.com/qgXaS2k.gif")
        .setThumbnail("https://media.gazetadopovo.com.br/viver-bem/2019/08/batata-frita-acrilamida-768x512-d86212d0.jpg")
        .setColor("303136")

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
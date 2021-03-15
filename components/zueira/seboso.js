module.exports = async (client, Discord, message, args, db, config) => {
    let usuario = message.mentions.users.first();
    if (!usuario) usuario = message.author;
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setFooter(config.footer, avatar)
        .setTimestamp()
        .setDescription(`${usuario}, NHENHENHENHENHE SEBOSO!`)
        .setColor("303136")

    await message.channel.send(embed)
    await message.channel.send(`https://www.suporteinformatika.com.br/meabot/gifs/a.mp4`)
}
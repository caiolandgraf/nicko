module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({dynamic: true}).replace("webp", "png")
    let usuario1 = message.mentions.users.first();
    if (!usuario1) usuario1 = message.author;

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(`${message.author} aparatou`)
        .setImage("https://cdn.discordapp.com/attachments/713829125994971147/724068919064920124/desaparetar.gif")
        .setFooter(config.footer2, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
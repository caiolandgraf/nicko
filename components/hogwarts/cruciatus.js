module.exports = async (client, Discord, message, args, db, config) => {
    let usuario1 = message.mentions.users.first();

    if (!args[1]) return message.channel.send("`Você não me informou em quem quer lançar esta mágia :/`")

    if (!usuario1) usuario1 = args[1];
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(`${message.author} usou cruciatus em ${usuario1}`)
        .setImage("https://cdn.discordapp.com/attachments/724069878964944921/724077465852706826/Voldemort_crucio_harry.gif")
        .setFooter(config.footer2, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
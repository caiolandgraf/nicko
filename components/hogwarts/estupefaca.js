module.exports = async (client, Discord, message, args, db, config) => {
    let usuario1 = message.mentions.users.first();

    if (!args[1]) return message.channel.send("`Você não me informou em quem quer lançar esta mágia :/`")

    if (!usuario1) usuario1 = args[1];
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")
    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(`${message.author} usou estupefaça em ${usuario1}`)
        .setImage("https://hgo-hogwarts.weebly.com/uploads/1/5/1/4/15148900/4149043_orig.gif")
        .setFooter(config.footer2, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
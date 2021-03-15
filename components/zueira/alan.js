module.exports = async (client, Discord, message, args, db, config) => {
    let usuario = message.mentions.users.first();
    if (!usuario) usuario = message.author;
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(`O Alan te mandou um beijo na bunda ${usuario}`)
        .setImage("https://64.media.tumblr.com/7ec9f5c0adf433c61e2bbbe507013750/tumblr_ouuo66b2z21w1t4s0o1_400.gifv")
        .setFooter(config.footer, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
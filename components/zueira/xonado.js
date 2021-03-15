module.exports = async (clien, Discord, message, args, db, config) => {
    let usuario1 = message.mentions.users.first();
    if (!usuario1) return message.reply("Você não mencionou ninguém!");
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(`${message.author} ta apaixonado(a) por ${usuario1}! :3`)
        .setImage("https://78.media.tumblr.com/f45638fa6b5fe1ae33161bdc820e7157/tumblr_ox5ztxngy01w33ey9o1_500.gif")
        .setFooter(config.footer, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
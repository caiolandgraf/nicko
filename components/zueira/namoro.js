module.exports = async (clien, Discord, message, args, db, config) => {
    let usuario1 = message.mentions.users.first();
    if (!usuario1) return message.reply("Você não mencionou ninguém!");
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(`${message.author} pediu ${usuario1} em namoro! :3`)
        .setImage("https://66.media.tumblr.com/cc3fa433e8a7e4c5adfe88b691b8d18e/tumblr_mugrzioPk51stpwsmo4_500.gif")
        .setFooter(config.footer, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
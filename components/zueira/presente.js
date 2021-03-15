module.exports = async (clien, Discord, message, args, db, config) => {
    let usuario1 = message.mentions.users.first();
    if (!usuario1) return message.reply("Você não mencionou ninguém!");
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(`${message.author} deu um presente especial para ${usuario1}! :3`)
        .setImage("https://media.giphy.com/media/l3vRebb6HyeIgvmQ8/giphy.gif")
        .setFooter(config.footer, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
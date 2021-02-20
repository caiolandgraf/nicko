module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL().replace("webp", "png")

    if (!args[1]) return message.channel.send("`Por favor informe um número :)`")
    if (args[1] > 100 || args[1] <= 0) return message.channel.send("`Por favor informe um número entre 1 e 6`")
    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setTitle("<a:dadinho:804765642476879872> `Rolando...`")
        .setDescription("<a:setabranca:737399939289841665> `Rolou "+ args[1] +"` \n <a:setabranca:737399939289841665> `Conseguiu " + Math.floor(Math.random() * args[1] + 1) +"!`")
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(config.footer, avatar)
        .setTimestamp()

    message.channel.send(embed)
}
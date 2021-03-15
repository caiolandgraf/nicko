module.exports = async (client, Discord, message, args, db, config) => {
    let usuario1 = message.mentions.users.first();
    if (!usuario1) return message.reply("Você não mencionou ninguém!");
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(`${message.author} fuzilou ${usuario1} até a morte!`)
        .setImage("https://media0.giphy.com/media/TBOvwBGkQShnq/200.gif")
        .setFooter(config.footer, avatar)
        .setTimestamp()

    message.channel.send(embed).then(msg => {
        msg.react('🔁').then(r => {
        })
        const ReFilter = (reaction, user) => reaction.emoji.name === '🔁' && user.id === message.mentions.users.first().id;
        const Re = msg.createReactionCollector(ReFilter);

        Re.on('collect', r2 => {
            r2.users.remove(message.mentions.users.first().id)
            avatar = usuario1.displayAvatarURL({ dynamic: true }).replace("webp", "png")
            let embed = new Discord.MessageEmbed()
                .setColor("303136")
                .setDescription(`${usuario1} fuzilou ${message.author} até a morte!`)
                .setImage("https://media0.giphy.com/media/TBOvwBGkQShnq/200.gif")
                .setFooter(config.footer, avatar)
                .setTimestamp()
            message.channel.send(embed)
        })
    })
}
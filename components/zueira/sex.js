module.exports = async (client, Discord, message, args, db, config) => {
    var usuario1 = message.mentions.users.first();
    if (!usuario1) return message.reply("Você não mencionou ninguém!");
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(`${message.author} fez fuc fuc com ${usuario1}`)
        .setImage("https://thumb-p0.xhcdn.com/a/l6ZXg2hi5dW57g7XQYeFgQ/000/087/503/290_450.gif")
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
                .setDescription(`${usuario1} fez fuc fuc com ${message.author}`)
                .setImage("https://thumb-p0.xhcdn.com/a/l6ZXg2hi5dW57g7XQYeFgQ/000/087/503/290_450.gif")
                .setFooter(config.footer, avatar)
                .setTimestamp()
            message.channel.send(embed)
        })
    })
}
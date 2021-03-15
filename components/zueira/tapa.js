module.exports = async (client, Discord, message, args, db, config) => {
    var usuario1 = message.mentions.users.first();
    if (!usuario1) return message.reply("Você não mencionou ninguém!");
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(`${message.author} deu um tapão em ${usuario1}!`)
        .setImage("https://media1.tenor.com/images/0cdae41362d61073f6322f31f8061e9a/tenor.gif?itemid=15133965")
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
                .setDescription(`${usuario1} deu um tapão em ${message.author}`)
                .setImage("https://media1.tenor.com/images/0cdae41362d61073f6322f31f8061e9a/tenor.gif?itemid=15133965")
                .setFooter(config.footer, avatar)
                .setTimestamp()
            message.channel.send(embed)
        })
    })
}
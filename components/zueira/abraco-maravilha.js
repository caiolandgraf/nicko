module.exports = async (clien, Discord, message, args, db, config) => {
    let usuario1 = message.mentions.users.first();
    if (!usuario1) return message.reply("Você não mencionou ninguém!");

    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(`${message.author} deu um abraço maravilha em ${usuario1}! O abraço com todo amor do mundo :3`)
        .setImage("https://pa1.narvii.com/6334/cc8671baffb228efcb4d90aa9bd51cac8bccf9da_hq.gif")
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
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
                .setDescription(`${usuario1} deu um abraço maravilha em ${message.author}! O abraço com todo amor do mundo :3`)
                .setImage("https://pa1.narvii.com/6334/cc8671baffb228efcb4d90aa9bd51cac8bccf9da_hq.gif")
                .setThumbnail(usuario1.displayAvatarURL({ dynamic: true }))
                .setFooter(config.footer, avatar)
                .setTimestamp()
            message.channel.send(embed)
        })
    })
}
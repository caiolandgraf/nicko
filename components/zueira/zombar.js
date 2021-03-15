module.exports = async (client, Discord, message, args, db, config) => {
    let usuario = message.mentions.users.first();
    if (!usuario) usuario = null;
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    if (usuario == null) {
        let embed = new Discord.MessageEmbed()
            .setFooter(config.footer, avatar)
            .setTimestamp()
            .setDescription(`${message.author} zombou de si mesmo!`)
            .setImage("https://img.ibxk.com.br/2015/05/29/29131059399104.gif")
            .setColor("303136")

        const m = await message.channel.send("Carregando...")
        m.edit(``, embed)
    } else {
        let embed = new Discord.MessageEmbed()
            .setFooter(config.footer, avatar)
            .setTimestamp()
            .setDescription(`${message.author} zombou de ${usuario}!`)
            .setImage("https://img.ibxk.com.br/2015/05/29/29130519988082.gif")
            .setColor("303136")

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
                .setDescription(`${usuario1} zombou de ${message.author}`)
                .setImage("https://img.ibxk.com.br/2015/05/29/29130519988082.gif")
                .setFooter(config.footer, avatar)
                .setTimestamp()
            message.channel.send(embed)
        })
    })
    }
}
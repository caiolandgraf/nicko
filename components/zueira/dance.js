module.exports = async (client, Discord, message, args, db, config) => {
    let usuario1 = message.mentions.users.first();
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")
    if (!usuario1) usuario1 = null;

    let msg = null;
    let gif = null;
    if (usuario1 == null) {
        msg = `${message.author} dançou sozinho!`;
        gif = "https://images.uncyc.org/pt/a/a1/Batima9.gif";
        let embed = new Discord.MessageEmbed()
            .setFooter(config.footer, avatar)
            .setTimestamp()
            .setDescription(msg)
            .setImage(gif)
            .setColor("303136")
        message.channel.send(embed)
    } else {
        msg = `${message.author} dançou com ${usuario1}!`;
        gif = "https://i.makeagif.com/media/12-17-2015/TWuqTM.gif";
        let embed = new Discord.MessageEmbed()
            .setFooter(config.footer, avatar)
            .setTimestamp()
            .setDescription(msg)
            .setImage(gif)
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
                    .setFooter(config.footer, avatar)
                    .setTimestamp()
                    .setDescription(`${usuario1} dançou com ${message.author}!`)
                    .setImage(gif)
                    .setColor("303136")

                message.channel.send(embed)
            })
        })
    }
}
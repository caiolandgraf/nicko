module.exports = async (clien, Discord, message, args, db, config) => {
    let usuario1 = message.mentions.users.first();
    if (!usuario1) return message.reply("Você não mencionou ninguém!");
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(`${usuario1} é você que... o/a ${message.author}`)
        .setImage("https://media1.tenor.com/images/6e817cb96215c3a18973e708ea09e16c/tenor.gif?itemid=8826760")
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
                .setDescription(`${message.author} é você que... o/a ${usuario1}`)
                .setImage("https://media1.tenor.com/images/6e817cb96215c3a18973e708ea09e16c/tenor.gif?itemid=8826760")
                .setFooter(config.footer, avatar)
                .setTimestamp()
            message.channel.send(embed)
        })
    })
}
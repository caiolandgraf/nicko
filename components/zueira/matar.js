module.exports = async (client, Discord, message, args, db, config) => {
    let usuario = message.mentions.users.first();
    if (!usuario) usuario = null;
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    if (usuario == null) {
        let embed = new Discord.MessageEmbed()
            .setFooter(config.footer, avatar)
            .setTimestamp()
            .setDescription(`${message.author} se suicidou! press "f" to respect`)
            .setImage("https://media1.giphy.com/media/wEVWyePowLHNK/source.gif")
            .setColor("303136")

        const m = await message.channel.send("Carregando...")
        m.edit(``, embed)
        m.react("🇫")
    } else {
        let embed = new Discord.MessageEmbed()
            .setFooter(config.footer, avatar)
            .setTimestamp()
            .setDescription(`${message.author} matou ${usuario}! press "f" to respect`)
            .setImage("https://thumbs.gfycat.com/SpryColorlessLark-small.gif")
            .setColor("303136")

        message.channel.send(embed).then(msg => {
        msg.react('🔁').then(r => {
            msg.react("🇫").then(r => {
            })
        })
        const ReFilter = (reaction, user) => reaction.emoji.name === '🔁' && user.id === message.mentions.users.first().id;
        const Re = msg.createReactionCollector(ReFilter);

        Re.on('collect', async r2 => {
            r2.users.remove(message.mentions.users.first().id)
            avatar = usuario.displayAvatarURL({ dynamic: true }).replace("webp", "png")
            let embed = new Discord.MessageEmbed()
                .setColor("303136")
                .setDescription(`${usuario} matou ${message.author}! press "f" to respect`)
                .setImage("https://thumbs.gfycat.com/SpryColorlessLark-small.gif")
                .setFooter(config.footer, avatar)
                .setTimestamp()
            const m = await message.channel.send(embed)
            m.react("🇫")
        })
    })
    }
}
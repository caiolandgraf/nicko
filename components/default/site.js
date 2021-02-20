module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setTitle(`Muito obrigado **${message.author.username}** por entrar no meu site!`)
        .setDescription(`Clique [aqui](https://denin.glitch.me/) para entrar nele!`)
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }).replace("webp", "png"))
        .setFooter(config.footer, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
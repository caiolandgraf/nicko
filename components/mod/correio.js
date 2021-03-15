module.exports = async (client, Discord, message, args, db, config) => {
    let splitarg = args.join(" ").split(" / ");
    if (args.length === 0) {
        return message.reply(`utilize: ,${command} <para quem> / <mensagem>`)
    }
    let aFor = message.mentions.users.first();
    let aMessage = splitarg[1]
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setAuthor("💌 CORREIO")
        .setTitle(`Para ${aFor.username}`)
        .setDescription(aMessage)
        .setThumbnail("https://scontent.fldb2-1.fna.fbcdn.net/v/t1.0-1/p200x200/81372169_2684894624927402_4498269933733412864_n.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=KXxS6zoCLEAAX-Eq6qn&_nc_ht=scontent.fldb2-1.fna&_nc_tp=6&oh=99afa569f531c274ab8b868322fe5b0d&oe=5F03926C")
        .setFooter(config.footer, avatar)
        .setTimestamp()

        .addField('**enviado por**', message.author.username)

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
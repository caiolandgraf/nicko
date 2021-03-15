module.exports = async (client, Discord, message, args, db, config) => {
    if (!message.author.hasPermission("ADMINISTRATOR")) {
        return message.channel.send(`Ooops! ${message.author} parece que você não tem permissão :/`);
    }
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let splitarg = args.join(" ").split(" / ");
    let aMessage = splitarg[1]
    if (!aMessage) {
        return message.reply("utilize: `,dm <para quem> / <mensagem>`")
    }
    

    let dUser = message.guild.member(message.mentions.members.first());
    if (!dUser) return message.channel.send("`Não consegui encontrar esse usuário`")

    await dUser.send(aMessage)

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(`DM enviada com sucesso ${message.author}`)
        .setImage("")
        .setFooter(config.footer, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
module.exports = async (client, Discord, message, args, db, config) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(`Ooops! ${message.author} parece que você não tem permissão :/`);
    }
    if (args.length === 0) return message.channel.send(`Ooops! ${message.author} ei você não informou o usuário que deseja avisar!`)
    let warningMember = message.mentions.members.first();
    if (!warningMember) return message.channel.send(`Ooops! Não consegui encontrar esse usuário não :/`)

    let waringRason = args.slice(2).join(' ');
    if (!waringRason) {
        waringRason = "Ele já tava me enchendo o saco! -.-"
    }
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    if (db.get(message.guild.id).find().value().logChat != null) {
        let canal = client.channels.cache.get(db.get(message.guild.id).find().value().logChat)
        let embed = new Discord.MessageEmbed()
            .setFooter(config.footer, avatar)
            .setTimestamp()
            .setAuthor(message.author.username)
            .setTitle("Usuário avisado com sucesso!")
            .setDescription(`${warningMember} avisado por ${message.author} - ${waringRason}`)
            .setImage("https://nosilvernationalization.org/warning.gif")
            .setColor("303136")

        const m = await canal.send("Carregando...")
        m.edit(``, embed)
    } else {
        let embed = new Discord.MessageEmbed()
            .setFooter(config.footer, avatar)
            .setTimestamp()
            .setAuthor(message.author.username)
            .setTitle("Usuário mutado com sucesso!")
            .setDescription(`${warningMember} avisado por ${message.author} - ${waringRason}`)
            .setImage("https://nosilvernationalization.org/warning.gif")
            .setColor("44475a")

        const m = await message.channel.send("Carregando...")
        m.edit(``, embed)
    }

    let embed2 = new Discord.MessageEmbed()
        .setFooter(config.footer, avatar)
        .setTimestamp()
        .setAuthor(message.guild.name)
        .setTitle("Você recebeu um warning!")
        .setDescription(`${warningMember} você foi avisado/a por ${message.author} - ${waringRason}`)
        .setImage("https://nosilvernationalization.org/warning.gif")
        .setColor("303136")

    await message.guild.member(message.mentions.members.first()).send(``, embed2)
}
module.exports = async (client, Discord, message, args, db, config) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(`Ooops! ${message.author} parece que você não tem permissão :/`);
    }
    if (args.length === 0) return message.channel.send(`Ooops! ${message.author} ei você não informou o usuário que deseja mutar!`)
    let muteMember = message.mentions.members.first();
    if (!muteMember) return message.channel.send(`Ooops! Não consegui encontrar esse usuário não :/`)

    if (!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) {
        return message.channel.send("Eu não posso mutar este usuário! Ele pode ter um cargo maior que o meu, ou eu não tenha permissão pra mutar!");
    }
    let muteRason = args.slice(2).join(' ');
    if (!muteRason) {
        muteRason = "Ele já tava me enchendo o saco! -.-"
    }

    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    const muteRole = db.get(message.guild.id).find().value().muteRoleId

    let muterole = message.guild.roles.cache.get(muteRole)

    await (muteMember.roles.add(muterole));

    if (db.get(message.guild.id).find().value().logChat != null) {
        let canal = client.channels.cache.get(db.get(message.guild.id).find().value().logChat)
        let embed = new Discord.MessageEmbed()
            .setFooter(config.footer, avatar)
            .setTimestamp()
            .setAuthor(message.author.username)
            .setTitle("Usuário mutado com sucesso!")
            .setDescription(`${muteMember} mutado por ${message.author} - ${muteRason}`)
            .setImage("https://thumbs.gfycat.com/DazzlingSentimentalBarnswallow-small.gif")
            .setColor("303136")

        const m = await canal.send("Carregando...")
        m.edit(``, embed)
    } else {
        let embed = new Discord.MessageEmbed()
            .setFooter(config.footer, avatar)
            .setTimestamp()
            .setAuthor(message.author.username)
            .setTitle("Usuário mutado com sucesso!")
            .setDescription(`${muteMember} mutado por ${message.author} - ${muteRason}`)
            .setImage("https://thumbs.gfycat.com/DazzlingSentimentalBarnswallow-small.gif")
            .setColor("303136")

        const m = await message.channel.send("Carregando...")
        m.edit(``, embed)
    }
}
module.exports = async (client, Discord, message, args, db, config) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(`Ooops! ${message.author} parece que você não tem permissão :/`);
    }
    if (args.length === 0) return await message.channel.send(`Ooops! ${message.author} ei você não informou o usuário que deseja desmutar!`)
    let muteMember = message.mentions.members.first();
    if (!muteMember) return message.channel.send(`Ooops! Não consegui encontrar esse usuário não :/`)

    if (!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) {
        return message.channel.send("Eu não posso desmutar este usuário! Ele pode ter um cargo maior que o meu, ou eu não tenha permissão pra desmutar!");
    }
    let muteRason = args.slice(2).join(' ');
    if (!muteRason) {
        muteRason = "Ele já aprendeu a lição"
    }

    const muteRole = db.get(message.guild.id).find().value().muteRoleId

    let muterole = message.guild.roles.cache.get(muteRole)
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    await (muteMember.roles.remove(muterole));

    if (db.get(message.guild.id).find().value().logChat != null) {
        let canal = client.channels.cache.get(db.get(message.guild.id).find().value().logChat)
        let embed = new Discord.MessageEmbed()
            .setFooter(config.footer, avatar)
            .setTimestamp()
            .setAuthor(message.author.username)
            .setTitle("Usuário desmutado com sucesso!")
            .setDescription(`${muteMember} desmutado por ${message.author} - ${muteRason}`)
            .setImage("https://i0.wp.com/falamedeiros.com.br/wp-content/uploads/2018/03/porque-o-instagram-removeu-os-gifs-do-stories-2.gif?resize=402%2C173&ssl=1")
            .setColor("303136")

        const m = await canal.send("Carregando...")
        m.edit(``, embed)
    } else {
        let embed = new Discord.MessageEmbed()
            .setFooter(config.footer, avatar)
            .setTimestamp()
            .setAuthor(message.author.username)
            .setTitle("Usuário desmutado com sucesso!")
            .setDescription(`${muteMember} desmutado por ${message.author} - ${muteRason}`)
            .setImage("https://i0.wp.com/falamedeiros.com.br/wp-content/uploads/2018/03/porque-o-instagram-removeu-os-gifs-do-stories-2.gif?resize=402%2C173&ssl=1")
            .setColor("303136")

        const m = await message.channel.send("Carregando...")
        m.edit(``, embed)
    }
}
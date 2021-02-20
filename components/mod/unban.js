module.exports = async (client, Discord, message, args, db, config) => {

    if (!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`Ooops! ${message.author} parece que você não tem permissão :/`);
    }

    if (args.length === 0) return await message.channel.send(`Ooops! ${message.author} ei você não informou o usuário que deseja banir!`)
    let banMember = args.slice(1).join(' ')
    if(!banMember) return message.channel.send("Isso não é um ID :/")

    let banRason = args.slice(2).join(' ');
    if (!banRason) {
        banRason = "Ele já aprendeu a lição! :/"
    }
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")
    try {
        if (db.get(message.guild.id).find().value().logChat != null) {
            let canal = client.channels.cache.get(db.get(message.guild.id).find().value().logChat)
            await message.guild.members.unban(banMember, banRason)

            let embed = new Discord.MessageEmbed()
                .setFooter(config.footer, avatar)
                .setTimestamp()
                .setAuthor(message.author.username)
                .setTitle("Usuário desbanido com sucesso!")
                .setDescription(`${banRason}`)
                .setImage("https://i.pinimg.com/originals/02/54/18/02541836d53054d4c76386b2905292bd.gif")
                .setColor("303136")

            const m = await canal.send("Carregando...")
            m.edit(``, embed)
        } else {
            await message.guild.members.unban(banMember, banRason)

            let embed = new Discord.MessageEmbed()
                .setFooter(config.footer, avatar)
                .setTimestamp()
                .setAuthor(message.author.username)
                .setTitle("Usuário desbanido com sucesso!")
                .setDescription(`${banMember} desbanido por ${message.author} - ${banRason}`)
                .setImage("https://i.pinimg.com/originals/02/54/18/02541836d53054d4c76386b2905292bd.gif")
                .setColor("303136")

            const m = await message.channel.send("Carregando...")
            m.edit(``, embed)
        }
    } catch (e) {
        console.log(e);
    }
}
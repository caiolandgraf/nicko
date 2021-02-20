module.exports = async (client, Discord, message, args, db, config) => {

    if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(`Ooops! ${message.author} parece que você não tem permissão :/`);
    }

    if (args.length === 0) return message.channel.send(`Ooops! ${message.author} ei você não informou o usuário!`)
    let member = message.mentions.members.first();
    if (!member) return message.channel.send(`Ooops! Não consegui encontrar esse usuário não :/`)

    let role = args.slice(2).join(' ').replace("<", "")
    role = role.replace(">", "")
    role = role.replace("@", "")
    role = role.replace("&", "")

    if (!role) {
        return message.channel.send("Você não falou qual cargo quer retirar!");
    }

    let rolearemove = message.guild.roles.cache.get(role)
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    await (member.roles.remove(rolearemove));

    let embed = new Discord.MessageEmbed()
        .setFooter(config.footer, avatar)
        .setTimestamp()
        .setAuthor(message.author.username)
        .setTitle("Cargo removido com sucesso!")
        .setDescription(`${member} perdeu o cargo ${args.slice(2).join(' ')} de ${message.author}`)
        .setImage("https://i.pinimg.com/originals/c7/eb/5b/c7eb5bbae52025b4d2ad9b8224022bd4.gif")
        .setColor("303136")

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
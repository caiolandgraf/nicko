module.exports = async (client, Discord, message, args, db, config) => {

	let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

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
        return message.channel.send("Você não falou qual cargo quer adicionar!");
    }

    let roleadd = message.guild.roles.cache.get(role)

    await (member.roles.add(roleadd));

    let embed = new Discord.MessageEmbed()
        .setFooter(config.footer, avatar)
        .setTimestamp()
        .setAuthor(message.author.username)
        .setTitle("Cargo adicionado com sucesso!")
        .setDescription(`${member} recebeu o cargo ${args.slice(2).join(' ')} de ${message.author}`)
        .setImage("https://media.tenor.com/images/0f8971b9689520ad880306cc1c2dc20f/tenor.gif")
        .setColor("303136")

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
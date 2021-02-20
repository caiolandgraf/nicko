module.exports = async (client, Discord, message, args, db, config) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(`Ooops! ${message.author} parece que você não tem permissão :/`);
    }
    let id = args[1].replace("<", "")
    id = id.replace(">", "")
    id = id.replace("@", "")
    id = id.replace("&", "")

    let membersWithRole = message.guild.roles.cache.get(id);
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    console.log(membersWithRole.members.forEach(member => {
        // console.log(member.user)

        let embed = new Discord.MessageEmbed()
            .setColor("303136")
            .setTitle(`${member.user.username}#${member.user.discriminator}`)
            .setDescription(`Esse usuários tem a tag <@&${id}>!`)
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            .setFooter(config.footer, avatar)
            .setTimestamp()

        const m = message.channel.send(embed)
    }))
    console.log(`Got ${membersWithRole} members with that role.`);
}
module.exports = async (client, Discord, message, args, db, config) => {
    let splitarg = args.join(" ").split(" / ");

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("você não tem permissão pra criar um embed")
    }

    if (args.length === 0) {
        return message.reply(`utilize: /${command} <titulo> / <texto>`)
    }

    let aTitle = splitarg[1]
    let aAnnouncement = splitarg[2]
    let aColor = "303136";

    if (splitarg[3]) {
        aColor = splitarg[3]
    }

    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor(aColor)
        .setTitle(aTitle)
        .setDescription(aAnnouncement)
        .setThumbnail(message.guild.iconURL())
        .setFooter(config.footer, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
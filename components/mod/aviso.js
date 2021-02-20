module.exports = async (client, Discord, message, args, db, config) => {
    let splitarg = args.join(" ").split(" / ");
	let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("você não tem permissão pra criar um anuncio")
    }

    if (args.length === 0) {
        return message.reply(`utilize: /${command} <título> / <anúncio>`)
    }
    let aTitle = splitarg[1]
    let aAnnouncement = splitarg[2]

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setTitle("<a:pin:739637843743473765> AVISO")
        .setDescription("<a:seta_RDO:737684794036715621>`"+aTitle+"` \n"+aAnnouncement)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setFooter(config.footer, avatar)
        .setTimestamp()
        .addField('**enviado por**', message.author.username)

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
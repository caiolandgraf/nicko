module.exports = async (client, Discord, message, args, db, config) => {
    const date = message.guild.createdAt
    const joined = message.member.joinedAt
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    const region = {
        brazil: ':flag_br: Brazil'
    }

    let gAvatar = message.guild.iconURL({ dynamic: true });
    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setAuthor('🔍 MEMBROS')
        .addField(`**:man_mage: Humanos**`, 
        `${message.guild.members.cache.filter(member => !member.user.bot).size}`, true)
        .addField("**:robot: Bots**", 
        `${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
        .setThumbnail(gAvatar)
        .setFooter(config.footer, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}

function formatDate(template, date) {
    var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
    date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
    return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
        return template.split(specs[i]).join(item)
    }, template)
}

module.exports = async (client, Discord, message, args, db, config) => {
    let usuario = message.mentions.users.first();
    if (!usuario) usuario = message.author;
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let status = usuario.presence.status;

    if (status === "online") {
        status = ":green_circle: ONLINE";
    } else if (status === "offline") {
        status = ":white_circle: INVISÍVEL";
    } else if (status === "idle") {
        status = ":yellow_circle: AUSENTE";
    } else {
        status = ":red_circle: OFFLINE";
    }

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setAuthor('🔍 Informações do usuário')
        .setTitle(usuario.tag, usuario.avatarURL({ dynamic: true }))
        .setThumbnail(usuario.avatarURL({ dynamic: true }))
        .setFooter(config.footer, avatar)
        .setTimestamp()

        .addField('**Nome**', usuario.username)
        .addField('**Status**', status)
        .addField('**Cargos**:', `<@&${message.guild.member(usuario)._roles.join('> <@&')}>`)
        .addField('**Criado em**', formatDate('DD/MM/YYYY, às HH:mm:ss', usuario.createdAt))
        .addField('**Entrou aqui em entrou em**', formatDate('DD/MM/YYYY, às HH:mm:ss', message.guild.members.cache.get(usuario.id).joinedAt))
        .setImage("https://leituraverso.com.br/wp-content/uploads/2019/04/shazam-gif-dancinha.gif")

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

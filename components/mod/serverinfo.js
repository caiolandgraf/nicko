module.exports = async (client, Discord, message, args, db, config) => {
    const onlineUsers = {
        online: message.guild.presences.cache.filter(presence => presence.status === "online").size,
    };

    const embed = new Discord.MessageEmbed()
        .setColor(config.embedcolor)
        .setTitle(`> Infomações do ${message.guild.name}`)

        .addField('**꒰✏️┊️Nome do servidor:**', message.guild.name)
        .addField('**꒰👑┊️Dono(a):**', `${message.guild.owner.user}`, false)

        .addField("**꒰👤┊️Membros:**", message.guild.members.cache.filter(member => !member.user.bot).size, true)
        .addField('**꒰🟢┊️Membros online:**', message.guild.channels.cache.size, true)
        .addField("**꒰🤖┊️Bots:**", message.guild.members.cache.filter(member => member.user.bot).size, true)

        .addField('**꒰💬┊️Canais:**', message.guild.channels.cache.size, true).addField('**꒰😂┊️Emojis:**', message.guild.emojis.cache.size, true)
        .addField('**꒰💼┊️Cargos:**', message.guild.roles.cache.size, true)

        .setThumbnail(message.guild.iconURL())
        .setTimestamp()
    message.channel.send(embed);
}
module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    if (!message.member.hasPermission("MANAGE_CHANNEL"))
        return message.reply("`Ooops! Parece que você não tem permissão para isso :/`");
    message.channel.overwritePermissions([{
        id: message.guild.id,
        deny: ['SEND_MESSAGES'],
    }]);

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setTitle(`<a:animation_21:737809226566729749> Canal lockeado com sucesso ${message.author.username} \n`)
        .setDescription("<a:setabranca:737684720997105685> Use **"+config.prefix+"lockun** para desbloquear")
        .setImage("")
        .setFooter(config.footer, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
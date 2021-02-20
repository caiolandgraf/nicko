module.exports = async (client, Discord, message, args, db, config) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply(`Ooops! ${message.author} parece que você não tem permissão :/`);
    }

    let msgDelete = parseInt(args[1], 10);

    if (msgDelete < 2 || msgDelete > 100) return await message.reply(`Ooops! ${message.author} eu só posso apagar de 2 a 100 mensagens de uma vez!`)
    if (args.length === 0) return await message.reply(`Ooops! ${message.author} ei você não informou quantas mensagens é para mim limpar!`)
    if (isNaN(msgDelete)) return await message.reply(`Ooops! ${message.author} até a onde eu sei, isso não é número :/`)

    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    try {
        await message.channel.bulkDelete(msgDelete);
    

        let embed = new Discord.MessageEmbed()
            .setColor("303136")
            .setTitle("`Limpando " +msgDelete+ " mensagens!`")
            .setFooter(config.footer, avatar)
            .setTimestamp()

        const m = await message.channel.send("Carregando...")
        m.edit(``, embed)
        
    } catch (e) {
        // console.log(e);
    }
}
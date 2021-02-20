module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(`<a:setabranca:737399939289841665> Meu prefixo é "**${config.prefix}**"`)

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
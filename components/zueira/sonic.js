module.exports = async (client, Discord, message, args, db, config) => {
    let usuario = message.mentions.users.first();
    if (!usuario) usuario = message.author;
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setFooter(config.footer, avatar)
        .setTimestamp()
        .setDescription(`${usuario} jogou o: Sonic!`)
        .setImage("https://media.giphy.com/media/wcOlfLmnPB8be/giphy.gif")
        .setColor("303136")

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
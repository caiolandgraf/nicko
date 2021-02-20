module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({dynamic: true}).replace("webp", "png")
    let usuario1 = message.mentions.users.first();
    if (!usuario1) usuario1 = null;
    let msg = "";
    msg = `${message.author} aplaudiu`;

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(msg)
        .setImage("https://cdn.discordapp.com/attachments/803309106633900052/804360259287515146/aplauso_teka_25.gif")
        .setFooter(config.footer2, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
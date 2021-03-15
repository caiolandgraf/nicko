module.exports = async (client, Discord, message, args, db, config) => {
    let usuario = message.mentions.users.first();
    if (!usuario) usuario = message.author;
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setFooter(config.footer, avatar)
        .setTimestamp()
        .setDescription(`Bom dia para você também ${usuario}!`)
        .setImage("https://optclean.com.br/wp-content/uploads/2016/11/bom-dia-grupo-whatsapp-21.jpg")
        .setColor("303136")

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
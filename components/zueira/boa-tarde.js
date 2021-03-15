module.exports = async (client, Discord, message, args, db, config) => {
    let usuario = message.mentions.users.first();
    if (!usuario) usuario = message.author;
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setFooter(config.footer, avatar)
        .setTimestamp()
        .setDescription(`Boa tarde para você também ${usuario}!`)
        .setImage("https://i1.wp.com/www.multarte.com.br/wp-content/uploads/2015/08/Imagens-para-whatsapp-Boa-tarde-Cachorro.jpg?resize=500%2C497")
        .setColor("303136")

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
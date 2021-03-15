module.exports = async (client, Discord, message, args, db, config) => {
    let usuario = message.mentions.users.first();
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setFooter(config.footer, avatar)
        .setTimestamp()
        .setDescription(`${message.author} sumiu! Cade elx?`)
        .setImage("https://i1.wp.com/www.polemicaparaiba.com.br/wp-content/uploads/2019/01/homer-simpson-bush-gif.gif?fit=320%2C240")
        .setColor("303136")

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
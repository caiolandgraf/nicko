module.exports = async (client, Discord, message, args, db, config) => {
    let usuario1 = message.mentions.users.first();
    if (!usuario1) usuario1 = (typeof args[1] != "undefined" ? args[1] : message.author);
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(`${message.author} usou relashio em ${usuario1}`)
        .setImage("https://66.media.tumblr.com/1b4dd1175f467b97adb15548bbd50128/tumblr_pjytj1HC9J1skl1u9o4_500.gif")
        .setFooter(config.footer2, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
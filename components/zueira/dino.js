module.exports = async (client, Discord, message, args, db, config) => {
    let usuario = message.mentions.users.first();
    if (!usuario) usuario = message.author;
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setFooter(config.footer, avatar)
        .setTimestamp()
        .setDescription(`${usuario} jogou o: Chrome Dinosaur!`)
        .setImage("https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Social_dino-with-hat.gif")
        .setColor("303136")

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
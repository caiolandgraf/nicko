module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")
    let splitarg = args.join(" ").split(" / ");

    let choice = splitarg[Math.floor(Math.random() * 2 + 1)]

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription("<a:setabranca:737684720997105685>**Hmmm... Eu escolho... Já sei:** `"+choice+"`")
        .setImage("")
        .setFooter(config.footer, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
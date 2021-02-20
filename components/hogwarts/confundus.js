module.exports = async (client, Discord, message, args, db, config) => {
    let usuario1 = message.mentions.users.first();

    if (!args[1]) return message.channel.send("`Você não me informou em quem quer lançar esta mágia :/`")

    if (!usuario1) usuario1 = args[1];
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(`${message.author} usou confundus em ${usuario1}`)
        .setImage("https://pa1.narvii.com/5867/d728c449d7f49632f5902c4b1e85ec2d75d4cf3b_hq.gif")
        .setFooter(config.footer2, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
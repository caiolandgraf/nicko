module.exports = async (client, Discord, message, args, db, config) => {
    let usuario1 = message.mentions.users.first();
    if (!usuario1) return message.reply("Você não mencionou ninguém!");
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")
    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(`${message.author} usou petrificus totalus em ${usuario1}`)
        .setImage("https://pa1.narvii.com/6342/d66c47c1679b0d710ce3af3a393aa73725f6f53e_hq.gif")
        .setFooter(config.footer2, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
module.exports = async (client, Discord, message, args, db, config) => {
    let usuario = message.author;
	let avatar = usuario.displayAvatarURL().replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("ff5555")
        .setTitle("🔮 Mágias e bruxarias!")
        .setDescription(`${usuario} aqui estão algumas mágias!`)
        .setThumbnail("https://www.suporteinformatika.com.br/meabot/images/profile-new.jpg")
        .setFooter(config.footer2, avatar)
        .setTimestamp()

        .addField('**🌐❯⊱──「MÁGIAS E BRUXARIAS」──⊰❮🌐**', "⊰❮🌐❯⊱")

        .setImage("https://media1.tenor.com/images/667f8c5df5930fc7897c3fdc36b0d9fa/tenor.gif?itemid=5943288")

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
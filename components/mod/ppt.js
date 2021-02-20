module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    var nomes = ['pedra', 'tesoura', 'papel'];

    let choice = args[1]

    var name = nomes[Math.floor(Math.random() * nomes.length)];

    let msg = ""

    if (choice == "pedra" && name == "papel") {
        msg = "Você perdeu!"
    } else if (choice == "papel" && name == "pedra") {
        msg = "Você ganhou!"
    } else if (choice == "tesoura" && name == "pedra") {
        msg = "Você perdeu!"
    } else if (choice == "tesoura" && name == "papel") {
        msg = "Você ganhou!"
    } else if (choice == "pedra" && name == "papel") {
        msg = "Você perdeu!"
    } else if (choice == "pedra" && name == "tesoura") {
        msg = "Você ganhou!"
    } else if (choice == "papel" && name == "tesoura") {
        msg = "Você perdeu!"
    } else if (choice == "papel" && name == "pedra") {
        msg = "Você ganhou!"
    } else if (choice == name) {
        msg = "Deu empate!"
    } else {
        return message.channel.send("`Ooops! Algo deu errado!`")
    }

    const embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setTitle(`**Pedra, papel, tesoura!**`)
        .addField('**Você escolheu:**', "`"+choice+"`")
        .addField('**Eu escolhi:**', "`"+name+"`")
        .addField('**__RESULTADO:__**', "`"+msg+"`")
        .setThumbnail("https://publicdomainvectors.org/photos/rock-paper-scissors.png")
        .setFooter(config.footer, avatar)
        .setTimestamp()
    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
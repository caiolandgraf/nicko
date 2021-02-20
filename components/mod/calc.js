const math = require('mathjs');

module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")
    if (!args[0]) return message.channel.send('`Coloque um cálculo válido!`');

    let conta = args.slice(1).join(" ")
    try {
        const embed = new Discord.MessageEmbed()
            .setColor("303136")
            .setThumbnail("https://image.flaticon.com/icons/png/512/189/189712.png")
            .setTitle('**Caluculadora**')
            .addField('**__Pergunta__**', `\`${conta}\``)
            .addField('**__Resposta__**', `\`${math.evaluate(conta)}\``)
            .setFooter(config.footer, avatar)
            .setTimestamp()

        message.channel.send(embed);
    } catch (e) {
        return message.channel.send('`Coloque um cálculo válido!`')
    }
}
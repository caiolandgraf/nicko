module.exports = async (client, Discord, message, args, db, config) => {

    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setTitle(`${message.author.username} clique aqui para me adicionar em seu server!`)
        .setDescription(`Espero que esteja gostando de mim!`)
        .setURL("https://discord.com/api/oauth2/authorize?client_id=812777088695140362&permissions=8&scope=bot")
        .setImage("https://media.giphy.com/media/XYro5A2aurVMQ/giphy.gif")
        .setFooter(config.footer, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
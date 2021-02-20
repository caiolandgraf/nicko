module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("`Ooops! Parece que você não tem permissões as adequadas!`");
    message.channel.setRateLimitPerUser(args[1])

    let msg = "<a:correto:735637284782866442> `Slowmode ativado!` \n <a:setabranca:737684720997105685> `Slow: " + args[1] + "s`"

    if (args[1] < 5) {
        msg = "`Ooops! Para ativar o slowmode o time precisa ser de 5s até 21600s (6hrs)!`"
        message.channel.setRateLimitPerUser(0)
    }

    if (args[1] == "0") {
        msg = "<a:correto:735637284782866442> `Slowmode desativado!` \n"
    }

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setTitle(msg)
        .setFooter(config.footer, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
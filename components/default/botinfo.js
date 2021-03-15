module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    // criando umas variaveis que podem ser clicadas e redirecionadas a um site
    var linguagem = ('[Node.js](https://nodejs.org/en/)')
    var livraria = ('[Discord.js V12](https://discord.js.org/#/)')
    var git = ('[Discord-Lab](https://github.com/young-js/Discord-Lab)')
    var criador = ('[Kyo](https://github.com/caiolandgraf)')

    let embed = new Discord.MessageEmbed()
        .setTitle(`Olá ${message.author.username}`)
        .setDescription(`Sou um bot multifuncional com mais de **200** comandos, se você se interessar por alguns de meus comandos use **${config.prefix}invite para me convidar pro seu server**. Caso não saiba os meus comandos use: **${config.prefix}help**, para saber mais...\n\n\n`)
        .addField(`Nome:`, `\`${client.user.username}\``, true)
        .addField(`Usuários:`, `${client.users.cache.size}`, true)
        .addField(`Servidores:`, ` ${client.guilds.cache.size}`, true)
        .addField(`País:`, `:flag_br: Brasil`, true)
        .addField(`Total de comandos:`, "+200", true)
        .addField(`**Minha linguaguem**`, linguagem, true)
        .addField(`**Minha livraria**`, livraria, true)
        .addField(`**Criador**`, criador, true)
        .addField(`**Criado em**`, `${client.moment(client.user.createdAt).format("LLL")}`, true)
        .setFooter(config.footer, avatar)
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp()
        .setColor("303136")
    message.channel.send(embed)
}
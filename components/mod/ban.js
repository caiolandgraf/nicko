module.exports = async (client, Discord, message, args, db, config) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`Ooops! ${message.author} parece que você não tem permissão :/`);
    }

    if (args.length === 0) return await message.channel.send(`Ooops! ${message.author} ei você não informou o usuário que deseja banir!`)

    let banMember = message.mentions.members.first();

    if (!banMember) return message.channel.send(`Ooops! Não consegui encontrar esse usuário não :/`)

    if (!banMember.bannable) {
        return message.channel.send("Eu não posso banir este usuário! Ele pode ter um cargo maior que o meu, ou eu não tenha permissão pra banir!");
    }

    let banRason = args.slice(2).join(' ');
    if (!banRason) {
        banRason = "Ele já tava me enchendo o saco! -.-"
    }

    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    try {
        if (db.get(message.guild.id).find().value().logChat != null) {
            let canal = client.channels.cache.get(db.get(message.guild.id).find().value().logChat)
            await message.guild.member(banMember).ban(banRason)

            let embed = new Discord.MessageEmbed()
                .setFooter(config.footer, avatar)
                .setTimestamp()
                .setAuthor(message.author.username)
                .setTitle("Usuário banido com sucesso!")
                .setDescription(`${banMember} banido por ${message.author} - ${banRason}`)
                .setImage("https://magicoficecream.files.wordpress.com/2012/05/hulk_avengers_gif_cinemagraph.gif")
                .setColor("303136")

            const m = await canal.send("Carregando...")
            m.edit(``, embed)
        } else {
            await message.guild.member(banMember).ban(banRason)

            let embed = new Discord.MessageEmbed()
                .setFooter(config.footer, avatar)
                .setTimestamp()
                .setAuthor(message.author.username)
                .setTitle("Usuário banido com sucesso!")
                .setDescription(`${banMember} banido por ${message.author} - ${banRason}`)
                .setImage("https://magicoficecream.files.wordpress.com/2012/05/hulk_avengers_gif_cinemagraph.gif")
                .setColor("303136")

            const m = await message.channel.send("Carregando...")
            m.edit(``, embed)
        }
    } catch (e) {
        console.log(e);
    }
}
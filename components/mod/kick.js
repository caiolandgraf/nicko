module.exports = async (client, Discord, message, args, db, config) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) {
        return message.channel.send(`Ooops! ${message.author} parece que você não tem permissão :/`);
    }
    if (args.length === 0) return await message.channel.send(`Ooops! ${message.author} ei você não informou o usuário que deseja kickar!`)
    let kickMember = message.mentions.members.first();
    if (!kickMember) return message.channel.send(`Ooops! Não consegui encontrar esse usuário não :/`)
    if (!kickMember.bannable) {
        return message.channel.send("Eu não posso expulsar este usuário! Ele pode ter um cargo maior que o meu, ou eu não tenha permissão pra expulsar!");
    }
    let kickRason = args.slice(2).join(' ');
    if (!kickRason) {
        kickRason = "Ele já tava me enchendo o saco! -.-"
    }
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    try {
        if (db.get(message.guild.id).find().value().logChat != null) {

            let canal = client.channels.cache.get(db.get(message.guild.id).find().value().logChat)

            await message.guild.member(kickMember).kick(kickRason)

            let embed = new Discord.MessageEmbed()
                .setFooter(config.footer, avatar)
                .setTimestamp()
                .setAuthor(message.author.username)
                .setTitle("Usuário expulso com sucesso!")
                .setDescription(`${kickMember} expulso por ${message.author} - ${kickRason}`)
                .setImage("https://pa1.narvii.com/6537/7118adc1da61b3235d397f3b507524f67a812c21_hq.gif")
                .setColor("303136")

            const m = await canal.send("Carregando...")
            m.edit(``, embed)
        } else {
            await message.guild.member(kickMember).kick(kickRason)

            let embed = new Discord.MessageEmbed()
                .setFooter(config.footer, avatar)
                .setTimestamp()
                .setAuthor(message.author.username)
                .setTitle("Usuário expulso com sucesso!")
                .setDescription(`${kickMember} expulso por ${message.author} - ${kickRason}`)
                .setImage("https://pa1.narvii.com/6537/7118adc1da61b3235d397f3b507524f67a812c21_hq.gif")
                .setColor("303136")

            const m = await message.channel.send("Carregando...")
            m.edit(``, embed)
        }
    } catch (e) {
        console.log(e);
    }
}
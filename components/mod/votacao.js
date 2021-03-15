module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let splitarg = args.join(" ").split("/ ");

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("você não tem permissão pra criar um anuncio")
    }

    if (args.length === 0) {
        return message.reply
            (`utilize: /votacao / <título> / <anúncio>`)

    }
    let aTitle = splitarg[1]
    let aAnnouncement = splitarg[2]

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setTitle("<a:alerta:737691068501590045> VOTAÇÃO")
        .setDescription("<a:seta_RDO:737684794036715621>`" + aTitle + "` \n" + aAnnouncement)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setFooter(config.footer, avatar)
        .setTimestamp()

    let porcentV = -2;
    let porcentX = -2;

    message.channel.send('@', embed).then(msg => {
        msg.react('✅').then(r => {
            msg.react('❌').then(r => {
            })
        })

        const VFilter = (reaction, user) => reaction.emoji.name === '✅';
        const XFilter = (reaction, user) => reaction.emoji.name === '❌';

        const V = msg.createReactionCollector(VFilter);
        const X = msg.createReactionCollector(XFilter);

        V.on('collect', r2 => {

            for (var users of r2.users.cache) {
                setTimeout( () => {
                    if (users[1].bot == false) {
                        let userId = users[1].id
                        r2.users.remove(userId)
                    }
                }, 1000)
            }

            let embed = new Discord.MessageEmbed()
                .setColor("303136")
                .setTitle("<a:alerta:737691068501590045> VOTAÇÃO")
                .setDescription("<a:seta_RDO:737684794036715621>`" + aTitle + "` \n" + aAnnouncement)
                .setAuthor(`${porcentV++} pessoa(s) votaram em ✅ \n ${porcentX} pessoa(s) votaram em ❌`)
                .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                .setFooter(config.footer, avatar)
                .setTimestamp()

            msg.edit(``, embed)

        })

        X.on('collect', r2 => {

            for (var users of r2.users.cache) {
                setTimeout( () => {
                    if (users[1].bot == false) {
                        let userId = users[1].id
                        r2.users.remove(userId)
                    }
                }, 1000)
            }

            let embed = new Discord.MessageEmbed()
                .setColor("303136")
                .setTitle("<a:alerta:737691068501590045> VOTAÇÃO")
                .setDescription("<a:seta_RDO:737684794036715621>`" + aTitle + "` \n" + aAnnouncement)
                .setAuthor(`${porcentV} pessoa(s) votaram em ✅ \n ${porcentX++} pessoa(s) votaram em ❌`)
                .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                .setFooter(config.footer, avatar)
                .setTimestamp()

            msg.edit(``, embed)
        })
    })
}
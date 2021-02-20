module.exports = async (client, Discord, message, args, db, config) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("você não tem permissão pra criar um mapa")
    }
    let splitarg = args.join(" ").split(" / ");
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    if (args.length === 0) {
        return message.reply(`ooops! Algo deu errado!`)
    }

    let map1Title = splitarg[1];
    let map1Desc = splitarg[2];
    let map1 = splitarg[3];

    let map2Title = splitarg[4];
    let map2Desc = splitarg[5];
    let map2 = splitarg[6];

    let map3Title = splitarg[7];
    let map3Desc = splitarg[8];
    let map3 = splitarg[9];

    let map4Title = splitarg[10];
    let map4Desc = splitarg[11];
    let map4 = splitarg[12];

    let map5Title = splitarg[13];
    let map5Desc = splitarg[14];
    let map5 = splitarg[15];

    let mapGif = "https://i.pinimg.com/originals/d7/ae/01/d7ae0170d3d5ffcbaa7f02fdda387a3b.gif";
    let mapColor = "303136";

    if (splitarg[16]) {
        mapGif = splitarg[16]
    }

    if (splitarg[17]) {
        mapColor = splitarg[17]
    }

    let embed = new Discord.MessageEmbed()
        .setColor(mapColor)
        .setAuthor('🔍 Mapa do server!')
        .setTitle("Se encontre!")
        .setThumbnail(message.guild.iconURL())
        .setFooter(config.footer, avatar)
        .setTimestamp()

        .addField(`**${map1Title}**`, `${map1} ➜ ${map1Desc}`)
        .addField(`**${map2Title}**`, `${map2} ➜ ${map2Desc}`)
        .addField(`**${map3Title}**`, `${map3} ➜ ${map3Desc}`)
        .addField(`**${map4Title}**`, `${map4} ➜ ${map4Desc}`)
        .addField(`**${map5Title}**`, `${map5} ➜ ${map5Desc}`)
        .setImage(mapGif)

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
module.exports = async (client, Discord, message, args, db, config) => {
    let splitarg = args.join(" ").split(" / ");
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("você não tem permissão pra criar um perfil")
    }

    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let name = splitarg[1]

    let nameP = splitarg[2]
    let ageP = splitarg[3]
    let bloodP = splitarg[4]
    let persP = splitarg[5]
    let genderP = splitarg[6]

    let house = splitarg[7]
    let dominio = splitarg[8]
    let varinha = splitarg[9]
    let uri = splitarg[10]

    let emoji = ""
    let color = "303136";

    if (house == "g") {
        house = "Gryffindor"
        emoji = "<:gryffindor:723598588906569839>"
        color = "ff4940";
    } else if (house ==  "s") {
        house = "Slytherin"
        emoji = "<:slytherin:723598802526928986>"
        color = "40ff7c";
    } else if (house == "r") {
        house = "Ravenclaw"
        emoji = "<:ravenclaw:723598668690751488>"
        color = "40afff";
    } else if (house == "h") {
        house = "Hufflepuff"
        emoji = "<:hufflepuff:723598744280498256>"
        color = "fff56e";
    }

    let embed = new Discord.MessageEmbed()
        .setColor(color)
        .setAuthor("PERFIL DE RPG")
        .setTitle(`Pertence à: ${name}`)

        .addField("⇛ Dados dos personagens", "∴┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅∴")
        .addField("↬ Nome", `${nameP}`)
        .addField("↬ Idade:", `${ageP}`)
        .addField("↬ Sangue:", `${bloodP}`)
        .addField("↬ Personalidade:", `${persP}`)
        .addField("↬ Gênero:", `${genderP}`)

        .addField("⇛ Dados de bruxo", "∴┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅∴")
        .addField("↬ Casa", `${house}`)
        .addField("↬ Domínio", `${dominio}`)
        .addField("↬ Varinha", `${varinha}`)

        .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMwoMZ3LACIAAsLYz7VoC-iXPGQbH1CLWEJ5W-F2F5LnTGJ6Sl&usqp=CAU")
        .setImage(uri)
        .setFooter(config.footer2, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
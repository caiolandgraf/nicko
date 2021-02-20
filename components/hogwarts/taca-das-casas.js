module.exports = async (client, Discord, message, args, db, config) => {
    let splitarg = args.join(" ").split(" / ");
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("você não tem permissão pra criar uma taça")
    }
    if (args.length === 0) {
        return message.reply(`utilize: /${command} <título> / <anúncio>`)
    }
    let gryffindor = splitarg[1]
    let slytherin = splitarg[2]
    let ravenclaw = splitarg[3]
    let hufflepuff = splitarg[4]
    let ven = splitarg[5]
    let color = "303136";

    if (ven == "g") {
        color = "ff4940";
    } else if (ven ==  "s") {
        color = "40ff7c";
    } else if (ven == "r") {
        color = "40afff";
    } else if (ven == "h") {
        color = "fff56e";
    }

    let embed = new Discord.MessageEmbed()
        .setColor(color)
        .setAuthor("🏆 TAÇA DAS CASAS")

        .addField("<:gryffindor:723598588906569839> ➜ **Gryffindor**", gryffindor)
        .addField("<:slytherin:723598802526928986> ➜ **Slytherin**", slytherin)
        .addField("<:ravenclaw:723598668690751488> ➜ **Ravenclaw**", ravenclaw)
        .addField("<:hufflepuff:723598744280498256> ➜ **Hufflepuff**", hufflepuff)

        .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMwoMZ3LACIAAsLYz7VoC-iXPGQbH1CLWEJ5W-F2F5LnTGJ6Sl&usqp=CAU")
        .setImage("https://hogwartshabbounidos.weebly.com/uploads/1/3/8/3/13832412/6441612.jpg?749")
        .setFooter(config.footer2)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
module.exports = async (client, Discord, message, args, db, config) => {
    let usuario = message.mentions.users.first();
    if (!usuario) usuario = message.author;
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let amount = Math.floor(Math.random() * 20 + 1)
    let quantity = "=";

    if (amount == 2) {
        quantity = "=="
    } else if (amount == 3) {
        quantity = "==="
    } else if (amount == 4) {
        quantity = "===="
    } else if (amount == 5) {
        quantity = "====="
    } else if (amount == 6) {
        quantity = "======"
    } else if (amount == 7) {
        quantity = "======="
    } else if (amount == 8) {
        quantity = "========"
    } else if (amount == 9) {
        quantity = "========="
    } else if (amount == 10) {
        quantity = "=========="
    } else if (amount == 11) {
        quantity = "==========="
    } else if (amount == 12) {
        quantity = "============"
    } else if (amount == 13) {
        quantity = "============="
    } else if (amount == 14) {
        quantity = "=============="
    } else if (amount == 15) {
        quantity = "==============="
    } else if (amount == 16) {
        quantity = "================"
    } else if (amount == 17) {
        quantity = "================="    
    } else if (amount == 18) {
        quantity = "=================="
    } else if (amount == 19) {
        quantity = "==================="
    } else if (amount == 20) {
        quantity = "===================="
    }

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setTitle(`Pinto de ${usuario.username}`)
        .setDescription(`8${quantity}D`)
        .setFooter(config.footer, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")
    let usuario1 = message.mentions.users.first();
    if (!usuario1) usuario1 = (typeof args[1] != "undefined" ? args[1] : message.author);

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(`${message.author} usou o feitiço cabeça de bolha`)
        .setImage("https://3.bp.blogspot.com/-la2KFWRUEUg/XL2eAwMd3rI/AAAAAAAALp0/8hcDAnxL13skxK0MF1_XyZNat1LAmpW-gCLcBGAs/s640/download.jpg")
        .setFooter(config.footer2, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
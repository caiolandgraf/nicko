module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")
    let usuario1 = message.mentions.users.first();
    if (!usuario1) usuario1 = null;

    let msg = "";

    if (usuario1 !== null) {
        msg = `${message.author} usou **FLOWER EXPLOSION** em ${usuario1}`;
    } else {
        msg = `${message.author} usou **FLOWER EXPLOSION**`;
    }

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(msg)
        .setImage("https://pa1.narvii.com/5760/6009230b6cfa24dc1296e83514ed9ad1304caf1f_hq.gif")
        .setFooter(config.footer2, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({dynamic: true}).replace("webp", "png")
    let usuario1 = message.mentions.users.first();
    if (!usuario1) usuario1 = null;
    let msg = "";

    if (usuario1 !== null) {
        msg = `${message.author} usou lumos em ${usuario1}`;
    } else {
        msg = `${message.author} usou lumos`;
    }

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(msg)
        .setImage("https://cdn.discordapp.com/attachments/803309106633900052/804357754387038217/p1apj7vefi1j8h1mc16bf1km9vgo4.gif")
        .setFooter(config.footer2, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
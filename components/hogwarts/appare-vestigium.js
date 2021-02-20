module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({dynamic: true}).replace("webp", "png")
    let usuario1 = message.mentions.users.first();
    if (!usuario1) usuario1 = null;
    let msg = "";

    if (usuario1 !== null) {
        msg = `${message.author} usou appare vestigium em ${usuario1}`;
    } else {
        msg = `${message.author} usou appare vestigium`;
    }

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(msg)
        .setImage("https://cdn.discordapp.com/attachments/803309106633900052/804357607384678440/2853dd592e3ca1b9ede046d25303da854173e834r1-480-200_00.gif")
        .setFooter(config.footer2, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
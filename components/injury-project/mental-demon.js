module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")
    let usuario1 = message.mentions.users.first();
    if (!usuario1) usuario1 = null;

    let msg = "";

    if (usuario1 !== null) {
        msg = `${message.author} usou **MENTAL DEMON** em ${usuario1}`;
    } else {
        msg = `${message.author} usou **MENTAL DEMON**`;
    }

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(msg)
        .setImage("https://thumbs.gfycat.com/BrownIndelibleChanticleer-max-1mb.gif")
        .setFooter(config.footer3, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)

    setTimeout(async () => {
        let embed = new Discord.MessageEmbed()
            .setColor("303136")
            .setDescription(msg)
            .setImage("https://cdn.discordapp.com/attachments/813593790924193862/817555388080848926/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.gif")
            .setFooter(config.footer3, avatar)
            .setTimestamp()
        m.edit(``, embed)
    }, 5000)
}
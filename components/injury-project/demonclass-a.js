module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")
    let usuario1 = message.mentions.users.first();
    if (!usuario1) usuario1 = null;

    let msg = "";

    if (usuario1 !== null) {
        msg = `${message.author} ativou **DEMONCLASS A** em ${usuario1}`;
    } else {
        msg = `${message.author} usou **DEMONCLASS A**`;
    }

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(msg)
        .setImage("https://cdn.discordapp.com/attachments/813593790924193862/817532362702716978/3fYL8i6Q-n-155t3dn_4kt5lU6wErjsM9S_SQp9XPrab29___INMNFoGaZA5wvX.gif")
        .setFooter(config.footer3, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
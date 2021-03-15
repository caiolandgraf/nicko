module.exports = async (client, Discord, message, args, db, config) => {
    let usuario1 = message.mentions.users.first();
    if (!usuario1) usuario1 = null;
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let msg = null;
    let gif = null;
    if (usuario1 == null) {
        msg = `${message.author} saiu correndo!`;
        gif = "https://media1.tenor.com/images/65e4567d66fe8d2e18644cd1c92f248b/tenor.gif?itemid=5902816";
    } else {
        msg = `${message.author} correu que nem o Flash de ${usuario1}!`;
        gif = "https://2.bp.blogspot.com/-H5lhLyBDYyo/WL1-aifFv5I/AAAAAAAAY-U/ggmIwhEtrrMs7kQ4GgDex6XHvGjP93TLACLcB/s1600/Gifs%2Banimados%2BThe%2BFlash%2B1.gif";
    }

    let embed = new Discord.MessageEmbed()
        .setFooter(config.footer, avatar)
        .setTimestamp()
        .setDescription(msg)
        .setImage(gif)
        .setColor("303136")

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
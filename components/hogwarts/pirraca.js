module.exports = async (client, Discord, message, args, db, config) => {
     let avatar = message.author.displayAvatarURL({dynamic: true}).replace("webp", "png")
    let usuario1 = message.mentions.users.first();
    if (!usuario1) usuario1 = null;
    let msg = "";

    msg = `${message.author} INVOCOU O PIRRAÇA, O POLTERGEIST DE **HOGWARTS**`;

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(msg)
        .setImage("https://pm1.narvii.com/6351/61646eeced63e20d05ff823ed29cc694e1a3b9c1_hq.jpg")
        .setFooter(config.footer2, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed);

    setTimeout(() => {
        message.channel.send("OLÁ A TODOS MEU NOME E PIRRAÇA!!!! COMO VOCÊS ESTÃO? HAHAHA")
    }, 15000)
    
}
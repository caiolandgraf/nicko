module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("1CD561")
        .setAuthor("Baladinha do fσłx - 🟢Spotify")
        .setDescription("https://open.spotify.com/playlist/59cGEWEOnFhwSzwEkMQoBU?si=jcvnJhFVSyaR3qOnWXbm_g")
        .setThumbnail("https://store-images.s-microsoft.com/image/apps.52691.13571498826857201.5bda3835-53b1-4825-ba61-ae335fbbbdd8.2995406a-229c-4a24-ae8a-39af0e795554")
        .setImage("https://cdn.discordapp.com/attachments/724738791893631056/724817478462603356/image7.gif")
        .setFooter(config.footer, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
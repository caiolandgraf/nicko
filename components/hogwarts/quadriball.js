module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")


    let messages = [
`
🎊 QUE OS JOGOS COMECEM! 🎊 \n
🏟️ \\🇦 \\🇧 \\🇨 \\🇩 \\🇪 \\🇫
1️⃣ ||🟦|| ||⬜️|| ||🟫️|| ||⬜️|| ||⬜️|| ||⬜️||
2️⃣ ||⬜️|| ||🟪️|| ||🟩|| ||⬜️|| ||⬜️|| ||🟪||
3️⃣ ||⬜️|| ||⬜️|| ||⬜|| ||⬜|| ||⬜|| ||⬜||
4️⃣ ||⬜️|| ||🟫️|| ||⬜️|| ||🟥|| ||⬜️|| ||🟧||
5️⃣ ||⬜️|| ||⬜️|| ||🟫|| ||🟨|| ||⬜️|| ||⬜️||
6️⃣ ||🟫|| ||⬜️|| ||⬜|| ||⬜|| ||⬜|| ||⬜||
`,
`
🎊 QUE OS JOGOS COMECEM! 🎊 \n
🏟️ \\🇦 \\🇧 \\🇨 \\🇩 \\🇪 \\🇫
1️⃣ ||⬜️|| ||🟧|| ||🟪|| ||⬜|| ||⬜|| ||⬜||
2️⃣ ||🟨|| ||️⬜|| ||⬜️|| ||🟥|| ||🟫|| ||⬜||
3️⃣ ||⬜|| ||⬜|| ||⬜️|| ||⬜️|| ||⬜|| ||🟫||
4️⃣ ||⬜|| ||⬜|| ||🟫|| ||⬜|| ||⬜|| ||⬜||
5️⃣ ||🟫|| ||🟩|| ||🟪|| ||⬜|| ||⬜|| ||⬜||
6️⃣ ||⬜|| ||⬜|| ||⬜|| ||⬜|| ||⬜|| ||🟦||
`,
`
🎊 QUE OS JOGOS COMECEM! 🎊 \n
🏟️ \\🇦 \\🇧 \\🇨 \\🇩 \\🇪 \\🇫
1️⃣ ||🟫|| ||⬜️|| ||⬜️|| ||⬜️|| ||⬜️|| ||⬜️||
2️⃣ ||⬜|| ||⬜|| ||⬜|| ||⬜|| ||🟪|| ||🟨||
3️⃣ ||⬜️|| ||🟪|| ||⬜️|| ||🟥️|| ||⬜️|| ||⬜️||
4️⃣ ||⬜️|| ||🟦|| ||🟫|| ||⬜️|| ||⬜|| ||🟫||
5️⃣ ||⬜️|| ||⬜|| ||⬜|| ||⬜|| ||🟩|| ||⬜️||
6️⃣ ||🟧️|| ||⬜️|| ||⬜️|| ||🟫|| ||⬜️|| ||⬜️||
`,
`
🎊 QUE OS JOGOS COMECEM! 🎊 \n
🏟️ \\🇦 \\🇧 \\🇨 \\🇩 \\🇪 \\🇫
1️⃣ ||⬜️|| ||⬜️|| ||🟪️|| ||⬜️|| ||⬜️|| ||⬜️||
2️⃣ ||🟫️|| ||⬜️|| ||⬜️|| ||🟦|| ||⬜️|| ||⬜️||
3️⃣ ||⬜️|| ||🟫️|| ||🟨|| ||⬜️|| ||🟧|| ||⬜️||
4️⃣ ||🟫|| ||⬜️|| ||⬜️|| ||⬜️|| ||⬜️|| ||🟪||
5️⃣ ||⬜️|| ||🟥|| ||⬜️|| ||⬜️|| ||⬜️|| ||⬜️||
6️⃣ ||⬜️|| ||⬜️|| ||🟫️|| ||⬜️|| ||⬜️|| ||🟩||
`
    ]

    let choose = Math.floor(Math.random() * 4)

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setAuthor(`⚠️ DEIXE APENAS O MODERADOR CLICAR! ⚠️`)
        .setDescription(messages[choose])
        .setFooter(config.footer2, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
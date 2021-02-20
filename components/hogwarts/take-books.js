module.exports = async (client, Discord, message, args, db, config) => {
    let usuario = message.author;
	let avatar = usuario.displayAvatarURL().replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setTitle("**📚❯─「LIVROS PARA ESTUDOS」─❮📚**")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setDescription(`> :test_tube: [LIVRO DE POÇÕES](https://cdn.discordapp.com/attachments/803309106633900052/809826575750922331/Bebidas_e_Pocoes_Magicas_-_Arsenio_Jigger_1.pdf) :test_tube: \n
                        > :magic_wand: [LIVRO DE FEITIÇOS](https://cdn.discordapp.com/attachments/803309106633900052/809826622864621578/Livro_Padao_de_Feiticos.pdf) :magic_wand: \n
                        > :herb: [LIVRO DE HERBOLOGIA](https://cdn.discordapp.com/attachments/803309106633900052/809826671346712606/Mil_Ervas_e_Fungos_Magicos_de_Filida_Spore_1.pdf) :herb: \n
                        > :cat2: [LIVRO DE TRANSFIGURAÇÃO](https://cdn.discordapp.com/attachments/803309106633900052/809826765634535434/Transfiguracao_I_1.pdf) :cat2: \n
                        > :shield: [LIVRO DE DCAT](https://cdn.discordapp.com/attachments/803309106633900052/809826721116586035/As_Forcas_das_Trevas_Um_Guia_de_Autoprotecao_1.pdf) :shield: \n
                        > :crossed_swords: [LIVRO DE DUELOS](https://cdn.discordapp.com/attachments/803309106633900052/809826818222981130/Livro_de_Duelos.pdf) :crossed_swords: \n
                        > :feet: [LIVRO DE CRIATURAS MÁGICAS](https://cdn.discordapp.com/attachments/803309106633900052/809826876943630356/J.K.-Rowling-Animais-Fantasticos-Onde-Habitam_3.pdf) :feet: \n
         `)
        .setFooter(config.footer2, avatar)
        .setTimestamp()

        .setImage("https://i2.wp.com/media1.tenor.com/images/f635dcd5b41d91abe3f5815cf616fa56/tenor.gif?w=790&ssl=1")

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
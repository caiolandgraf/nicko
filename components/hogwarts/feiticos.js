module.exports = async (client, Discord, message, args, db, config) => {
    let usuario = message.author;
	let avatar = usuario.displayAvatarURL().replace("webp", "png")

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setTitle("**🌐❯─「MÁGIAS E BRUXARIAS」─❮🌐**")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setDescription(`.accio
         .reducto 
         .obliviate 
         .expelliarmus 
         .protego 
         .morsmordre 
         .imperius
         .crucciatos
         .confundos
         .oppugno
         .sectumpempra 
         .aguamenti
         .petrificus-totalus
         .veraverto
         .bombarda
         .alohomora 
         .fogomaldito
         .avada-kedavra
         .wingardium-leviosa
         .lumus-maxima 
         .piertotum-locomotor
         .expecto-patronum
         .arresto-momentum 
         .lumos-solem
         .finite-incantatem
         .ridikullus
         .partis-temporus 
         .episkey
         .incarcerous
         .expulso
         .relashio
         .confringo
         .aparatar 
         .reparus
         .protego-diabolica
         .protego-maxima
         .senpersotia
         .rictusempra 
         .colloportus
         .rennervate
         .estupefaca
         .infiri
         .cabeca-de-bolha
         .engordio 
         .vipera-evanesca
         .lumos.nox
         .arania-exumai
         .ascendio
         .diffindo 
         .revelio
         .fianto-duri
         .immobilus
         .lacarnum-inflamare
         .diminuendo 
         .ventus
         .finestra
         .partis-temporus
         .gemino
         .apare-vestigium
         .aplaudir`)
        .setFooter(config.footer2, avatar)
        .setTimestamp()

        .setImage("https://media1.tenor.com/images/667f8c5df5930fc7897c3fdc36b0d9fa/tenor.gif?itemid=5943288")

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}
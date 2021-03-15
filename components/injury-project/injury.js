module.exports = async (client, Discord, message, args, db, config) => {
    let usuario = message.author;
    let avatar = usuario.displayAvatarURL({ dynamic: true }).replace("webp", "png")


    let init = new Discord.MessageEmbed()
        .setTitle("**🌐❯─「INJURY PROJECT」─❮🌐**")
        .setDescription(`Em um mundo onde o céu e o inferno estão em conflito, humanos se tornam para-demonios e para-anjos e são classificados por suas DEMONCLASS e ANGELCLASS! Eae? Por qual lado irá lutar?`)
        .setImage("https://i.pinimg.com/originals/30/d8/99/30d899232dfe254a407a954880f424e4.gif")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter(config.footer2, avatar)
        .setColor("303136")
        .setTimestamp()

    message.channel.send(init).then(msg => {
        msg.react('👹').then(r => {
            msg.react('😇').then(r => {
                
                })
            })

        const OneFilter = (reaction, user) => reaction.emoji.name === '👹' && user.id === message.author.id;
        const TwoFilter = (reaction, user) => reaction.emoji.name === '😇' && user.id === message.author.id;

        const One = msg.createReactionCollector(OneFilter);
        const Two = msg.createReactionCollector(TwoFilter);

        One.on('collect', r2 => {
            r2.users.remove(message.author.id)
            let embed = new Discord.MessageEmbed()
        .setTitle("**🌐❯─「INJURY PROJECT」─❮🌐**")
        .setDescription(`
Em um mundo onde o céu e o inferno estão em conflito, humanos se tornam para-demonios e para-anjos e são classificados por suas DEMONCLASS e ANGELCLASS! Eae? Por qual lado irá lutar?\n
**DEMONCLASS**:\n
> ➜ **demonclass-a** - para-demonio básico               
> ➜ **demonclass-b** - para-demonio normal    
> ➜ **demonclass-c** - para-demonio bestial            
> ➜ **demonclass-s** - para-demonio superior   
> ➜ **demonclass-ss** - para-demonio de **elite**   
`)
        .setImage("https://64.media.tumblr.com/af17d454fce30cb161eb166e4d2eca46/tumblr_mr2oqcVobv1szoeymo1_500.gif")
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter(config.footer2, avatar)
        .setColor("303136")
        .setTimestamp()
        msg.edit(embed)
        })

        Two.on('collect', r2 => {
                        r2.users.remove(message.author.id)
            let embed = new Discord.MessageEmbed()
        .setTitle("**🌐❯─「INJURY PROJECT」─❮🌐**")
        .setDescription(`
Em um mundo onde o céu e o inferno estão em conflito, humanos se tornam para-demonios e para-anjos e são classificados por suas DEMONCLASS e ANGELCLASS! Eae? Por qual lado irá lutar?\n
**ANGELCLASS**:\n
> ➜ **angelclass-a** - para-anjo básico               
> ➜ **angelclass-b** - para-anjo normal    
> ➜ **angelclass-c** - para-anjo bestial            
> ➜ **angelclass-s** - para-anjo superior   
> ➜ **angelclass-ss** - para-anjo de **elite**  
`)
        .setImage("https://i.pinimg.com/originals/87/4f/28/874f28279f34de3bc97d5cd4903d1e6f.gif")
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter(config.footer2, avatar)
        .setColor("303136")
        .setTimestamp()
        msg.edit(embed)
        })

    })
}
module.exports = async (client, Discord, message, args, db, config) => {
    let usuario = message.author;
    let avatar = usuario.displayAvatarURL({ dynamic: true }).replace("webp", "png")


    let init = new Discord.MessageEmbed()
        .setTitle("**🌐❯─「MÁGIAS E BRUXARIAS」─❮🌐**")
        .setDescription(`
> ➜ **accio**
> ➜ **aguamenti**
> ➜ **alarte-ascendare**
> ➜ **alohomora**
> ➜ **aparatar**
> ➜ **aplaudir**
> ➜ **appare-vestigium**
> ➜ **arania-exumai**
> ➜ **arresto-momentum**
> ➜ **ascendio**
> ➜ **avada-kedavra**
> ➜ **bombarda**
> ➜ **cabeca-de-bolha**
> ➜ **colloportus**
> ➜ **confringo**
> ➜ **confundus**
> ➜ **cruciatus**
> ➜ **danger-balls**
> ➜ **diminuendo**
> ➜ **energy-explosion**
> ➜ **engordio**
> ➜ **episkey**
> ➜ **estupefaca**
> ➜ **expecto-patronum**
> ➜ **expelliarmus**
`)
        .setImage("https://i.pinimg.com/originals/30/d8/99/30d899232dfe254a407a954880f424e4.gif")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setFooter(config.footer2, avatar)
        .setColor("303136")
        .setTimestamp()

    message.channel.send(init).then(msg => {
        msg.react('1️⃣').then(r => {
            msg.react('2️⃣').then(r => {
                msg.react('3️⃣').then(r => {
                    })
                })
            })

        const OneFilter = (reaction, user) => reaction.emoji.name === '1️⃣' && user.id === message.author.id;
        const TwoFilter = (reaction, user) => reaction.emoji.name === '2️⃣' && user.id === message.author.id;
        const ThreeFilter = (reaction, user) => reaction.emoji.name === '3️⃣' && user.id === message.author.id;

        const One = msg.createReactionCollector(OneFilter);
        const Two = msg.createReactionCollector(TwoFilter);
        const Three = msg.createReactionCollector(ThreeFilter);

        One.on('collect', r2 => {
            r2.users.remove(message.author.id)
            msg.edit(init) 
        })

        Two.on('collect', r2 => {
            r2.users.remove(message.author.id)
            let embed = new Discord.MessageEmbed()
        .setTitle("**🌐❯─「MÁGIAS E BRUXARIAS」─❮🌐**")
        .setDescription(`
> ➜ **expulso**             
> ➜ **feiticos**            
> ➜ **finestra**            
> ➜ **finite-incantatem**   
> ➜ **flower-explosion**    
> ➜ **flower-protection**   
> ➜ **fogomaldito**         
> ➜ **gemino**              
> ➜ **ghosting**            
> ➜ **hablawale**           
> ➜ **immobilus**           
> ➜ **imperius**            
> ➜ **incarcerous**         
> ➜ **infiri**              
> ➜ **lumos**               
> ➜ **lumos-maxima**        
> ➜ **lumos-solem**         
> ➜ **morsmordre**          
> ➜ **nightmare-mutation**  
> ➜ **nox**                
> ➜ **obliviate**           
> ➜ **oppugno**             
> ➜ **partis-temporus**     
> ➜ **patronus-maxima**
> ➜ **periculum**
`)
        .setImage("https://i.pinimg.com/originals/53/4a/4f/534a4fcf7f12b6e3b1fcfeb46395f776.gif")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setFooter(config.footer2, avatar)
        .setColor("303136")
        .setTimestamp()
        msg.edit(embed)
        })

        Three.on('collect', r2 => {
            r2.users.remove(message.author.id)
            let embed = new Discord.MessageEmbed()

        .setTitle("**🌐❯─「MÁGIAS E BRUXARIAS」─❮🌐**")
        .setDescription(`
> ➜ **petrificus-totalus**
> ➜ **piertotum-locomotor**
> ➜ **pirraca**
> ➜ **protego-diabolica**
> ➜ **protego**
> ➜ **protego-maxima**
> ➜ **purple-moon**
> ➜ **reducto**
> ➜ **relashio**
> ➜ **rennervate**
> ➜ **reparus**
> ➜ **revelio**
> ➜ **rictusempra**
> ➜ **ridikullus**
> ➜ **sectumsempra**
> ➜ **senpersortia**
> ➜ **taca-das-casas**
> ➜ **take-books**
> ➜ **time-pull**
> ➜ **ventus**
> ➜ **veraverto**
> ➜ **vipera-evanesca**
> ➜ **vulnera-sanetur**
> ➜ **wingardium-leviosa**
`)
        .setImage("https://media1.tenor.com/images/dd597aa560e237f1af7d92c1b1d2a366/tenor.gif")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setFooter(config.footer2, avatar)
        .setTimestamp()
        .setColor("303136")
        msg.edit(embed)
    })

    })
}
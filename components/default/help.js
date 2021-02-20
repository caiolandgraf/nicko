module.exports = async (client, Discord, message, args, db, config) => {
    let usuario = message.author;
    let avatar = usuario.displayAvatarURL({ dynamic: true }).replace("webp", "png")


    let init = new Discord.MessageEmbed()
        .setTitle("Aqui estão as categorias dos meus comandos!")
        .addField("<a:cristal:737788567236903043> `Informações`", "Como para ter minhas infos!")
        .addField("<a:eplepsia:729713794959409264> `Zueira`", "Comandos para brincar com os amigos!")
        .addField("<a:emoji_01:727914757734137876> `Moderação`", "Comandos para moderação!")
        .addField("<a:5bbef0eef1b54f24881f7e4f13445071:720161454489206837> `Extras`", "Comandos extras!")
        .setColor("303136")
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter(config.footer, avatar)
        .setTimestamp()

    message.channel.send(init).then(msg => {
        msg.react('737788567236903043').then(r => {
            msg.react('729713794959409264').then(r => {
                msg.react('727914757734137876').then(r => {
                    msg.react('720161454489206837').then(r => {
                        msg.react('737684720997105685').then(r => {
                        })
                    })
                })
            })
        })

        const InfoFilter = (reaction, user) => reaction.emoji.name === 'cristal' && user.id === message.author.id;
        const DiverFilter = (reaction, user) => reaction.emoji.name === 'eplepsia' && user.id === message.author.id;
        const ModFilter = (reaction, user) => reaction.emoji.name === 'emoji_01' && user.id === message.author.id;
        const ExtraFilter = (reaction, user) => reaction.emoji.name === '5bbef0eef1b54f24881f7e4f13445071' && user.id === message.author.id;
        const BackFilter = (reaction, user) => reaction.emoji.name === 'setabranca' && user.id === message.author.id;
        const LogsFilter = (reaction, user) => console.log(reaction.emoji.name);

        const Infos = msg.createReactionCollector(InfoFilter);
        const Happy = msg.createReactionCollector(DiverFilter);
        const Mod = msg.createReactionCollector(ModFilter);
        const Extra = msg.createReactionCollector(ExtraFilter);
        const Back = msg.createReactionCollector(BackFilter);

        Back.on('collect', r2 => {
            r2.users.remove(message.author.id)
            msg.edit(init)
        })

        Extra.on('collect', r2 => {
            r2.users.remove(message.author.id)
            let embed = new Discord.MessageEmbed()
                .setTitle("<a:5bbef0eef1b54f24881f7e4f13445071:720161454489206837> Extras")
                .addField(`\`${config.prefix}giveaway <temp> <chat> <premio>\``, `Para fazer sorteios`)
                .addField(`\`${config.prefix}tradutor / <ling1> / <ling2> / <msg>\``, `Para traduzir mensagens`)
                .addField(`\`${config.prefix}dm <quem> / msg\``, `Para enviar mensagens na dm`)
                .addField(`\`${config.prefix}slow <tempo>\``, `Para ativar o slow mode no chat`)
                
                .addField(`\`${config.prefix}calc <equação>\``, `Para fazer equações`)
                .addField(`\`${config.prefix}ppt <escolha>\``, `Para jogar pedra, papel, tesoura`)
                .addField(`\`${config.prefix}choice / <escolha 1> / <escolha 2>\``, `Para fazer o bot escolher`)
                

                .setThumbnail(client.user.displayAvatarURL())
                .setFooter(config.footer, avatar)
                .setTimestamp()
                .setColor("8be9fd")
            msg.edit(embed)
        })

        Infos.on('collect', r2 => {
            r2.users.remove(message.author.id)
            let embed = new Discord.MessageEmbed()
                .setTitle("<a:cristal:737788567236903043> Informações")
                .addField(`\`${config.prefix}prefixo\``, `Veja meu prefixo`)
                .addField(`\`${config.prefix}botinfo\``, `Saiba um pouco sobre mim`)
                .addField(`\`${config.prefix}site\``, `Visite meu site para mais informações`)
                .addField(`\`${config.prefix}status\``, "Mostra os status do bot!")
                .addField(`\`${config.prefix}invite\``, "Te da o convite do bot!")
                .addField(`\`${config.prefix}suporte\``, "Te da o convite para entrar no servidor de suporte!")
                .setThumbnail(client.user.displayAvatarURL())
                .setFooter(config.footer, avatar)
                .setTimestamp()
                .setColor("8be9fd")
            msg.edit(embed)
        })

        Mod.on('collect', r2 => {
            r2.users.remove(message.author.id)
            let embed = new Discord.MessageEmbed()
                .setTitle("<a:emoji_01:727914757734137876> Moderação")
                .addField(`\`${config.prefix}aviso / <título> / <texto>\``, `Para fazer anuncios!`)
                .addField(`\`${config.prefix}votacao / <título> / <texto>\``, `Para fazer votações!`)
                .addField(`\`${config.prefix}embed / <título> / <texto> / <cor>\``, `Para fazer mensagem lindona!`)
                .addField(`\`${config.prefix}set-log <chat>\``, `Define para onde as mensagens de punição vão!`)
                .addField(`\`${config.prefix}auto-role <cargo1> <cargo2> <cargo3>\``, `Define os cargos do auto-role (cargos 2 e 3 não são obrigatórios)!`)
                .addField(`\`${config.prefix}add-role <usuário> <cargo>\``, `Adiciona um cargo ao usuários!`)
                .addField(`\`${config.prefix}rolelist\``, `Te da todos os usuários que tem certo cargo!`)
                .addField(`\`${config.prefix}remove-role <usuário> <cargo>\``, `Remove um cargo do usuários!`)
                .addField(`\`${config.prefix}warn <usuário> <motivo>\``, `Avisa o usuário!`)
                .addField(`\`${config.prefix}map / <titulo1> / <desc1> / <chat1> / <titulo2> / <desc2> / <chat2> / <titulo3> / <desc3> / <chat3> / <titulo4> / <desc4> / <chat4> / <titulo5> / <desc5> / <chat5>\``, `Cria um mapa do servidor!`)
                .addField(`\`${config.prefix}avatar <usuário>\``, `Te da o avatar do usuário!`)
                .addField(`\`${config.prefix}ban <usuário>\``, `Para banir um usuário quejá está incomodando!`)
                .addField(`\`${config.prefix}kick <usuário>\``, `Para expulsar um usuário chato!`)
                .addField(`\`${config.prefix}mute <usuário>\``, `Para mutar aquele cara trouxa!`)
                .addField(`\`${config.prefix}unmute <usuário>\``, `Para desmutar aquele cara trouxa!`)
                .addField(`\`${config.prefix}perfil\``, `Pegar as informações do usuário!`)
                .addField(`\`${config.prefix}serverinfo\``, `Pegar as informações do server!`)
                .addField(`\`${config.prefix}mute-role <cargo>\``, `Setar o cargo de mute (recomendação: use o da Loritta)!`)
                .addField(`\`${config.prefix}clear <quantidade de mensagens>\``, `Para apagar as mensagens de algum chat (de 2 a 100 por vez)!`)

                .setThumbnail(client.user.displayAvatarURL())
                .setFooter(config.footer, avatar)
                .setTimestamp()
                .setColor("50fa7b")
            msg.edit(embed)
        })

        Happy.on('collect', r2 => {
            r2.users.remove(message.author.id)
            let embed = new Discord.MessageEmbed()
                .setTitle("<a:eplepsia:729713794959409264> Zueira")
                .addField(`\`${config.prefix}pat <usuário>\``, `Para fazer um cafuné gostozinho!`)
                .addField(`\`${config.prefix}correio <para quem> / <texto>\``, `Envia uma carta pelo correio para o usuário!`)
                .addField(`\`${config.prefix}matar <usuário>\``, `MATAAAAA!`)
                .addField(`\`${config.prefix}zombar <usuário>\``, "Há! GAYYYYYYYYYY!")
                .addField(`\`${config.prefix}bom-dia <usuário>\``, "Bom dia!")
                .addField(`\`${config.prefix}boa-tarde <usuário>\``, "TARDE!")
                .addField(`\`${config.prefix}boa-noite <usuário>\``, "noite noite!")
                .addField(`\`${config.prefix}seboso <usuário>\``, "NHENHENHENHE SEBOSO!")
                .addField(`\`${config.prefix}ship <usuário1> <usuário2>\``, "Será que formam um belo casal?")
                .addField(`\`${config.prefix}gado <usuário>\``, "Será que é gado?")
                .addField(`\`${config.prefix}tapa <usuário>\``, "TAPAAAA")
                .addField(`\`${config.prefix}kiss <usuário>\``, "Para dar aquele beijão no/na crush!")
                .addField(`\`${config.prefix}hug <usuário>\``, "Para dar aquele abraço forte no/na crush!")
                .addField(`\`${config.prefix}fuzilar <usuário>\``, "Para matar aquele fi da mãe!")
                .addField(`\`${config.prefix}socar <usuário>\``, "Para dar um socão!")
                .addField(`\`${config.prefix}voadora <usuário>\``, "Para dar uma voadora linda!")
                .addField(`\`${config.prefix}run <usuário>\``, "Para dar fuga!")
                .addField(`\`${config.prefix}sex <usuário>\``, "Para fazer um fuc fuc!")
                .addField(`\`${config.prefix}dance <usuário>\``, "Para dançar bonitu!")
                .addField(`\`${config.prefix}mesmo <usuário>\``, "É mesmo é?!")
                .addField(`\`${config.prefix}achou <usuário>\``, "ACHOU ERRADO OTÁRIO!")
                .addField(`\`${config.prefix}alan <usuário>\``, "EINHA EINHA!")

                .addField(`\`${config.prefix}dino\``, "Chrome Dinosaur!")
                .addField(`\`${config.prefix}mario\``, "Its a my! Mario!")
                .addField(`\`${config.prefix}pac\``, "BIP BIP BIP!")
                .addField(`\`${config.prefix}sonic\``, "zuuumm!")
                .setThumbnail(client.user.displayAvatarURL())
                .setFooter(config.footer, avatar)
                .setTimestamp()
                .setColor("f1fa8c")
            msg.edit(embed)
        })
    })

    if (args[1] == "esp") {
        let embed = new Discord.MessageEmbed()
            .setColor("44475a")
            .setTitle("🔮 Meus comandos! - Especial Dia Dos Namorados!")
            .setDescription(`${usuario} aqui estão meus comandos! OBS: os que tem "*" a menção é obrigatória!`)
            .setThumbnail(client.user.displayAvatarURL())
            .setFooter(config.footer, avatar)
            .setTimestamp()
            .addField(`***${config.prefix}namoro <usuario>**`, "Pedido de namoro!")
            .addField(`***${config.prefix}presente <usuario>**`, "Da um incrivel presente!")
            .addField(`***${config.prefix}todo-amor-do-mundo <usuario>**`, "Da todo o amor do mundo!")
            .addField(`***${config.prefix}e-voce <usuario>**`, "Muitos elogios, de uma só vez!")
            .addField(`***${config.prefix}abraco-maravilha <usuario>**`, "Da o abraço com todo amor do mundo!")

            .setImage("https://i.pinimg.com/originals/0e/8f/93/0e8f9366cb396a13485588c267750ddd.gif")

        const m = await message.channel.send("Carregando...")
        m.edit(``, embed)
        return;
    }
}
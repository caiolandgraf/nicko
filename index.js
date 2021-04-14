const {
    Discord,
    db,
    config,
    moment,
    mod,
    hogwarts,
    injury,
    zueira,
    _default,
} = require("./scripts/bootstrap");
var request = require("request");

const keepAlive = require("./scripts/server");
keepAlive();

const client = new Discord.Client();
const formatData = require("./scripts/boot/formatData");
moment.locale("pt-BR");
client.moment = moment;

//? init
client.on("ready", () => {
    console.log(
        `Bot foi iniciado, com ${client.users.cache.size} usuários, e ${client.channels.cache.size} canais, em ${client.guilds.cache.size} servidores!`
    );

    let table = [
        { name: "Comandos atualizados", type: "STREAMING" },
        { name: `"${config.prefix}" é meu prefixo`, type: "STREAMING" },
        { name: "Algum erro? Reporte ao meu suporte!", type: "STREAMING" },
        { name: `Mais de 290 comandos disponíveis`, type: "PLAYING" },
        {
            name: `Estou em ${client.guilds.cache.size} servers`,
            type: "STREAMING",
        },
        { name: `Estou sendo desenvolvida ainda...`, type: "STREAMING" },
        {
            name: `Visite meu site: https://botsinc.glitch.me/`,
            type: "STREAMING",
        },
        { name: `😭 + 💵 = 😃 🍣`, type: "STREAMING" },
        { name: `Vote em mim no TOP.GG! pfvzinho`, type: "STREAMING" },
        {
            name: `Continue sendo comida, quero dizer, incrível!`,
            type: "STREAMING",
        },
        {
            name: `👹 Sabia que eu adoro DARLING IN THE FRANXX?!`,
            type: "STREAMING",
        },
        {
            name: `👹 ,injury - BEM VINDOS AO INJURY PROJECT! 😇`,
            type: "STREAMING",
        },
        {
            name: `Utilize ,snapshot para ver minha ultima atualização!`,
            type: "STREAMING",
        },
        {
            name: `Da ,upvote ai! Rapidão >.<`,
            type: "STREAMING",
        },
        { name: `Sabia que você pode falar comigo? Eu tenho respostas, pra quase, tudo!`, type: "STREAMING" },
        { name: `ESTOU VIVA! HEHEHEHEH`, type: "STREAMING" },
    ];

    function setStatus() {
        let altstatus = table[Math.floor(Math.random() * table.length)];

        client.user.setActivity(altstatus.name, {
            type: altstatus.type,
            name: config.name,
            url: "https://www.twitch.tv/kyowebp",
        });
    }
    setStatus();
    setInterval(() => setStatus(), 9000);
});

//? enter in guilds
client.on("guildCreate", (guild) => {
    db.set(guild.id, [
        {
            channelId: null,
            channelByeId: null,

            muteRoleId: null,
            logChat: null,

            autoRole1: null,
            autoRole2: null,
            autoRole3: null,
        },
    ]).write();

    try {
        let canal = client.channels.cache.get("719624127480332288");
        let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(":purple_circle: O bot entrou em um novo server!")
            .setDescription(
                `:loudspeaker: O ${config.name} entrou no: ${guild.name}! Ele tem: ${guild.memberCount} membros! :loudspeaker:`
            )
            .setThumbnail(client.user.displayAvatarURL())
            .setFooter(config.footer)
            .setTimestamp();

        canal.send(embed);
    } catch (e) {
        //console.log(e)
    }

    console.log(
        `O bot entrou nos servidores: ${guild.name} (id: ${guild.id}). População ${guild.memberCount} membros!`
    );
});

//? exit in guild
client.on("guildDelete", (guild) => {
    console.log(
        `O bot foi removido do servidor: ${guild.name} (id: ${guild.id}). População ${guild.memberCount} membros!`
    );

    try {
        let canal = client.channels.cache.get("719624127480332288");
        let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(":red_circle: O bot saiu de um server!")
            .setDescription(
                `:loudspeaker: O ${config.name} saiu no: ${guild.name}! Ele tem: ${guild.memberCount} membros! :loudspeaker:`
            )
            .setThumbnail(client.user.displayAvatarURL())
            .setFooter(config.footer)
            .setTimestamp();

        canal.send(embed);
    } catch (e) {
        //console.log(e)
    }
});

//? welcome message
client.on("guildMemberAdd", async (member) => {
    try {
        let autoRole1 = db.get(member.guild.id).find().value().autoRole1;
        let autoRole2 = db.get(member.guild.id).find().value().autoRole2;
        let autoRole3 = db.get(member.guild.id).find().value().autoRole3;

        if (autoRole1 != null) {
            await member.roles.add(autoRole1);
        }
        if (autoRole2 != null) {
            await member.roles.add(autoRole2);
        }
        if (autoRole3 != null) {
            await member.roles.add(autoRole3);
        }
    } catch (e) { }
});

//? goodbye message
client.on("guildMemberRemove", async (member) => { });

client.on("message", async (message) => {

    //if (message.author.id == "711394277766463499") {
    //    message.author.lastMessage.delete();
    //}

    const args = message.content.split(" ");
    const command = args[0].toLocaleLowerCase();

    let msgTLC = message.content.toLowerCase();

    //console.log(args[1], command)

    //if (msgTLC.match(/nicko/) && !message.author.bot) {
    //    await message.channel.send(`NICKO NII!`);
    //}

    if (msgTLC.match(/nicko/) && msgTLC.match(/oi/)) {
        await message.channel.send(`OIII!`);
    } else if (msgTLC.match(/nicko/) && msgTLC.match(/to bem/) || msgTLC.match(/nicko/) && msgTLC.match(/i'm fine/)) {
        await message.channel.send(`Que bom <@${message.author.id}>! EU TO MUITOOO BEM!`);
    } else if (msgTLC.match(/nicko/) && msgTLC.match(/ser minha amiga/)) {
        await message.channel.send(`CLARO! Você parece ser uma pessoa muito legal!`);
    } else if (msgTLC.match(/nicko/) && msgTLC.match(/né/)) {
        await message.channel.send(`Sim sim`);
    } else if (msgTLC == "hi nicko" || msgTLC == "hiiy nicko" || msgTLC == "hiy nicko!") {
        await message.channel.send(`HELLO! >.<`);
    } else if (msgTLC == "ily nicko" || msgTLC == "te amo nicko") {
        await message.channel.send(`ILVTTTT <3`);
    } else if (msgTLC == "te amo filha" || msgTLC == "te amo filinha") {
        if(message.author.id == "615685442334883891" || message.author.id == "659074169169772544"){
            await message.channel.send(`também te amo pai/mãe :)`);
        }
    } else if (msgTLC == "a estela é incrivel" || msgTLC == "ela é incrivel man") {
        await message.channel.send(`EU CONCORDO MUITO BEM!`);
    } else if (msgTLC == "zero two") {
        await message.channel.send(`AAAAA ZERO TWOOOO, TE AMOOOOO <3`);
    } else if (msgTLC == "medo" || msgTLC == "sad") {
        await message.channel.send(`Não precisa ficar assim, eu to aki com vc! :3`);
    } else if (msgTLC == "nicko é só um bot" || msgTLC == "vc é só um bot nicko") {
        await message.channel.send(`TEU CÚ! Eu tenho vida... ou quase isso.. mas meu pai e minha mãe me amam! rum >.<`);
    } else if (msgTLC == "ta fazendo oq nicko?" || msgTLC == "oq fazes nicko?") {
        await message.channel.send(`To aprendendo novos comandos! E conversando com você :)`);
    } else if (msgTLC == "hmm tendi" || msgTLC == "hm tendi" || msgTLC == "hm entendi" || msgTLC == "entendi") {
        await message.channel.send(`Se precisar eu to sempre aki!`);
    } else if (msgTLC == "igualzinha a mãe" || msgTLC == "ela é igual a mãe" || msgTLC == "igual a estela" || msgTLC == "igualzinha a estela" || msgTLC == "vc é igualzinha sua mãe nicko") {
        await message.channel.send(`SIM! Minha mãe é incrivel rum`);
    } else if (msgTLC == "menina cala a boca" || msgTLC == "cala a boca nicko" || msgTLC == "nicko cala a boca" || msgTLC == "shiu nicko") {
        await message.channel.send(`EU NÃO QUERO! LELO LELO LELO!`);
    } else if (msgTLC == "hora da aula!" || msgTLC == "hora da aula" || msgTLC == "alunos" || msgTLC == "aula") {
        await message.channel.send(`PRESENTE PROFESSOR(A)!!!`);
    } else if (msgTLC == "qual é sua casa em hogwarts?" || msgTLC == "qual é tua casa em hogwarts?" || msgTLC == "qual é a sua casa em hogwarts nicko?" || msgTLC == "nicko qual é tua casa em hogwarts?") {
        await message.channel.send(`Eu sou **lufana**! <:casa4:789977478755909684>`);
    } else if (msgTLC == "oi nicko como vc ta?" || msgTLC == "nickooo como vc ta?" || msgTLC == "nickoo como vc ta?" || msgTLC == "nicko como vc ta?") {
        await message.channel.send(`EU TO MUIIIITOOO BEM!!`);
    } else if (msgTLC == "filha" && message.author.id == "615685442334883891") {
        await message.channel.send(`OIII!`);
    } else if (msgTLC == "como vc ta nicko?" || msgTLC == "ta bem nicko?" || msgTLC == "tudo bem nicko?") {
        await message.channel.send(`EU TO MUITOOO BEM!`);
    } else if (msgTLC == "vc ta viva nicko?") {
        await message.channel.send(`to sim! pq?`);
    } else if (msgTLC == "vc é incrivel nicko" || msgTLC == "vc é incrivel nicko!") {
        await message.channel.send(`Você tambem é **comida**, digo, **INCRIVEL**!`);
    } else if (msgTLC == "recepção nicko") {
        await message.channel.send(`Seja muito bem vindx novo membro! É uma honra ter vc cmg :)`);
    } else if (msgTLC == "ok nicko?") {
        await message.channel.send(`OK! :)`);
    } else if (msgTLC == "boa noite nicko" || msgTLC == "good nigth nicko") {
        await message.channel.send(`bua noiti >.<`);
    } else if (msgTLC == "dorme com deus nicko" || msgTLC == "dorme com bem nicko") {
        await message.channel.send(`Dorme com Deus vc tbm! LVYYY <3`); 
    } else if (msgTLC == "bom dia nicko" || msgTLC == "good morning nicko") {
        await message.channel.send(`BOM DIA! O SOL JÁ NASCEU LÁ NA FAZENDINHA! :3`);
    } else if (msgTLC == "boa tarde nicko" || msgTLC == "good afternoom nicko") {
        await message.channel.send(`Boa tardi! Como vc ta?`);
    } else if (msgTLC == "vai começar nicko!" || msgTLC == "vai começar nicko" || msgTLC == "will start nicko") {
        await message.channel.send(`AAAAAA TO ANSIOSA!! :)`);
    } else if (msgTLC == "nicko, namora comigo?" || msgTLC == "namora cmg nicko?" || msgTLC == "date me nicko?") {
        await message.channel.send(`A nem... Eu sou só uma IA, você merece coisa melhor! <3`); 
    } else if (msgTLC == "gosta de carne nicko?" || msgTLC == "nicko vc gosta de carne?" || msgTLC == "vc come carne nicko?" || msgTLC == "do you eat nicko meat?") {
        await message.channel.send(`Hmmm prefiro mais uns DB ou umas memórias RAM hmmm dlç :D`);
    } else if (msgTLC.match(/pera/)) {
        await message.channel.send(`BLZ akkaka :)`);
    } else if (msgTLC == "status nicko" || msgTLC == "nicko status" || msgTLC == "me de seus status nicko" || msgTLC == "give me status nicko"  || msgTLC == "give me your status nicko") {
        mod[",status"](client, Discord, message, args, db, config);
    } else if (msgTLC == "limpa o chat nicko" || msgTLC == "nicko limpa o chat" || msgTLC == "clear nicko") {
        await message.channel.bulkDelete(10);
        setTimeout( async () => {
            await message.channel.send(`Limpei 10 mensagens ok?!`);
        }, 1000)
    } else if (msgTLC == "help nicko" || msgTLC == "nicko help" || msgTLC == "ajuda nicko") {
        _default[",help"](client, Discord, message, args, db, config);
    } else if (msgTLC == "feitiços nicko" || msgTLC == "nicko feitiços" || msgTLC == "feiticos nicko") {
        hogwarts[",feiticos"](client, Discord, message, args, db, config);
    } else if (command == "nicko") {
        if(hogwarts[","+args[1]]){
            hogwarts[","+args[1]](client, Discord, message, args, db, config);
            return;
        } else if (injury[","+args[1]]) {
            injury[","+args[1]](client, Discord, message, args, db, config);
            return;
        } else if(mod[","+args[1]]){
            let nArgs = [];
            nArgs[1] = args[2];
            if (args[1] == "clear") {
                mod[",clear"](client, Discord, message, nArgs, db, config);
            } else {
                mod[","+args[1]](client, Discord, message, args, db, config);
            }
            
            return;
        } else if(zueira[","+args[1]]){
            zueira[","+args[1]](client, Discord, message, args, db, config);
            return;
        } else if(_default[","+args[1]]){
            _default[","+args[1]](client, Discord, message, args, db, config);
            return;
        }
    } 
 
    if (message.author.bot) return;
    if (message.mentions.members.first() == "812777c088695140362") {
        message.channel.send("<a:7dancinha3PJT:727915468584910912> | Olá <@!" + message.author + ">! Meu prefixo é `,`, para ver meus comandos use `,help`");
    }
    if (!message.content.toLowerCase().startsWith(config.prefix)) return;
    if (message.content.toLowerCase().startsWith("..")) return;
    if (message.content.toLowerCase().startsWith(",_,")) return;
		message.author.lastMessage.delete();

    setTimeout(async () => {

        if (mod[command]) {
            mod[command](client, Discord, message, args, db, config);
            return;
        } else if (hogwarts[command]) {
            hogwarts[command](client, Discord, message, args, db, config);
            return;
        } else if (injury[command]) {
            injury[command](client, Discord, message, args, db, config);
            return;
        } else if (zueira[command]) {
            zueira[command](client, Discord, message, args, db, config);
            return;
        } else if (_default[command]) {
            _default[command](client, Discord, message, args, db, config);
            return;
        } else {
            let avatar = message.author
                .displayAvatarURL({ dynamic: true })
                .replace("webp", "png");

            let embed = new Discord.MessageEmbed()
                .setColor("303136")
                .setTitle("`😭` Ooops " + message.author.username + "!")
                .setDescription(
                    "<a:setabranca:737399939289841665> `Parece que eu ainda não tenho esse comando :/` \n <a:setabranca:737399939289841665> `Você usou: " + command + "`"
                )
                .setFooter(config.footer, avatar)
                .setTimestamp();

            const m = await message.channel.send("Carregando...");
            m.edit(message.author, embed);
        }
    }, 1);
});

client.login("ODEyNzc3MDg4Njk1MTQwMzYy.YDFrpg.JgrB_-ZPaTb4WDbPERCuLM-l7sE");

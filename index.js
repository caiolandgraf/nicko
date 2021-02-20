const {
    Discord,
    db,
    config,
    moment,
    mod,
    hogwarts,
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
        { name: "Alguem erro? Reporte ao meu suporte!", type: "STREAMING" },
        { name: `Mais de 290 comandos disponíveis`, type: "PLAYING" },
        {
            name: `Estou em ${client.guilds.cache.size} servers`,
            type: "STREAMING",
        },
        { name: `Estou sendo desenvolvido ainda...`, type: "STREAMING" },
        {
            name: `Visite meu site: https://denin.glitch.me/`,
            type: "STREAMING",
        },
        { name: `😭 + 💵 = 😃 🥩`, type: "STREAMING" },
        { name: `Vote em mim no TOP.GG! pfvzinho`, type: "STREAMING" },
        {
            name: `Continue sendo comida, quero dizer, incrível!`,
            type: "STREAMING",
        },
        {
            name: `🦸 Sabia que eu ADORO Boku No Hero Academia?!`,
            type: "STREAMING",
        },
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

    //if (message.author.id == "728669961857400863") {
    //    message.author.lastMessage.delete();
    //}

    if (message.author.bot) return;
    if (message.mentions.members.first() == "738463362807234670") {
        message.channel.send("<a:musicaVAPO:720161137198497945> | Olá <@!" + message.author + ">! Meu prefixo é `.`, para ver meus comandos use `.help`");
    }
    if (!message.content.toLowerCase().startsWith(config.prefix)) return;
    if (message.content.toLowerCase().startsWith("..")) return;
    message.author.lastMessage.delete();

    const args = message.content.split(" ");
    const command = args[0].toLocaleLowerCase();


    setTimeout(async () => {

        if (mod[command]) {
            mod[command](client, Discord, message, args, db, config);
            return;
        } else if (hogwarts[command]) {
            hogwarts[command](client, Discord, message, args, db, config);
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

client.login("NzM4NDYzMzYyODA3MjM0Njcw.XyMRmQ.7DKN9Hv4RjsZ0HMca3vOZcU9l1A");

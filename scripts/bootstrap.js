const Discord = require("discord.js");
const express = require('express');
const moment = require("moment");
const ytdl = require('ytdl-core');
const queue = new Map();
const low = require('lowdb') //banco de dados
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('scripts/boot/db.json')
const db = low(adapter)
const config = require("../scripts/boot/config.json");

const mod = require("../scripts/commands/mod")(config.prefix, "mod")
const hogwarts = require("../scripts/commands/hogwarts")(config.prefix, "hogwarts")
const injury = require("../scripts/commands/injury")(config.prefix, "injury-project")
const zueira = require("../scripts/commands/zueira")(config.prefix, "zueira")
const _default = require("../scripts/commands/default")(config.prefix, "default")

exports.Discord = Discord
exports.express = express
exports.ytdl = ytdl
exports.queue = queue
exports.db = db
exports.config = config

exports.mod = mod
exports.hogwarts = hogwarts
exports.injury = injury
exports.zueira = zueira
exports._default = _default

exports.moment = moment

//? play function
function play(guild, song) {
    const serverQueue = queue.get(guild.id);
    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection
        .play(ytdl(song.url))
        .on("finish", () => {
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on("error", error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

    let embed = new Discord.MessageEmbed()
        .setColor("f1fa8c")
        .setTitle("🎧 DJ AirBot! 🎧")
        .setDescription(`Começando a tocar: **${song.title}**`)
        .setThumbnail("https://www.suporteinformatika.com.br/meabot/images/profile-new.jpg")
        .setFooter(config.footer)
        .setTimestamp()
        .setImage("https://media.giphy.com/media/xUNd9QIxA93zlSaJ6E/giphy.gif")

    return serverQueue.textChannel.send(embed)
}

//? stop function
exports.stop = function (message, serverQueue) {
    if (!message.member.voice.channel) {
        let embed = new Discord.MessageEmbed()
            .setColor("f1fa8c")
            .setTitle("🎧 DJ AirBot! 🎧")
            .setDescription(`${message.author}, você precisa estar em um canal de voz para parar a música!`)
            .setThumbnail("https://www.suporteinformatika.com.br/meabot/images/profile-new.jpg")
            .setFooter(config.footer)
            .setTimestamp()
            .setImage("https://media.giphy.com/media/xUNd9QIxA93zlSaJ6E/giphy.gif")

        const m = message.channel.send("Carregando...")
        m.edit(``, embed)
        return;
    }
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();

    let embed = new Discord.MessageEmbed()
        .setColor("f1fa8c")
        .setTitle("🎧 DJ AirBot! 🎧")
        .setDescription(`${message.author}, música pausada!`)
        .setThumbnail("https://www.suporteinformatika.com.br/meabot/images/profile-new.jpg")
        .setFooter(config.footer)
        .setTimestamp()
        .setImage("https://media.giphy.com/media/xUNd9QIxA93zlSaJ6E/giphy.gif")

    const m = message.channel.send(embed)
    return;
}

//? skip function
exports.skip = function (message, serverQueue) {
    if (!message.member.voice.channel) {
        let embed = new Discord.MessageEmbed()
            .setColor("f1fa8c")
            .setTitle("🎧 DJ AirBot! 🎧")
            .setDescription(`${message.author}, você precisa estar em um canal de voz para pular a música!`)
            .setThumbnail("https://www.suporteinformatika.com.br/meabot/images/profile-new.jpg")
            .setFooter(config.footer)
            .setTimestamp()
            .setImage("https://media.giphy.com/media/xUNd9QIxA93zlSaJ6E/giphy.gif")

        const m = message.channel.send("Carregando...")
        m.edit(``, embed)
        return;
    }
    if (!serverQueue) {
        let embed = new Discord.MessageEmbed()
            .setColor("f1fa8c")
            .setTitle("🎧 DJ AirBot! 🎧")
            .setDescription(`${message.author}, não há música que eu possa pular!`)
            .setThumbnail("https://www.suporteinformatika.com.br/meabot/images/profile-new.jpg")
            .setFooter(config.footer)
            .setTimestamp()
            .setImage("https://media.giphy.com/media/xUNd9QIxA93zlSaJ6E/giphy.gif")

        const m = message.channel.send("Carregando...")
        m.edit(``, embed)
        return;
    }
    serverQueue.connection.dispatcher.end();
}

//? execute function
exports.execute = async function(message, serverQueue, looping) {
    const args = message.content.split(" ");

    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
        let embed = new Discord.MessageEmbed()
            .setColor("f1fa8c")
            .setTitle("🎧 DJ AirBot! 🎧")
            .setDescription(`${message.author} Você precisa estar em um canal de voz para tocar música!`)
            .setThumbnail("https://www.suporteinformatika.com.br/meabot/images/profile-new.jpg")
            .setFooter(config.footer)
            .setTimestamp()
            .setImage("https://media.giphy.com/media/xUNd9QIxA93zlSaJ6E/giphy.gif")

        const m = await message.channel.send("Carregando...")
        m.edit(``, embed)
        return;
    }
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
        let embed = new Discord.MessageEmbed()
            .setColor("f1fa8c")
            .setTitle("🎧 DJ AirBot! 🎧")
            .setDescription(`${message.author} Eu preciso das permissões para participar e falar no seu canal de voz!`)
            .setThumbnail("https://www.suporteinformatika.com.br/meabot/images/profile-new.jpg")
            .setFooter(config.footer)
            .setTimestamp()
            .setImage("https://media.giphy.com/media/xUNd9QIxA93zlSaJ6E/giphy.gif")

        const m = await message.channel.send("Carregando...")
        m.edit(``, embed)
        return;
    }

    const songInfo = await ytdl.getInfo(args[1]);
    const song = {
        title: songInfo.title,
        url: songInfo.video_url
    };

    if (!serverQueue) {
        const queueContruct = {
            textChannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
        };

        queue.set(message.guild.id, queueContruct);

        queueContruct.songs.push(song);

        try {
            var connection = await voiceChannel.join();
            queueContruct.connection = connection;
            if (looping == true) {
                loop(message.guild, queueContruct.songs[0]);
            } else {
                play(message.guild, queueContruct.songs[0]);
            }
        } catch (err) {
            console.log(err);
            queue.delete(message.guild.id);
            return message.channel.send(err);
        }
    } else {
        serverQueue.songs.push(song);
        let embed = new Discord.MessageEmbed()
            .setColor("f1fa8c")
            .setTitle("🎧 DJ AirBot! 🎧")
            .setDescription(`${message.author}, ${song.title} foi adicionado à fila!`)
            .setThumbnail("https://www.suporteinformatika.com.br/meabot/images/profile-new.jpg")
            .setFooter(config.footer)
            .setTimestamp()
            .setImage("https://media.giphy.com/media/xUNd9QIxA93zlSaJ6E/giphy.gif")

        const m = await message.channel.send("Carregando...")
        m.edit(``, embed)
        return;
    }
}

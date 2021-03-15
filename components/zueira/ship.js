module.exports = async (client, Discord, message, args, db, config) => {
    var usuario1 = args[1];
    if (!usuario1) usuario1 = message.author;
    var usuario2 = args[2];
    if (!usuario2) return message.reply("Você não mencionou ninguém!");
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")

    let value = Math.floor(Math.random() * 100);
    let gif = null;
    let text = null;
    let percentDecoration = null;

    usuario1 = usuario1.replace("<", "")
    usuario1 = usuario1.replace(">", "")
    usuario1 = usuario1.replace("@", "");

    usuario2 = usuario2.replace("<", "")
    usuario2 = usuario2.replace(">", "")
    usuario2 = usuario2.replace("@", "")

    if (usuario1 == 615685442334883891 && usuario2 == 627846465653571605) {
        value = 100;
        console.log(usuario1.id, usuario2.id)
    }

    if (usuario1 == 627846465653571605 && usuario2 == 615685442334883891) {
        value = 100;
    }

    if (usuario1 == 615685442334883891 && usuario2 == 621994954285121546) {
        value = 0;
    }

    if (usuario1 == 621994954285121546 && usuario2 == 615685442334883891) {
        value = 0;
    }

    if (value >= 0) {
        gif = "https://i.pinimg.com/originals/fb/e0/e9/fbe0e99d0a6d67dbd9cdd9e2bdb2f940.gif";
        text = "É não rolou nada...";
        percentDecoration = "█♥♥♥♥♥♥♥♥♥";
    }

    if (value >= 10) {
        gif = "https://media1.tenor.com/images/6f7296ca218bb7803618e4e4cf877c07/tenor.gif?itemid=9180429";
        text = "Ficaram na friendzone...";
        percentDecoration = "██♥♥♥♥♥♥♥♥";
    }

    if (value >= 20) {
        gif = "https://24.media.tumblr.com/88972cf64a10f1b2887d3583e1ab4a6a/tumblr_miup7ndsCV1s19pdao1_500.gif";
        text = "Até teve um clima mas não";
        percentDecoration = "███♥♥♥♥♥♥♥";
    }

    if (value >= 30) {
        gif = "https://akns-images.eonline.com/eol_images/Entire_Site/201376/rs_500x284-130806082652-tumblr_m9y2z11O7Q1rc2mjuo1_500.gif?fit=inside|900:auto&output-quality=90";
        text = "Chegaram a pensar..";
        percentDecoration = "████♥♥♥♥♥♥";
    }

    if (value >= 40) {
        gif = "https://media1.tenor.com/images/4869c336eb8589454f7dc3582d623eb5/tenor.gif?itemid=6247482";
        text = "Estou em dúvida mas acho que sim!";
        percentDecoration = "█████♥♥♥♥♥";
    }

    if (value >= 50) {
        gif = "https://thumbs.gfycat.com/GrimAgonizingLamb-small.gif";
        text = "Eles ficaram, mas logo terminaram!";
        percentDecoration = "██████♥♥♥♥";
    }

    if (value >= 60) {
        gif = "https://media.tenor.com/images/cb4b04b4a9508cb0c75e2355433cdbe0/tenor.gif";
        text = "Eles estão ficandooo!";
        percentDecoration = "███████♥♥♥";
    }

    if (value >= 70) {
        gif = "https://tecnoblog.net/wp-content/uploads/2015/05/gif-feliz.gif";
        text = "EU SHIPOOO!";
        percentDecoration = "████████♥♥";
    }

    if (value >= 80) {
        gif = "https://3.bp.blogspot.com/-G6BYClUxtcU/UVxJi8esRbI/AAAAAAAAAP4/-qZnBt_XC1w/s1600/FD20130326_194818%5B1%5D.gif";
        text = "ELES ESTÃO NAMORANDOOOO!";
        percentDecoration = "█████████♥";
    }

    if (value >= 90) {
        gif = "https://media1.tenor.com/images/f31bfc3565e4e5b3c1478b5311e8d7ef/tenor.gif?itemid=14720090";
        text = "Tem que se casar!";
        percentDecoration = "██████████";
    }

    let embed = new Discord.MessageEmbed()
        .setFooter(config.footer, avatar)
        .setTimestamp()
        .setTitle(text)
        .setDescription(`<@${usuario1}> + <@${usuario2}> = ${percentDecoration} ${value}%`)
        .setImage(gif)
        .setColor("303136")

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}

// █
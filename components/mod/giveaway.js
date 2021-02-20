const { MessageEmbed } = require("discord.js");
const ms = require("ms");
module.exports = async (client, Discord, message, args, db, config) => {

    if (!args[1]) return message.channel.send(`Liste um tempo válido!`);
    if (
      !args[1].endsWith("d") &&
      !args[1].endsWith("h") &&
      !args[1].endsWith("m") &&
      !args[1].endsWith("s")
    ) return message.channel.send(
        "`Liste um tempo válido!`"
      );

    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        "`Não encontrei o canal!`"
      );

    let prize = args.slice(3).join(" ");
    if (!prize) return message.channel.send(`Prêmio não listado!`);


    message.channel.send(`*Giveaway criado!*`);
    let Embed = new MessageEmbed()
      .setTitle(`<a:setabranca:737684720997105685> **__${prize}__**`)
      .setDescription(
        ':sparkles:・Giveaway participe com <a:HyperTada:738551810171863081>'
      )
      .setTimestamp(Date.now() + ms(args[1]))
      .setColor(`303136`);
    let m = await channel.send(Embed);
    m.react("738551810171863081");

    setTimeout(() => {
        
      if (m.reactions.cache.get("738551810171863081").count <= 1) {
        message.channel.send(`Participantes: ${m.reactions.cache.get("738551810171863081").count - 1}`);
        return message.channel.send(
          "`Sem pessoas suficientes`"
        );
      }

      let winner = m.reactions.cache
        .get("738551810171863081")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(
        `<a:HyperTada:738551810171863081>・O Ganhador do Giveaway: ${winner}`
      );
    }, ms(args[1]));
}

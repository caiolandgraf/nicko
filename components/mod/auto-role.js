module.exports = async (client, Discord, message, args, db, config) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send(`Ooops! ${message.author} parece que você não tem permissão :/`);
    }

    let id2 = null;
    let id3 = null;

    let id = args[1].replace("<", "")
    id = id.replace(">", "")
    id = id.replace("@", "")
    id = id.replace("&", "")

    if (args[2]) {
        id2 = args[2].replace("<", "")
        id2 = id2.replace(">", "")
        id2 = id2.replace("@", "")
        id2 = id2.replace("&", "")
    }

    if (args[3]) {
        id3 = args[3].replace("<", "")
        id3 = id3.replace(">", "")
        id3 = id3.replace("@", "")
        id3 = id3.replace("&", "")
    }

    db.get(message.guild.id)
        .find().assign({
        autoRole1: id,
        autoRole2: id2,
        autoRole3: id3
    }).write()

    const m = await message.channel.send("Setando...")
    m.edit(`Opa ${message.author}! Você setou com sucesso o novo auto cargo!`)
}
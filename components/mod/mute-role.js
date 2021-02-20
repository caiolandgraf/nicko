module.exports = async (client, Discord, message, args, db, config) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send(`Ooops! ${message.author} parece que você não tem permissão :/`);
    }
    let id = args[1].replace("<", "")
    id = id.replace(">", "")
    id = id.replace("@", "")
    id = id.replace("&", "")

    db.get(message.guild.id)
        .find().assign({
        muteRoleId: id
    }).write()

    const m = await message.channel.send("Setando...")
    m.edit(`Opa ${message.author}! Você setou com sucesso o novo cargo de mute!`)
}
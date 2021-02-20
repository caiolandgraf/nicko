module.exports = async (client, Discord, message, args, db, config) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send(`Ooops! ${message.author} parece que você não tem permissão :/`);
    }
    let channel = args[1].replace("<", "")
    channel = channel.replace(">", "")
    channel = channel.replace("#", "")

    db.get(message.guild.id)
        .find().assign({
        channelId: channel
    }).write()

    const m = await message.channel.send("Setando...")
    m.edit(`Opa ${message.author}! Você setou com sucesso o novo canal de boas vindas!`)
}
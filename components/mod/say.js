module.exports = async (client, Discord, message, args, db, config) => {

    message.author.lastMessage.delete();

    const command = args[0]
    const arg = message.content.split(`${command} `);
    const m = await message.channel.send(arg)
}
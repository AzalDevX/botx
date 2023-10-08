
async def sendCompliment(msg):
    if not msg.author.bot and msg.content.strip().lower() == "!insulto":
        await msg.channel.send('GAYS')
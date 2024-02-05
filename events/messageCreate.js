const canalId = '1153587296851988568';  // PRUEBAS
// const canalId = '982690448780963860';  // TX DISCORD

module.exports.run = async (client, message) => {
    if (message.channelId !== canalId) return;
    if (message.author.id === client.user.id) return;
    if (!message.author.bot) return await message.delete();
    
    await message.channel.send('@everyone ¡Nueva votación! Por favor, vota con cabeza. Gracias y un saludo.');
}



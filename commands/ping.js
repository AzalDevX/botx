const { log } = require('../globals/utilities');

module.exports = {
    name: 'ping',
    description: 'Replies with Pong!',
    run: async (client, interaction) => {
        interaction.followUp({ content: `Pong! \n${client.ws.ping} ms` })
    }
}
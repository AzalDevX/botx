// index.js
const { client, api_key } = require('./globals/config');
// const { messageCreate } = require('./events/messageCreate');
const { log } = require('./globals/utilities');
// const { run: readyRun } = require('./events/ready');
// const { run: readyRunSlash } = require('./events/slashCommands');s

require("./handler/hEvents")(client)
require("./handler/hSlash")(client, api_key) 

// client.once('ready', () => {
//     log("I'm READY!!")
//     readyRun(client);
//     readyRunSlash(api_key, client.user.id)
// });

// client.on('messageCreate', async (message) => {
//     if (message.channelId !== canalId) return;
//     if (message.author.id === client.user.id) return;
  
//     await messageCreate(message);
// });

// client.on('interactionCreate', async interaction => {
//     if (!interaction.isChatInputCommand()) return;
  
//     if (interaction.commandName === 'ping') {
//       await interaction.reply('Pong!');
//     }
// });

client.login(api_key);

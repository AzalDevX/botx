// config.js
const Discord = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

const api_key = process.env.API_KEY;

const { Client, GatewayIntentBits } = Discord;
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.DirectMessages,
  ],
});

client.commands = new Discord.Collection();
client.commands.slash = new Discord.Collection();

module.exports = { 
  api_key,
  client,
};

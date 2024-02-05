const {REST, Routes} = require('discord.js');
const { readdirSync } = require('fs');
const { log } = require('../globals/utilities');
const dotenv = require('dotenv');

dotenv.config();
let bot_id = process.env.BOT_ID
let registeredCommands = []

module.exports = async (client, TOKEN) => {

    const commands = readdirSync('./commands/').filter(file => file.endsWith('.js'));
    for (let file of commands) {

        try {
            let cm = require(`../commands/${file}`);
            if (!cm.name) continue;
            registeredCommands.push(cm)
            client.commands.slash.set(cm.name, cm)

        } catch (err) {
            log('Error While reading: ' + file);
        }
    }
    const rest = new REST({ version: '10' }).setToken(TOKEN);

    try {
        log('Started refreshing application (/) commands.');
        await rest.put(Routes.applicationCommands(bot_id), { body: registeredCommands });
        // await client.application.commands.set(registeredCommands) //Registering new slash comands
        log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
    log('Commands Loaded Sucessfully!');
}
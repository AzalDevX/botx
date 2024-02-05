module.exports.run = async (client, interaction) => {
  if (!interaction.isChatInputCommand()) return;
  console.log(interaction.commandName)
  const command = client.commands.slash.get(interaction.commandName);
  console.log(command)

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
}
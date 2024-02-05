const { log } = require('../globals/utilities');

module.exports.run = async (client) => {
  const calculateMinutes = (minutes) => minutes * millisInAMinute;

  const minutes = 5; 
  const millisInAMinute = 60000; // One minute in millis

  const minType = 1;
  const maxType = 3;

  log(
    ['Username', client.user.tag],
    ['Guilds', client.guilds.cache.size],
    ['Users', client.users.cache.size],
  );
  
  client.user.setStatus("dnd");
  const statuses = [
    "baboon.games",
    "azaldev.com",
  ];

  setInterval(() => {
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const randomType = Math.floor(Math.random() * maxType) + minType;

    log(
      ['Status', status],
      ['Random Type', randomType],
    );
  
    client.user.setActivity(status, { type: randomType });
  }, calculateMinutes(minutes));
};

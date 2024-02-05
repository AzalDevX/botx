const { readdirSync } = require('fs')
const { log } = require('../globals/utilities');

module.exports = (client) => {

    const events = readdirSync('./events/').filter(file => file.endsWith('.js'));
    for (let file of events) {

        try {
            let ev = require(`../events/${file}`);

            if (ev.event && typeof ev.event !== 'string') {
                continue;
            }

            ev.event = ev.event || file.replace('.js', '')
            client.on(ev.event, ev.run.bind(null, client));
        } catch (err) {
            log('Error While loading: ' + file + '\nDiscord Response: ' + err);
        }
    }
    log('Events Loaded Sucessfully!');
}
const { list_of_insults } = require('../globals/utilities');

const CALLATE = 10;

module.exports = {
    name: 'insulto',
    description: 'Insulta a alguien.',
    options: [{
        name: 'usuario',
        description: 'Usuario al que quieres insultar.',
        type: 6, 
        required: false 
    }],
    run: async (client, interaction) => {

        let user_id = interaction.options.getUser('usuario')?.id;

        if (!user_id) {
            const ids = Object.keys(list_of_insults);
            user_id = ids[Math.floor(Math.random() * ids.length)];
        }

        const insults = list_of_insults[user_id];

        if(!insults){
            interaction.followUp({ content:  "No hay insultos guardados."});
            return;
        }
        
        const user = client.users.cache.get(user_id);
        const user_name = user ? `<@${user_id}>` : '';


        let mensaje = (Math.floor(Math.random() * CALLATE) === 0) 
            ? 'Cállate puto'
            : `${user_name} ${insults[Math.floor(Math.random() * insults.length)] }`;

        interaction.followUp({ content:  mensaje});
    }
};

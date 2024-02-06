const { list_of_insults } = require('../globals/utilities');

const MAX_INSULTOS = 5;

module.exports = {
    name: 'nuevo-insulto',
    description: 'Añade un nuevo insulto a la lista.',
    options: [{
        name: 'usuario',
        description: 'Usuario al que quieres añadir el insulto.',
        type: 6, 
        required: true 
    }, {
        name: 'insulto',
        description: 'Nuevo insulto a añadir.',
        type: 3,
        required: true 
    }],
    run: async (client, interaction) => {
        const user_id = interaction.options.getUser('usuario').id;
        const new_insult = interaction.options.getString('insulto');

        if (list_of_insults[user_id]) {

            list_of_insults[user_id].push(new_insult);

            if (list_of_insults[user_id].length > MAX_INSULTOS) {
                list_of_insults[user_id].shift();
            }

        } else {
            list_of_insults[user_id] = [new_insult];
        }

        interaction.followUp({ content: `Nuevo insulto para <@${user_id}>` });
    }
};

const { log } = require('../globals/utilities');

module.exports = {
    name: 'simio',
    description: 'Comando para obtener una imagen de un simio.',
    run: async (client, interaction) => {
        const height = 300;
        const width = 175;

        const image_url = `https://www.placemonkeys.com/${height}/${width}?random`;

        
        try {
            const response = await fetch(image_url);
            const array_buffer = await response.arrayBuffer();
            const image_buffer = Buffer.from(array_buffer);

            await interaction.followUp({
                // content: 'Aquí está la imagen:',
                files: [{
                    attachment: image_buffer,
                    name: 'simio.webp',
                }],
            });
        } catch (error) {
            interaction.followUp({ content: 'Hubo un error al obtener la imagen :(' });
        }
    }
}
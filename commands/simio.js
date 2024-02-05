const { log } = require('../globals/utilities');

module.exports = {
    name: 'simio',
    description: 'Replies with Simio!',
    run: async (client, interaction) => {
        const height = 300;
        const width = 175;

        const imageUrl = `https://www.placemonkeys.com/${height}/${width}?random`;

        
        try {
            const response = await fetch(imageUrl);
            const arrayBuffer = await response.arrayBuffer();
            const imageBuffer = Buffer.from(arrayBuffer);

            await interaction.followUp({
                // content: 'Aquí está la imagen:',
                files: [{
                    attachment: imageBuffer,
                    name: 'simio.webp',
                }],
            });
        } catch (error) {
            interaction.followUp({ content: 'Hubo un error al obtener la imagen :(' });
        }
    }
}
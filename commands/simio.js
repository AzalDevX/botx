const { log } = require('../globals/utilities');

module.exports = {
    name: 'simio',
    description: 'Replies with Simio!',
    run: async (client, interaction) => {
        // Obtener la imagen desde la URL
        const imageUrl = 'https://www.placemonkeys.com/300/175?random';

        try {
            const response = await fetch(imageUrl);
            const arrayBuffer = await response.arrayBuffer();
            const imageBuffer = Buffer.from(arrayBuffer);

            // Enviar la imagen como mensaje
            await interaction.followUp({
                content: 'Aquí está la imagen:',
                files: [{
                    attachment: imageBuffer,
                    name: 'simio_image.webp',
                }],
            });

            log('Imagen enviada correctamente.');
        } catch (error) {
            console.error('Error al obtener la imagen:', error);
            interaction.followUp({ content: '¡Hubo un error al obtener la imagen!' });
        }
    }
}
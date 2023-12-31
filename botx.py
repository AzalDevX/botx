import discord
from sendDiscordNotification import sendDiscordMessage
import os
from dotenv import load_dotenv

# Carga las variables de entorno desde el archivo .env
load_dotenv()

# Accede a las variables de entorno
api_key = os.getenv("API_KEY")

# Define los intentos necesarios
intents = discord.Intents.default()
intents.typing = False  # Puedes ajustar estos valores según tus necesidades
intents.presences = False

# Crea una instancia del cliente de Discord con los intentos
client = discord.Client(intents=intents)

# Canal específico donde quieres detectar mensajes (reemplaza con el ID de tu canal)
canal_id = 1153587296851988568  # PRUEBAS
# canal_id = 982690448780963860  # TX DISCORD


@client.event
async def on_ready():
    if (canal_id == 1153587296851988568):
        print(f'Bot conectado como {client.user.name} en modo PRUEBA')
    else:
        print(f'Bot conectado como {client.user.name} en modo EJECUCIÓN')


@client.event
async def on_message(message):
    if message.channel.id == canal_id and message.author.id != client.user.id:
        await sendDiscordMessage(message)


# Inicia el bot con su token de acceso
client.run(api_key)

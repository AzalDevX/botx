import discord
import asyncio

# Define los intentos necesarios
intents = discord.Intents.default()
intents.typing = False  # Puedes ajustar estos valores según tus necesidades
intents.presences = False

# Crea una instancia del cliente de Discord con los intentos
client = discord.Client(intents=intents)

# Canal específico donde quieres detectar mensajes (reemplaza con el ID de tu canal)
canal_id = 1153587296851988568 #PRUEBAS
#canal_id = 982690448780963860   #TX DISCORD

# Lista de mensajes enviados por el bot
mensajes_enviados = []

@client.event
async def on_ready():
    if (canal_id == 1153587296851988568):
        print(f'Bot conectado como {client.user.name} en modo PRUEBA')
    else:
        print(f'Bot conectado como {client.user.name} en modo EJECUCIÓN')


@client.event
async def on_message(message):
    if message.channel.id == canal_id and not message.author.bot:
        # El bot detecta un mensaje en el canal específico y el autor no es un bot
        # Puedes agregar tu lógica aquí para responder al mensaje o realizar acciones específicas
        await message.channel.send('@everyone ¡Nueva votación! Por favor, vota con cabeza. Gracias y un saludo.')
        
        # Agregar el mensaje a la lista de mensajes enviados
        mensajes_enviados.append(message)
        
        # Programar la eliminación del mensaje después de un período de tiempo (por ejemplo, 10 segundos)
        await asyncio.sleep(1)
        
        # Eliminar el mensaje de la lista después de que haya transcurrido el tiempo
        mensajes_enviados.remove(message)

# Inicia el bot con su token de acceso
client.run('MTE1OTkxODQwNDUzMTEzODY1MQ.GTooPZ.Qor16zjyDVDNSlg_FNKhwAP4anmXxP14p0g3Tk')

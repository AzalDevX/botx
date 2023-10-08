import discord
from sendDiscordNotification import sendDiscordMessage
from compliments import sendCompliment

# Define los intentos necesarios
intents = discord.Intents.default()
intents.typing = False  # Puedes ajustar estos valores según tus necesidades
intents.presences = False

# Crea una instancia del cliente de Discord con los intentos
client = discord.Client(intents=intents)

# Canal específico donde quieres detectar mensajes (reemplaza con el ID de tu canal)
IDS = {
    "PRUEBAS": 1153587296851988568,
    "VOTACION": 982690448780963860,
    "CUMPLIDOS": 1160260868756480141
}

@client.event
async def on_ready():
    print("Listo:")


@client.event
async def on_message(message):
    print(message.content)
    print(message.author)
    print(message.attachments)

    if  message.author.id != client.user.id:
        if message.channel.id == IDS["VOTACION"]: await sendDiscordMessage(message)
        if message.channel.id == IDS["PRUEBAS"]: await sendCompliment(message)
    

# Inicia el bot con su token de acceso
client.run(
    'MTE1OTkxODQwNDUzMTEzODY1MQ.GTooPZ.Qor16zjyDVDNSlg_FNKhwAP4anmXxP14p0g3Tk')

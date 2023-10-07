import asyncio

# Lista de mensajes enviados por el bot
mensajes_enviados = []


async def deleteMessage(msg):
    # Código para eliminar mensaje enviado
    await msg.delete()


async def sendDiscordMessage(msg):
    if not msg.author.bot:
        await deleteMessage(msg)
        return
    # El bot detecta un mensaje en el canal específico, el autor no es un bot y no es el propio bot
    # Puedes agregar tu lógica aquí para responder al mensaje o realizar acciones específicas
    await msg.channel.send('@everyone ¡Nueva votación! Por favor, vota con cabeza. Gracias y un saludo.')

    # Agregar el mensaje a la lista de mensajes enviados
    mensajes_enviados.append(msg)

    # Programar la eliminación del mensaje después de un período de tiempo (por ejemplo, 10 segundos)
    await asyncio.sleep(1)

    # Eliminar el mensaje de la lista después de que haya transcurrido el tiempo
    mensajes_enviados.remove(msg)

import json
from discord.ext import commands
import discord


with open('config.json', 'r') as file:
    config = json.load(file)

token = config.get("token")

BOT_TOKEN = token
CHANNEL_ID = 1318017308085714964

bot = commands.Bot(command_prefix="/", intents=discord.Intents.all())

@bot.event
async def on_ready():
    print("Lootbot is ready for loot distribution!")
    channel = bot.get_channel(CHANNEL_ID)
    await channel.send("Lootbot is ready for loot distribution!")

bot.run(BOT_TOKEN)
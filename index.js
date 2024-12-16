const {Client, GatewayIntentBits} = require('discord.js');
const {token} = require('./config.json');

const client = new Client({intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.GuildMembers, 
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent
    ],
});

client.login(token);

client.on("messageCreate", async (message) =>{

    console.log('Recieved Message', message)
    console.log('Message Content', message.content)
    
    if(!message.author.bot) {
        try {
            // If the message content isn't empty or just whitespace
            if (message.content.trim()) {
                // Send the message back in the same channel
                await message.channel.send(`Echo: ${message.content}`);
            } else {
                // Handle the case where the message has no content (like empty or whitespace-only messages)
                await message.channel.send('Echo: [No content]');
            }
        } catch (error) {
            console.error("Error sending message:", error);
        }
    }
});
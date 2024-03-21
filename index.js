// Import discord.js and configuration
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Discord client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

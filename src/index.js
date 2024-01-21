const { Client, IntentsBitField } = require('discord.js');
const { CommandHandler } = require('djs-commander');
const path = require('path');
const { config } = require('process');
require('./app')
require('dotenv').config()

const client = new Client({
  intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMembers],
});

new CommandHandler({
  client,
  commandsPath: path.join(__dirname, 'commands'),
  eventsPath: path.join(__dirname, 'events'),
});


client.on("ready", function() {
  // console.log("Bot ready...");
  client.user.setActivity('/imagine || DeathRose Team')
  client.user.setStatus("idle") // (idle, dnd, online)
});



client.login(process.env.TOKEN);

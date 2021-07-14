//        INITIAL VARIABLES and IMPORTS

// requiring .env for our hidden keys

require('dotenv').config()

// Import the discord.js module

const Discord = require('discord.js');

// Import swearing module from other js file

const providings = require('./mrProvidings');

// Create an instance of a Discord client

const client = new Discord.Client();

// Log our bot in using the token from https://discord.com/developers/applications stored in an env variable for safe keeping

client.login(process.env.TOKEN);

//          FUNCTIONALITY FOR THE BOT


/**
 * The ready event is vital, it means that only _after_ this will the bot start reacting to information
 * received from Discord */


// Create an event listener for ready status

client.on('ready', () => {
    console.log('I am ready!');
});

// Create an event listener for messages

let isReady = true;

client.on('message', message => {

    if (message.content === '!mrp' && isReady) {
        providings(message);
    }
    
});

// MODULAR SETUP ALLOWS FOR US TO SCALE THIS BOT WITH MORE COMMANDS IN A CLEAN FASHION
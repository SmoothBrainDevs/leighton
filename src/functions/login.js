require('dotenv').config({ path: './src/private/.env' })
const connectFirebase = require('../functions/firebase')
const support = require('../private/config.json')
const { Client } = require("discord.js");
const client = new Client(); 
const { HKandler } = require("hkutilities");
const { prefix, owners } = require('../private/config.json')
const db = require('./mongo')
let tok = 'a'
let { no_mongo, no_firebase } = require('../objects/messages.json')

let dirs = {
  commandsDir: "src/commands",
  eventsDir: "src/events",
  featuresDir: "src/features",
};

const connect = (param = 'Empty') => {

  connectFirebase()
    console.log('Connected to Firebase')
    
    switch(param.toLowerCase()) {
      case 'bot' :
        tok = support.token || process.env.TOKEN
        console.log(`Bot is active`)
        break;
        
  
        case 'cannon' : 
        tok = process.env.CANNON
        console.log(`Cannon is active`)
        break;
  
        case 'hk' : 
        tok = process.env.HK
        console.log(`HK is active`)
        break;
  
        case 'bqre' : 
        tok = process.env.BQRE
        console.log(`Bqre is active`)
        break;
  
        case 'clefory' : 
        tok = process.env.CLEFORY
        console.log(`Clefory is active`)
        break;
  
        default :
        tok = support.token || process.env.TOKEN // same has bot
        console.log(`Bot is active by default`)
        break;
  
        /*save your tokens in .env to test this bot 
        don't forget to add your name to the function and to .env*/
    }

    new HKandler(client, dirs)
    .setPrefix(prefix)
    .setOwners(owners)
    .setDefaultCooldown(2) //5 is default 
    // NOTE FROM CANNON: i changed cooldown of 3 to 2
        .setHelpDescription("**Welcome to Leighton**\n\nThe following bot you're about to experience is a project constructed by __The Smooth Brain Devs__ for the Worn Off Keys February Competition.\nThe bot is constructed over the idea of a \"YouTuber's Life\" simulator, that would fully simulate your way to becoming a successful YouTuber over Discord!\n\nFor a list of all of the commands and their uses, click the buttons below!\nTyping \"!help (command)\" would give you information specifically about the command you're looking for.\n\nHave fun!");


    client.login(tok).catch((err) => console.log('\x1b[31mAre you sure you put your name in index.js?\x1b[0m   \n' + err))

    client.on('ready', async () => {
     db(param).catch((err) => console.log(no_mongo + '\n' + err))
  })
}
module.exports = connect


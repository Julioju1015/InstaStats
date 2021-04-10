const Discord = require('discord.js');
const prefix = '+';
const active = new Map();
const fs = require('fs');

module.exports = async(client, message) => {

    if(message.channel.type === "dm") return;
    if(message.author.bot) return;

    let ops = {
        active: active
    };

   

    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commande = args.shift();

    const cmd = client.commands.get(commande);

    if(!cmd) return;

    cmd.run(client, message, args, ops);

    
    
       
       
     
    
    
    
};
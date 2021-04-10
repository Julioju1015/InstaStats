const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');


//////////Implemente le fichier  Commands//////////
fs.readdir('./commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commandes trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./commandes/${f}`);
            console.log(`${f} commands chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});

////////////Charge les Events////////
fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});


client.login('votre token');
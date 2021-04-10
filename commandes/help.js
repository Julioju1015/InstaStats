const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    
    var embed = new Discord.MessageEmbed()
            .setTitle('**Page d\'aide du bot**')
            .setDescription("<a:annonce:744469345857437706> Préfixe: `+`")
            .addField("<:insta:754416229040652359> Instagram","`+instagram <Nom d'utilisateur>`", true )
            .addField("Autre","`+botinfo`,`+ping`,`uptime`,`invite`", false )
            .addField("**__Information :__**","**__[Invite moi](https://discord.com/oauth2/authorize?client_id=787254300169601025&permissions=2147483639&scope=bot)__**")
            .setColor("RANDOM")
            message.channel.send(embed)
            
        };

module.exports.help = {
    name: "help"
};
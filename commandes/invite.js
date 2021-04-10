const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    
    var embed = new Discord.MessageEmbed()
            .setTitle('**InstaStats**')
            .addField("InstaStats sans permissions :","__[Clique-ici](https://discord.com/oauth2/authorize?client_id=787254300169601025&scope=bot&permissions=0)__ <a:no:744469368691490836> Déconseillé")
            .addField("InstaStats avec permission à choix :","__[Clique-ici](https://discord.com/oauth2/authorize?client_id=787254300169601025&scope=bot&permissions=2146958839)__")
            .addField("InstaStats avec permission administrateur :","__[Clique-ici](https://discord.com/oauth2/authorize?client_id=787254300169601025&scope=bot&permissions=8)__ <a:yes:744469367181279242> Recommandé")
            .setColor("RANDOM")
            .setThumbnail(client.user.avatarURL)
            message.channel.send(embed)
            
        };

module.exports.help = {
    name: "invite"
};
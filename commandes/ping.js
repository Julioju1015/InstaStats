const Discord = require("discord.js")
 
module.exports.run = async (client, message, args) => {

    var ping = new Discord.MessageEmbed()


    .setTitle(`:ping_pong: Ping | ${client.user.username} `)
    .addField("Le bot a un ping de ", Math.round(client.ws.ping) + "ms")
    .setFooter(`${client.user.tag}`, client.user.displayAvatarURL)
    .setColor("RANDOM")
    message.channel.send(ping)
    
}

module.exports.help = {
    name: "ping"
}
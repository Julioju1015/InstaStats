const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    const { version } = require("discord.js")
    var serversembed = new Discord.MessageEmbed()
    .setTitle(`📝Information sur ${client.user.username}`)
    .addField(`<:bot:734458969216778340> __Bot certifié__ :`,`Non.`)
    .addField(`:satellite: __je suis actif sur :__`,`${client.guilds.cache.size} serveurs.`, true)
    .addField(":ping_pong: __j'ai un ping de :__", Math.round(client.ws.ping) + "ms", true)
    .addField("📋 __Nom__ :", `${client.user.username}`, true)
    .addField("🔗 __Tag__ :", "#" + `${client.user.discriminator}`, true)
    .addField("📊 __Utilisateurs__ :", `${client.users.cache.size}`, true)
    .addField("🔧 __Version de discord.js__ :", `v${version}`, true)
    .addField("🔨 __Version de node.js__ :", `${process.version}`, true)
    .addField("<:online:734458973016817714> __En ligne depuis__ :", (Math.round(client.uptime / (1000 * 60 * 60))) + ' heures ' + (Math.round(client.uptime / (1000 * 60)) % 60) + ' minutes ' + (Math.round(client.uptime / 1000) % 60) + ' secondes ', true)
    .addField("💾 __Mémoire__ :", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}` + " MB", true)
    .addField("<:devcertifier:734458970168754297>  __Développeurs__ :", "**julioju#1015**", true)
    .setFooter(`${client.user.tag}`, client.user.displayAvatarURL)

    .setColor("RANDOM")
    .setThumbnail(client.user.avatarURL)
    .setTimestamp()
    message.channel.send(serversembed);
   };

module.exports.help = {
    name: "botinfo"
};

const Discord = require('discord.js');
const { stripIndents } = require("common-tags");

const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {
        const name = args.join(" ");

        if (!name) {
            return message.reply("<a:no:744469368691490836> Merci d'entrer le nom d'un utilisateur valide.")
                .then(m => m.delete(5000));
        }

        const url = `https://instagram.com/${name}/?__a=1`;
        
        let res; 

        try {
            res = await fetch(url).then(url => url.json());
        } catch (e) {
            return message.reply("<a:no:744469368691490836> Je n'ai pas trouvé ce compte dans ma base de données...")
                .then(m => m.delete(5000));
        }

        const account = res.graphql.user;

        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(account.full_name)
            .setURL(`https://instagram.com/${name}`)
            .setThumbnail(account.profile_pic_url_hd)
            .addField("<:insta:754416229040652359> Informations sur le profil", stripIndents`**- Nom d'utilisateur:** ${account.username}
            **- Nom complet:** ${account.full_name}
            **- Biographie:** ${account.biography.length == 0 ? "none" : account.biography}
            **- Postes:** ${account.edge_owner_to_timeline_media.count}
            **- Followers:** ${account.edge_followed_by.count}
            **- Following:** ${account.edge_follow.count}
            **- Compte privé:** ${account.is_private ? "Oui 🔐" : "Non 🔓"}`);

        message.channel.send(embed);
    }


module.exports.help = {
    name: "instagram",
    aliases: ["insta"],
};
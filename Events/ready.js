const Discord = require("discord.js");

module.exports = (client) => {


    console.log(`${client.user.username} est en ligne`);

    //client.user.setActivity("/help", {type: "LISTENING"});

    let statuses = [
        //`la Maintenance`
        `+help`,
        `+invite`,
        `By Julioju#1015`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {type: "WATCHING"}); 

    }, 20000);

};
const Discord = require("discord.js");
const client = new Discord.Client();

const fs = require("fs");

const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
});
app.listen(2000);
console.log("Running");

function send(channel, msg) {
    const PING_EXCEPTIONS = [
        "<@!266339086804058112>",
        "<@633936796958588928>",
        "<@&594215879252639765>",
        "<@439961550242185216>",
    ];
    /*msg = msg.replace(/<@[^(<|>)]+>/g, match =>
        PING_EXCEPTIONS.includes(match) ? match : "<PING EXPUNGED>"
    );*/
    channel.send(msg);
}

client.login("The Token");

client.on("message", message => {
    try {
        let author = message.author;
        let channel = message.channel;
        let msg = message.content;
        let execute = false;
        const startchars = ["c;"];
                let startchar;
        for (let i of startchars)
            if (msg.startsWith(i)) {
                startchar = i;
                execute = true;
                break;
            }

        if (execute) {
            msg = msg.slice(startchar.length);
            let name = msg.split(" ")[0];
            switch(name) {
                            case "test1":
                                    send(channel, 'wanna be friends?');
                                    break; 
                            case "test2":
                                    send(channel, 'loved it');
                                    break; 
                            case "test3":
                                    send(channel, 'wanna be friends, <@' + message.author + '>?');
                                    break; 
                            case "ping":
                                    send(channel, 'what is ping, <@' + message.author + '>?');
                                    break; 
                            case "pinglol":
                                    send(channel, '@pinglol');
                                    break; 
                            case "random":
                                    let a = Math.random() * 6;
                                    if(a < 1) send(channel, 'c;test1');
                                    else if(a < 2) send(channel, 'c;test2');
                                    else if(a < 3) send(channel, 'c;test3');
                                    else if(a < 4) send(channel, 'c;ping');
                                    else if(a < 5) send(channel, 'c;pinglol');
                                    else send(channel, 'c;random');
                                    break; 
                        }
        }
    } catch (e) 
    {console.warn(e)};
});

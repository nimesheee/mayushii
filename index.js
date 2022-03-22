const mayushii = require("./structures/mayushii");
const Discord = require ('discord.js')


const client = new mayushii();


module.exports={
    name:'ping',
    description: "Get server stats",
    execute(message, args){
        message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms`);
        }
      };

client.build();


module.exports = client; //;-;

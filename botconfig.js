module.exports = {
  Admins: ["850465490060181514", "850465490060181514"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/V54UdwN73c", //Support Server Link
  Token: process.env.Token || "OTU0ODg1MDUxMjczODQyNzY4.YjZoAQ.oP44ikNF-TKV45ycmyzqD2Kvbh4", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "954885051273842768", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "oPz0xrtaUrp9WeXrqsvV-2_p2c-6G1Wo", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord API Callback url. Do not touch it if you don't know what you are doing. All you need to change for website to work is on line 20.
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "mayushii", //A Secret like a password
  IconURL:
    "https://i.pinimg.com/736x/68/96/58/689658f9bf985744eb5d69fb45a1f0b4.jpg", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "", //Website where it is hosted at includes http or https || Use "0.0.0.0" if you using Heroku || Do not include /api/callback. Just the website url. I.e. "https://foo.bar"
  //If you get invalid oauth, make sure on the discord developer page you set the oauth url to something like: https://example.com/api/callback.

  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "Your heart!", // The message shown
    type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  // Lavalink server; public lavalink -> https://lavalink-list.darrennathanael.com/; create one yourself -> https://darrennathanael.com/post/how-to-lavalink/
  // The default one should work fine, altho if you have issue with it, you can create your own or use another public lavalink.
  Lavalink: {
    id: "Main", //- Used for indentifier. You can set this to whatever you want.
    host: "us1.lavalink.creavite.co", //- The host name or IP of the lavalink server.
    port: 20080, // The port that lavalink is listening to. This must be a number!
    pass: "auto.creavite.co", //- The password of the lavalink server.
    secure: false, // Set this to true if the lavalink uses SSL. if not set it to false.
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "4dde99c3ea244288b97b86ddb5246908", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "83bd8ff212ad4a439bb495ff96af7366", //Spotify Client Secret
  },
};

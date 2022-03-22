const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  description: "To invite me to your server",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["inv"],
  /**
   *
   * @param {import("../structures/mayushii")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let embed = new MessageEmbed()
      .setAuthor(
        "Invite " + client.user.tag + " to your server!",
        client.user.displayAvatarURL()
      )
      .setColor("BLUE")
      .setDescription(
        `You can invite me by clicking [here](https://discord.com/oauth2/authorize?client_id=954885051273842768&permissions=2205281600&scope=bot%20identify%20guilds%20applications.commands)`
      );
    message.channel.send(embed);
  },
  SlashCommand: {
    /**
     *
     * @param {import("../structures/mayushii")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, interaction, args, { GuildDB }) => {
      let embed = new MessageEmbed()
        .setAuthor(
          "Invite " + client.user.tag + " to your server!",
          client.user.displayAvatarURL()
        )
        .setColor("BLUE")
        .setDescription(
          `You can invite me by clicking [here](https://discord.com/oauth2/authorize?client_id=954885051273842768&permissions=2205281600&scope=bot%20identify%20guilds%20applications.commands)`
        );
      interaction.send(embed);
    },
  },
};
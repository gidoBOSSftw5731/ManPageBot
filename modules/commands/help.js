const Discord = require("discord.js");

const log = require("../logger.js");

const Help = function() {}

Help.prototype.execute = async function(prefix, command, args, message, client) {
  const p = prefix.get(message.guild.id);
  const embed = new Discord.MessageEmbed()
    .setTitle("ManPage Bot Command List")
    .setDescription("This bot provides manual pages for Linux and Windows commands\n```This guild's prefix is currently set to: \"" + p + "\"```")
    .setColor(0x009698)
    .setThumbnail("https://i.imgur.com/TbEDUPm.png")
    .addField(p + "help", "Display this help message")
    .addField(p + "ping", "Pings the bot")
    .addField(p + "info", "Displays bot info")
    .addField(p + "setprefix *prefix*", "Sets the bot command prefix for this guild (requires \"Manage Server\" permission)")
    .addField(p + "man [distro] [section] *command*", "Gets Linux manual page for specified command, optionally specify distro and section number")
    .addField(p + "winman *command*", "Gets Windows CMD manual page for specified command")
    .addField(p + "poshman *command*", "Gets Windows PowerShell manual page for specified command.  Mostly case sensitive to the real commands.")
    .addField("Notes", "- Commands do NOT work in DM.\n- Do not include brackets when typing commands.\n- The prefix must not have any whitespace in it");
  log.debug(`Sending help message in guild ${message.guild.name} (${message.guild.id}) channel ${message.channel.name} (${message.channel.id})`);
  return message.channel.send({embed});
}

Help.prototype.permission = ["SEND_MESSAGES"];
Help.prototype.strip = true;

module.exports = Help;

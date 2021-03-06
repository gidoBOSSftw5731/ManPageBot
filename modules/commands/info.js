const Discord = require("discord.js");
const pkg = require('../../package.json');
const humanizeDuration = require('humanize-duration');
const format = humanizeDuration.humanizer({
	conjunction: ' and ',
	serialComma: true,
	round: true
});

const log = require("../logger.js");

const Info = function() {}

Info.prototype.execute = async function(prefix, command, args, message, client) {
  const p = prefix.get(message.guild.id);
  const guilds = client.guilds.cache.size;
  const uptime = format(process.uptime() * 1000);
  const version = pkg.version;
  const embed = new Discord.MessageEmbed()
    .setTitle("ManPage Bot")
    .setDescription("This bot provides manual pages for Linux and Windows commands.  It was made during Discord Hack Week in 2019.  \nUse `" + p + "help` to view commands\n[Add ManPage Bot to your own server](https://discordapp.com/oauth2/authorize?client_id=371357658009305101&scope=bot&permissions=52224)\n[Join the ManPage Bot Discord server](https://discord.gg/hU3wMfQ)\n[Check out ManPage Bot on Discord Bot List](https://discordbots.org/bot/371357658009305101)")
    .setColor(0x009698)
    .setURL("https://manpagebot.tk")
    .setFooter("Ailuropoda Melanoleuca#0068 and lighthouse64#5760 | Written using discord.js")
    .setThumbnail("https://i.imgur.com/TbEDUPm.png")
    .addField("Prefix", p, true)
    .addField("Guilds", guilds, true)
    .addField("Version", version, true)
    .addField("Uptime", uptime);
	log.debug(`Sending info message in guild ${message.guild.name} (${message.guild.id}) channel ${message.channel.name} (${message.channel.id})`);
  return message.channel.send({embed});
}

Info.prototype.permission = ["SEND_MESSAGES"];
Info.prototype.strip = true;

module.exports = Info;

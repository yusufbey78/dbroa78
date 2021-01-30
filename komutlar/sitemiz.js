const Discord = require('discord.js');

exports.run = async (client, message, args) => {
const embed = new Discord.RichEmbed();
embed.setDescription("**Işte Sitem [YAKIMDA]()**")

message.channel.send(embed)
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['site'],
permLevel: 0
}

exports.help = {
name: 'sitemiz',

}
 
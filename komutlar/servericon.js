const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**SUNUCU IKONU**")
        .setImage(message.guild.iconURL)

    message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sunucuikon','sunucuicon'],
  permLevel: 0
};

exports.help = {
  name: 'server-pp',
  description: 'Serverin iconunu gösterir',
  usage: 'server-pp'
};

const Discord = require('discord.js');
const db = require('quick.db')
const Jimp = require('jimp')

exports.run = (client, message, args) => { 

 var user = message.mentions.users.first() || message.author; 
  
const embed = new Discord.RichEmbed()
.setAuthor("DeboraBot", client.user.avatarURL)
.setTitle("DeboraBot")
.setURL("https://discord.com/api/oauth2/authorize?client_id=772371604620836885&permissions=8&scope=bot")
.setDescription("Botu Kendi Sunucuna Davet Edebilirsin :)")
.setColor("BLUE")
.setTimestamp()
.addField("Destek", "[Destek Sunucusu](https://discord.gg/hPcgVUuz6P)")
message.channel.send(embed)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['invite'], 
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'taslak', 
  usage: 'sayac-hg-msg'
};
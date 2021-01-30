const Discord = require('discord.js');
const ms = require('parse-ms');

exports.run = async(client, message, args) => {
  let devtr = new Date('2021-01-01:00:00')
    let zaman = ms(devtr - Date.now())
    message.channel.send(` <a:purplediamond:766748663522394123> Yılbaşının kutlanmasına **${zaman.days}** gün **${zaman.hours}** saat **${zaman.minutes}** dakika kaldı!`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}; //DevTR

exports.help = {
  name: 'yılbaşı',
  description: 'Yılbaşına ne kadar kaldığını gösterir'
};
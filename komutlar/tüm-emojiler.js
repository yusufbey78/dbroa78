const Discord = require('discord.js'); //
const ayarlar = require('../ayarlar.json');
exports.run = (client, message) => {
//
      let devtr = message.guild.emojis.map(e=>e.toString()).join("  "); //

//      //

      message.channel.send(devtr); //
}; //
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['tüm-emojiler'],
permLevel: 0
};
exports.help = {
name: 'emojiler',
description: 'dönenrenkler',
usage: 'emojiler'//
};
const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
}, 8000);
  var msgArray = ["Debora Hizmetinizde","+yardım","Yenilikler | +kayıtsistemi | +özelodasistemi","Yapımcım: North'#0001", ];

 setInterval(() => {
  var rastgeleOyun = Math.floor(Math.random() * msgArray.length);
  client.user.setActivity(`${msgArray[rastgeleOyun]}`, { type: 'STREAMING' ,  url: 'https://www.twitch.tv/northbey' })
}, 15000);
    console.log(`Debora Giriş Yaptı.`);
}
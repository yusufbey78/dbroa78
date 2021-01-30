const Discord = require("discord.js");
exports.run = (client, msg, args) => {
if (msg.channel.type !== "text") return;
if (!msg.channel.permissionsFor(msg.member).has("MANAGE_GUILD")) return msg.channel.send("Bu komutu sadece `MANAGE_GUILD` yetkisine sahip olanlar kullanabilir.");
const limit = args[0] ? args[0] : 0;
if (limit > 120) return msg.channel.send("Süre limiti maksimum 120 saniye olabilir.");
var request = require('request');
request({
    url: `https://discordapp.com/api/v6/channels/${msg.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
});

if (limit == 0) return msg.channel.send("**<a:onay:756907563605295185> Yavaşmod Başarıyla Kaldırıldı! Tekrar Açmak İçin +slownode [Limit] Yazmalısın!**");
return msg.channel.send(`** <a:onay:756907563605295185> Sunucudaki Kullanıcılar Bundan Sonra **${limit}** Bu Süre Aralığıyla Mesaj Atabielcek! ** `);
return msg.chanel.send(`Botumuzu Sunucuna Eklemek İçin => +davet Yazman Yeterli Olacaktır!`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slowmode" ,"yavaş mod"],
  permLevel: 2
};

exports.help = {
  name: 'yavaşmod',
  description: 'Sunucuya Mesaj Yazma Süresi Ekler.',
  usage: 'yavaş-mod'
};
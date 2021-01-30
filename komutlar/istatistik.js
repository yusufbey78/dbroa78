const Discord = require("discord.js"); 
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async(client, message, args) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(' <a:unlem:777450866961416212> İstatistik;')
    .addField(' <a:ping:777450158115127296> Gecikme: ', client.ping + 'ms')
    .addField(' <a:sonsuz:777449744150167562> Çalışma Süresi: ', `${duration}`)
    .addField(':busts_in_silhouette: Kullanıcılar:', client.guilds.reduce((a, b) => a + b.memberCount, 0))
    .addField(':tv: Kanallar:', client.channels.size)
    .addField(':clipboard: Sunucular:', client.guilds.size)
    .addField(':desktop: Bellek kullanımı:', (process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2))
    .addField(' <a:registerbook:766749174821421106> Kütüphanesi;', `Discord.js`)
    .addField(` <a:registerbook:766749174821421106> Discord.js sürümü:`, Discord.version)
      .addField(' <a:developer:777447998615060480> Yapımcım:', '**North#0001**')
          .addField(' <a:developer:777447998615060480> Geliştirici:', '**EmZoom#0001**')
      .addField(' <a:sonsuz:777449744150167562> Botun Başlanma Zamanı:', " **01.11.2020**")
    .setFooter('Debora', client.user.avatarURL)
    .setTimestamp()
    message.channel.send(embed);
}
exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ['istatistik', 'botbilgi', 'bot-bilgi', 'i'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi-bot',
  description: 'Bot istatistiklerini gösterir.',
  usage: 'istatistik'
};
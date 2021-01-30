const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) return message.author.send(' <a:carpi:766747339771346994> Bu komutu özel mesajlarda kullanamazsın.'); 
  let kullanici = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.channel.send(' <a:carpi:766747339771346994> Dürtmek için bir kullanıcıyı etiketlemelisin.').catch(console.error);
  if(kullanici.bot) return message.channel.send(` <a:carpi:766747339771346994> Botları dürtemezsin, onlar dürtmen için çok sert.`)
  if(kullanici === message.author) return message.channel.send(` <a:carpi:766747339771346994> Kendini dürtemezsin, bu hiç mantıklı değil.`)
  message.channel.send(' <a:onay:756907563605295185> Kişiyi başarıyla dürttünüz, spam haricinde aranızda olabilecek sövüşlerden biz sorumlu değiliz.')
  const embed = new Discord.RichEmbed()
  .setColor('GREEN')
  .setAuthor(`Dürtüldün!`, kullanici.avatarURL)
  .setDescription(`Hey <@${kullanici.id}>, <@${message.author.id}> adlı kullanıcı sizi dürttü.`)
  .setFooter('- Dürtme', client.user.avatarURL)
  .setThumbnail(message.author.avatarURL)
  return kullanici.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['durt'],
  permlevel: 0
};

exports.help = {
  name: 'dürt',
  description: 'Etiketlediğiniz kullanıcıyı dürtersiniz.',
  usage: 'dürt @Kullanıcı'
};
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('**Kime Çay Vereceğimi Yazmalısın.**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor("#36393F")
    .setDescription(`** ${mesaj} ` + message.author.username + ' Sana Çay Ismarladı!**')
    .setImage(`https://ogrencikariyeri.com/AdminFiles/CMS/Content/wp-content/uploads/2018/05/cay26.gif`)
    return message.channel.sendEmbed(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'caylar,herkesebendencay',
  description: 'İstediğiniz Kişiye Çekiç Atarsınız.',
  usage: 'caylar,herkesebendencay'
};

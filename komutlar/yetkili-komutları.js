const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Yetkili Yardım Menüsü")
  .setDescription('**DeboraBot Yardım Komutları**')
  .setColor("RANDOM")
  .addField("** <a:yldz2:756908508791832586> otobotsiliciaç**", " **Botların Mesajını Belirli Bir Saniyede Siler** ",)
  .addField("** <a:yldz2:756908508791832586> otobotsilicikapat**", " **Botların Mesajını Belirli Bir Saniyede Silme Komutunu Kapatır** ",)
  .addField("** <a:yldz2:756908508791832586> özelodasistemi**", " **Özel Oda Sistemi Açar!** ",)
  .addField("** <a:yldz2:756908508791832586> yavaşmod [Süre]**", " **Yavaşmodu Belirtilen Sürede Yazılan Kanala Uygular!** ",)
  .addField("** <a:yldz2:756908508791832586> sunucupanel **", " **Server panel kurar** ",)
  .addField("** <a:yldz2:756908508791832586> sunucu-kur **", " **Sunucuyu Baştan Kurar** ",)
  .addField("** <a:yldz2:756908508791832586> sil [sayı] **", " **Yazdıgınız Sayı İçinde o Kadar Siler** ",)
  .addField("** <a:yldz2:756908508791832586> ses-kanal-aç [Ses Kanal İsmi] **", " **Belirtilen İsimde Ses Kanalı Açar!** ",)
  .addField("** <a:yldz2:756908508791832586> unban [Kullanıcı İD] **", " **Belirtilen İD'ye Sahip Kullanıcının Banını Kaldırır!** ",)
  .addField("** <a:yldz2:756908508791832586> oylama [Oylama Yapılacak Konu] **", " **Bulunduğunuz Kanalda Oylama Yaparsınız!** ",)
  .setFooter('**--------------------------**')
  .setImage("https://cdn.discordapp.com/attachments/677627830296903684/773820711181484052/standard_1.gif")
  .setFooter('+davet Yazarak Botumuzu Ekleyebilirsiniz!')
  .addField("** <a:tac:756908534259515517> Yapımcım**", " **North'#0357**",)
          .setFooter(`${message.author.tag} `, message.author.avatarURL)
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yetkililer"],
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
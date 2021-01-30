const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Yardım Menüsü")
  .setDescription('**DeboraBot Yardım Komutları**')
  .setColor("RANDOM")
  .addField("** <a:yldz2:756908508791832586> moderasyon **", " **Yetkili Komutlarını Gösterir.** ",)
  .addField("** <a:yldz2:756908508791832586> kullanıcı **", " **Kullanıcı Komutlarını Gösterir.**",)
  .addField("** <a:yldz2:756908508791832586> eğlence **", " **Kayıt Komutlarını Gösterir.** ",)
  .addField("** <a:yldz2:756908508791832586> seviye-yardım **", "**YAKINDA!** ",)
  .addField("** <a:yldz2:756908508791832586> kayıt-yardım **", " **Kayıt Komutlarını Gösterir.** ",)
  .addField("** <a:yldz2:756908508791832586> gif-yardım **", " **Erkek,Kadın Vs. Gif Komutları Gösterir.** ",)
  .setImage("https://cdn.discordapp.com/attachments/677627830296903684/773820711181484052/standard_1.gif")
  .setFooter('+davet Yazarak Botumuzu Ekleyebilirsiniz,Prefiximiz +  dır')
  .addField("** <a:tac:756908534259515517> Yapımcım**", "North'#0001",)
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
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
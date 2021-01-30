const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Yetkili Yardım Menüsü")
  .setDescription('**DeboraBot Yardım Komutları**')
  .setColor("RANDOM")
  .addField("** <a:yldz2:756908508791832586> sayaç [Sayı] #kanal **" , " **Sayaç Kanalını Ayarlar!** ")
  .addField("** <a:yldz2:756908508791832586> oto-rol-ayarla @otorol #kanal**", " **Otorol Komutunu Ayarlar!** ",)
  .addField("** <a:yldz2:756908508791832586> ban @kullanıcı [Sebep]**", " **Belirtilen Kullanıcıyı Banlar!** ",)
  .addField("** <a:yldz2:756908508791832586> kick @kullanıcı [Sebep]**", "**Belirtilen Kullanıcıyı Sunucudan Atar!** ",)
  .addField("** <a:yldz2:756908508791832586> reklam-engel-aç**", " **Reklam Engel Komutunu Açar Reklamları Engeller!** ",)
  .addField("** <a:yldz2:756908508791832586> reklam-engel-kapat**", " **Reklam Engel Komutunu Kapatır Reklamları Engellemez!** ",)
  .addField("** <a:yldz2:756908508791832586> reklam-kick aç**", " **Reklam Kick Komutunu Açar Reklamları Engeller! 3 Kere Reklam Yapanı Sunucudan Atar** ",)
  .addField("** <a:yldz2:756908508791832586> reklam-kick kapat**", " **Reklam Kick Komutunu Kapatır Reklamları Engellemez!** ",)
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
  name: 'moderasyon2',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
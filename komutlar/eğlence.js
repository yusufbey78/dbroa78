const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Eğlence Yardım Menüsü")
  .setDescription('**DeboraBot Yardım Komutları[Prefix:+]**')
  .setColor("RANDOM")
  .addField("** <a:yldz2:756908508791832586> aşk-ölçer [etiket]**" , " **Etiketlediginiz Kişi İlt Aşkınızı Ölçer Siniz** ")
  .addField("** <a:yldz2:756908508791832586> öp [etiket] **", " **Etiketlediğiniz Kişiyi Öpersiniz** ",)
  .addField("** <a:yldz2:756908508791832586> lafsok **", " **Etiketlediğiniz Kişiye Laf Sokarsınız**`",)
  .addField("** <a:yldz2:756908508791832586> saat **", "**Saatin Kaç Oldugunu Gösterir** `",)
  .addField("** <a:yldz2:756908508791832586> koş **", " **Koşarsınız**",)
  .addField("** <a:yldz2:756908508791832586> banner-yaz **", "**Mesajınızı Banner Olarak Yazar** `",)
  .addField("** <a:yldz2:756908508791832586> embed-yaz **", "**Mesajınızı Embed Olarak Yazar** `",)
  .addField("** dürt [yazı] **", " **Etiketlediğinizi Kişiyi Dürtersiniz** ",)
  .addField("**<a:yldz2:756908508791832586> kasa-aç **", " **CS:GO Kasa Açar!**",)
  .setImage("https://cdn.discordapp.com/attachments/677627830296903684/773820711181484052/standard_1.gif")
  .setFooter('**--------------------------**')
  .setFooter('+davet Yazarak Botumuzu Ekleyebilirsiniz!')
  .addField("** <a:tac:756908534259515517> Yapımcım**", " **North** ",)
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
  aliases: ["eglence"],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
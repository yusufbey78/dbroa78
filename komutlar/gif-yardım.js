const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Gif Yardım Menüsü")
  .setDescription('**DeboraBot Gif Komutları**')
  .setColor("RANDOM")
  .addField("** <a:yldz2:756908508791832586> man-gif **" , " **Erkek Gifleri Atar!** ")
  .addField("** <a:yldz2:756908508791832586> woman-gif **", " **Kadın Gifleri Atar!** ",)
  .addField("** <a:yldz2:756908508791832586> couple-gif **", " **Sevgili Gifleri Atar!**",)
  .addField("** <a:yldz2:756908508791832586> animal-gif **", " **Hayvan Gileri Atar!** ",)
  .addField("** <a:yldz2:756908508791832586> anime-gif **", "**Anime Gifleri Atar!** ",)
  .setImage("https://cdn.discordapp.com/attachments/677627830296903684/773820711181484052/standard_1.gif")
  .setFooter('+davet Yazarak Botumuzu Ekleyebilirsiniz!')
  .addField("** <a:tac:756908534259515517> Yapımcım**", " North",)
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
  name: 'gif-yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'gif-yardım [komut]'
};
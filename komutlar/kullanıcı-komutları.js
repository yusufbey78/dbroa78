const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Yetkili Yardım Menüsü")
  .setDescription('**DeboraBot Yardım Komutları**')
  .setColor("RANDOM")
  .addField("** <a:yldz2:756908508791832586> istatistik **" , " **Botun İstatistiğini Gösterir** ")
  .addField("** <a:yldz2:756908508791832586> rol-bilgi [rol etiketi]**", " **Etiketlediğiniz Rolün İstatistiklerine Bakarsınız** ",)
  .addField("** <a:yldz2:756908508791832586> tavsiye [açıklama]**", " **Tavsiye Kanalına Mesaj Atarsınız**`",)
  .addField("** <a:yldz2:756908508791832586> havadurumu **", "**Hava Durumunu Gösterir** `",)
  .addField("** <a:yldz2:756908508791832586> yardım **", " **Yardım menüsünü açar** ",)
  .addField("** <a:yldz2:756908508791832586> davet **", " **Botun davet linkini atar.** ",)
  .addField("** <a:yldz2:756908508791832586> bot-bilgi **", " **Bot bilgilerine bakarsınız** ",)
  .addField("** <a:yldz2:756908508791832586> bilgi **", " **Bizim bilgilerimize bakarsınız** ",)
  .addField("** <a:yldz2:756908508791832586> korona [Ülke Kodu]**", " **Belirtilen Bölgenin Korona İstatistiğine Bakarsınız** ",)
  .addField("** <a:yldz2:756908508791832586> banlist**", " **Banlı Listesini Gösterir!** ",)
  .addField("** <a:yldz2:756908508791832586> sunucu-bilgi**", " **Sunucu Hakkında Bilgi Verir** ",)
  .addField("** <a:yldz2:756908508791832586> ping**", " **Botun Pingini Gösterir** ",)
  .setFooter('**--------------------------**')
  .setFooter('+davet Yazarak Botumuzu Ekleyebilirsiniz!')
  .addField("** <a:tac:756908534259515517> Yapımcım**", " **North'#0001* ",)
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
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
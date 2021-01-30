const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_CHANNELS"))
  return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#ff0000")
        .addField(
          "Hata",
          `•\`=kapat\`Kullanabilmek için , \`Kanalları Yönet\` **Yetkisine sahip olmanız gerekir**.`
        )
        .setImage(
          "https://cdn.discordapp.com/attachments/768502339375857714/768796763040907284/Ekran_Alnts.PNG"
        )
    );

   //SDBE
  //SDBE
  //SDBE
  //SDBE
  //SDBE
  //SDBE
  //SDBE

  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
  message.channel.createOverwrite(every, {
    SEND_MESSAGES: false
  });

   //SDBE
  //SDBE
  //SDBE
  //SDBE
  //SDBE
  //SDBE
  //SDBE

  message.channel.send("**Sohbet Kanalı `Yazılamaz` Durumuna Getirilmiştir.**");
};

   //SDBE
  //SDBE
  //SDBE
  //SDBE
  //SDBE
  //SDBE
  //SDBE

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sohbet-kapat"],
  permLevel: 0
};

exports.help = {
  name: 'kapat',
  description: 'İstediğiniz kişiyi uyarır.',
  usage: 'kapat'
};
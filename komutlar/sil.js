const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
//

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  if(!args[0]) return message.reply(" En Az **1 - 100** Arasında Bir Tam Sayı Değeri Girmelisiniz.");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(` ** <a:onay:756907563605295185> ${args[0]}**  Adet Mesaj,Başarıyla Silindi,Debora Bot İyi Günler Diler.`).then(msg => msg.delete(5000));
  });
}

module.exports.help = {
  name: "sil"
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["temizle"],
  permLevel: 1,
};

exports.help = {
  name: 'sil',
  description: 'sil',
  usage: 'sil',
}
const Discord = require('discord.js')
const fs = require('fs');
const db = require('quick.db');

exports.run = async (client, message, args) => {

    let kullanıcı = await db.fetch(`ksistem_${message.guild.id}`);

  if( kullanıcı == undefined){
message.reply("** <a:carpi:766747339771346994> Kayıt komutları kapalı açmak için +kayıtsistemi aç**")
  }else{
      if( kullanıcı == "acik"){
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  let role = message.mentions.roles.first()

    if (!role) {
        return message.reply("** <a:onay:756907563605295185> Ayarlamak istediğin rolü etiketlemelisin.**")
    }

  
    db.set(`krol_${message.guild.id}`, role.id)
  
    const embed = new Discord.RichEmbed()
    .setTitle(` <a:onay:756907563605295185> Kayıt olunca verilecek rol başarıyla **${role.name}** olarak ayarlandı. Rolü değiştirmek istersen tekrar etiketlemelisin.`)
    .setColor("RANDOM")
    message.channel.send({embed})
      }
  }

}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kayıt-rol'],
    permLevel: `ueytki`,
}

exports.help = {
    name: 'kayıt-rol-ayarla',
    category: 'moderasyon',
    description: 'Birisi susturulunca verilecek rolü ayarlar.',
    usage: 'sustur-rol-ayarla <@rol>'
}
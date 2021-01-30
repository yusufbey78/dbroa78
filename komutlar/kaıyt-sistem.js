const Discord = require('discord.js');
const fs = require('fs');

var ayarlar = require('../ayarlar.json');

exports.run = async (client, message) => {
  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(` <a:carpi:766747339771346994> Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

  const db = require('quick.db');
  

  
    let args = message.content.split(' ').slice(1);
    const secenekler = args.slice(0).join(' ');

    if(secenekler.length < 1)  return message.reply("K");
    //if(secenekler === "aç" || "kapat") return message.channel.send(errembed);

  if (secenekler !== "aç" && secenekler !== "kapat" && secenekler !== "on" && secenekler !== "off")  return message.reply()

    if (secenekler === "aç" || secenekler === "on") {
        
    var i = db.set(`ksistem_${message.guild.id}`, "acik")
    
        message.channel.send(("!", "") + `${i.replace("acik", " ** <a:onay:756907563605295185> Kayıt Sistemi Komutları Artık Kullanılabilir ve Kayıt Kullanıcıları için Oda Açılmıştır.** ")}`)
    
 
    };

    if (secenekler === "kapat") {
    
    db.delete(`ksistem_${message.guild.id}`)
    
        message.channel.send(" <a:carpi:766747339771346994> Kayıt Sistemi Kapatıldı Artık Komutlarıda Kullanılamaz.")
    

  }
    };

    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['kayıt-sistemi'],
        permLevel: `Yeterli yetki yok`
      };
      
    exports.help = {
        name: 'kayıtsistemi',
        description: 'kayıt sistemi işte.',
        usage: 'kayıtsistemi <aç/kapat>',
    };
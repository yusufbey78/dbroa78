const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
    let emojiname = args[0];
    const emoji = (message.guild.emojis.find("name", `${emojiname}`))
    if (!emojiname) return message.channel.send(new Discord.RichEmbed()
                                               .setColor('#e74c3c')
                                               .setDescription(" <a:carpi:766747339771346994> Emoji İsmi Belirtmelisiniz!"))
    const embed = new Discord.RichEmbed()
    .setColor("#3498db")
    .setThumbnail(`${emoji.url}`)
    .addField(" <a:onay:756907563605295185> Emojinin ismi", ` ${emojiname}`)
    .addField(" <a:onay:756907563605295185> Emoji ID", ` ${emoji.id}`)
    .setTimestamp()
    message.channel.send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['emojiinfo', 'emoji-bilgi','ei'],
    permLevel: 0
}

exports.help = {
    name: 'emojibilgi',
    description: 'İsmini yazdığınız Emoji hakkında bilgi verir',
    usage: 'emojibilgi'
}
const Discord = module.require('discord.js');
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(' <a:anka:751123562592731297> Rastgele kullanıcı')
    .setDescription(message.guild.members.random().displayName)
    .setThumbnail(message.author.avatarURL)
    .setFooter('Debora Bot')
    .setTimestamp()
    message.channel.send(embed).then(msg => {msg.delete(7000)});
}

exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rastgele-kullanıcı'
};
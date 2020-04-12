const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const token = require('./config.json');

client.on('ready', () => {
    console.log(`Megjelent egy vad ${client.user.username}!`);
    client.user.setActivity('Alex fejleszt', {type: "PLAYING"})
});

client.on('message', msg => {
    if (msg.content === 'a!Alex') {
        msg.reply('Alex fejlesztett engem');
    }
});

client.on('message', msg => {
    if (msg.content === 'a!Sub') {
        msg.reply('Mindenki iratkozzon fel Alex KING-re');
    }
});
client.on("message", async message => {
    console.log(`${message.author.username} ezt mondta: ${message.content}`);
  });

  client.on('message', msg => {
    if (msg.content === 'a!Csati') {
        msg.reply('https://www.youtube.com/channel/UCcJKAA_SDzI733r3iocHw6g');
    }
  });

  client.login('Njk4NTI1MTYyMTYwNjUyMjg4.XpNDHA.nqhwRtvOje152LP0DEgQfxFFnXE');

  //A client.login-t soha de soha ne töröld ki hiszen ez indítja el a botod!!
  //Ha több parancsot akarsz akkor szólj mert van kick és ban parancsom
  
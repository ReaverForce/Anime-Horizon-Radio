const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
      message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.MzkwMTI4NjI3OTA5Mzk0NDMz.DRPhRg.TMblK3xcqdusV1mvyihXdnY4Cwg);

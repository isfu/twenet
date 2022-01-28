const { TwitterApi } = require('twitter-api-v2');
const { Client, Intents } = require('discord.js');

require('dotenv').config();

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_INTEGRATIONS,
  ],
});

const twitterClient = new TwitterApi({
  appKey: process.env.app_key,
  appSecret: process.env.app_secret,
  accessToken: process.env.access_token,
  accessSecret: process.env.access_secret,
});

client.on('ready', () => {
  console.log('bot ready');
});

client.on('messageCreate', async m => {
  if (m.channel.id === process.env.channel_id) {
    let message = `${m.author.username}: ${m.content}`.substring(0, 280);
    twitterClient.v2.tweet(message).then(x => console.log(message));
  }
});

client.login(process.env.discord);

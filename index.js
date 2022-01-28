const { TwitterApi } = require('twitter-api-v2');

require('dotenv').config();

const client = new TwitterApi({
  appKey: process.env.app_key,
  appSecret: process.env.app_secret,
  accessToken: process.env.access_token,
  accessSecret: process.env.access_secret,
});

client.v2.me().then(async e => {
  client.v2.tweet('hello world');
});

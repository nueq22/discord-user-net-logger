module.exports = {
  token: process.env.DISCORD_BOT_TOKEN,
  guildID: process.env.GUILD_ID,
  interval: Number(process.env.INTERVAL_SEC) * 1000,
  logFolder: `${__dirname}/logs`,
  dateFormat: 'DD-MM-YYYY',
  dateTimeFormat: 'DD-MM-YYYY/HH:mm:ss'
}

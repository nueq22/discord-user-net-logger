const Discord = require('discord.js')
const moment = require('moment')
const dotenv = require('dotenv')

dotenv.config()

const { appendToFile } = require('./utils/file')
const config = require('./config')

const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
  const guild = client.guilds.cache.get(config.guildID)
  if (guild) {
    updateMembersTable(guild)
    setInterval(() => updateMembersTable(guild), config.interval)
  }
})

function getLogFilename () {
  return `${__dirname}/../logs/${moment().format(config.dateFormat)}.csv`
}

function updateMembersTable (guild) {
  const filename = getLogFilename()
  const membersWithoutBots = guild.members.cache.filter(member => !member.user.bot)
  membersWithoutBots.forEach(member => {
    const currentDate = moment().format(config.dateTimeFormat)
    const memberName = member.user.username
    const memberStatus = member.presence.status
    const data = `${currentDate},${memberName},${memberStatus}\n`
    appendToFile(filename, data)
  })
}

client.login(config.token)

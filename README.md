# Discord user network status logger

Simple node js app that logs the network status of your discord server users to CSV file.

## Preparation
* Create developer application <a href="https://discordapp.com/developers/docs/intro">on discord portal</a>
* Create bot for this application
* Authorize bot to your server with OAuth2 in OAuth2 settings section of your application

After these steps, you must create `.env` file  in the root folder with variables from `.env.example`

|       Value       |         Description         |
|:-----------------:|:---------------------------:|
| DISCORD_BOT_TOKEN | Bot token, from dev portal  |
| GUILD_ID          | Id of your server           |
| INTERVAL_SEC      | Logger interval in seconds  |

## Logging

To start script use next command: `npm start`

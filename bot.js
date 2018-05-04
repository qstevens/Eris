const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const prefix = botSettings.prefix;

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
  console.log(`Bot is ready! ${bot.user.username}`);

  // try {
  //   let link = await bot.generateInvite(["ADMINISTRATOR"]);
  //   console.log(link);
  // } catch(e) {
  //   console.log(e.stack);
  // }

  try {
    let link = await bot.generateInvite(["ADMINISTRATOR"]);
  } catch(e) {
    console.log(e.stack);
  }
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);
  let query = args.join(" ");

  if(!command.startsWith(prefix)) return;

  if(command === `${prefix}yt`) {
    let embed = new Discord.RichEmbed();

    var search = require('youtube-search');

    var opts = {
      maxResults: 1,
      key: botSettings.APIkey
    };

    search(query, opts, function(err, results) {
      if(err) return console.log(err);

      var newJSON = results[0];

      embed.setURL(newJSON.link);

      message.channel.send(newJSON.link);
    });
  }
});

bot.login(botSettings.token);

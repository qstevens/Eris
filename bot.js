const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const prefix = botSettings.prefix;
const APIkey = botSettings.APIkey;

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
  console.log(`Bot is ready! ${bot.user.username}`);

  try {
    let link = await bot.generateInvite(["ADMINISTRATOR"]);
    console.log(link);
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

  let keyword = command.substring(1);

  switch (keyword) {

    case "yt":
      var search = require('youtube-search');

      var opts = {
        maxResults: 1,
        key: APIkey
      };

      search(query, opts, function(err, results) {
        if(err) return console.log(err);

        message.channel.send(results[0].link);
      });
      break;

    case "s":
      var getJSON = require('get-json')

      var url = "https://www.googleapis.com/customsearch/v1?q=" +
      `${query}&` +
      "cx=013360514782494321695%3Arq8lq0intr8&" +
      "num=1&" +
      `key=${APIkey}`

      getJSON(url, function(error, response){
        if(error) return console.log(error);

        message.channel.send(response.items[0].link);
      })
      break;
  }
});

bot.login(botSettings.token);

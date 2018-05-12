const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const fs = require("fs");
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

  fs.readFile('plans.json', (err, data) => {
    if (err) throw err;
    let newPlans = JSON.parse(data);

    var JSONArray = newPlans.plans;

    for (i = 0; i < JSONArray.length; i++) {
      var eventInfo = JSONArray[i]
      console.log(eventInfo);
      var eventDate = eventInfo.date;
      var timeToPlan = Date.parse(eventDate) - new Date().getTime();

      setTimeout(function(err) {
        if(err) return console.log(err);
        if (Date.parse(eventDate) - new Date().getTime() < 10000) {
          botChannel = bot.channels.get(eventInfo.channel)
          botChannel.send(eventInfo.name + " " + "is coming up (" + eventInfo.strDate + ")");
        }
      },
      timeToPlan);
      console.log(timeToPlan);
      JSONArray.splice(i);
    }
    fs.writeFileSync("plans.json", JSON.stringify(newPlans, null, 2));
  });

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

      case "plan":

        let argsLen = args.length;

        var ampm = args[argsLen-1]
        var time = args[argsLen-2];
        var setYear = args[argsLen-3]
        var setDay = args[argsLen-4];
        var month = args[argsLen-5];

        var setHours;
        var setMin;

        var timeLen = time.length;

        if (timeLen < 4) {
          setHours = +time;
          setMin = 0;
        } else {
          setHours = +time.substring(0, timeLen-3);
          setMin = +time.substring(timeLen-2, timeLen);
        }

        if (ampm.charAt(0).toUpperCase() === "P") {
          setHours += 12;
        }

        var setMonth;

        switch (month.toUpperCase().substring(0, 3)) {
          case "JAN":
            setMonth = 0;
            break;
          case "FEB":
            setMonth = 1;
            break;
          case "MAR":
            setMonth = 2;
            break;
          case "APR":
            setMonth = 3;
            break;
          case "MAY":
            setMonth = 4;
            break;
          case "JUN":
            setMonth = 5;
            break;
          case "JUL":
            setMonth = 6;
            break;
          case "AUG":
            setMonth = 7;
            break;
          case "SEP":
            setMonth = 8;
            break;
          case "OCT":
            setMonth = 9;
            break;
          case "NOV":
            setMonth = 10;
            break;
          case "DEC":
            setMonth = 11;
            break;
        }

        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var currentMonth = currentDate.getMonth();
        var currentDay = currentDate.getDate();
        var currentHours = currentDate.getHours();
        var currentMin = currentDate.getMinutes();
        var currentSec = currentDate.getSeconds();

        var setDate = new Date(setYear, setMonth, setDay,
          setHours, setMin, 0);

        var date = month + " " + setDay + " " + time + " " + ampm;

        var diffTimeDays = setDate.getTime() - new Date().getTime();

        var name = args[0];

        for (i = 1; i < argsLen - 6; i++) {
          name += " " + args[i];
        }

        fs.readFile('plans.json', (err, data) => {
          if (err) throw err;
          let jsonPlans = JSON.parse(data);
          var JSONArray = jsonPlans.plans;

          for (i = 0; i < JSONArray.length; i++) {
            if (JSONArray[i].name.toUpperCase === name.toUpperCase) {
              JSONArray.splice(i);
            }
          }
          jsonPlans.plans.push({
            name: name,
            date: setDate,
            strDate: date,
            channel: message.channel.id,
          })
          fs.writeFileSync("plans.json", JSON.stringify(jsonPlans, null, 2));
        });

        message.channel.send(name + " has been set for " + date);

        setTimeout(function(err) {
          if(err) return console.log(err);
          var today = new Date();

          fs.readFile('plans.json', (err, data) => {
            if (err) throw err;
            let newPlans = JSON.parse(data);

            var JSONArray = newPlans.plans;

            for (i = 0; i < JSONArray.length; i++) {
              if (JSONArray[i].name.toUpperCase === name.toUpperCase) {
                var eventDate = JSONArray[i].date;

                if (Date.parse(eventDate) - today.getTime() < 10000) {
                  message.channel.send(name + " " + "is coming up (" + date + ")");
                  JSONArray.splice(i);
                }
              }
            }

            fs.writeFileSync("plans.json", JSON.stringify(newPlans, null, 2));
          });
        },
        diffTimeDays);
        console.log(diffTimeDays);
  }

});

bot.login(botSettings.token);

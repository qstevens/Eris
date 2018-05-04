# DiscordBot
Provides a 'feeling lucky' search result in response to !yt commands followed by a search query.

Very simple program made with Discord.js following Part 1 of Threebow's tutorial on YouTube (https://www.youtube.com/watch?v=024upsEuHaU). I got lost around the part he made the .bat file because I was coding on Ubuntu Linux 18.04. Made a .sh file instead to run the same script (see start.sh).

I was also having trouble with Google's YouTube API so instead used youtube-search from the npm packages (https://www.npmjs.com/package/youtube-search/v/1.1.0). Pretty simple copy and paste to set up the search query. Took the JSONObject from 'results' (see bot.js) and retrieved the URL of the first YouTube search result and had my bot paste it in text chat.

Discord automatically embeds YouTube links.

**Note about botsettings.json**

Because there is sensitive information in the botsettings.json folder, I've added a botsettings(example).json file to show how I have mine set up. Be sure that you create a botsettings.json with the appropriate token and key filled in so that your bot.js file can retrieve it properly. Instructions on how to get a Discord bot token and YouTube API Key are detailed below.

**Setup Instructions**

1. Install node.js (https://nodejs.org/en/download/)

2. Set up your Discord Bot

    i) Go to Discord's Developer portal (https://discordapp.com/developers/)
    
   ii) Select "My Apps" from the left panel and create a "New App"
   
  iii) Add a name, possibly a description/image and select "Create App"
  
   iv) Your App should now appear on the "My Apps" page
   
    v) Select your app and scroll down until you see the "Bot" heading, then select "Create  a Bot User"
    
   vi) Under the "Bot" heading you should now see that your bot has a username and a "token"
   
  vii) Click on "click to reveal" your bot's token

Congratulations! You now have your bot token!

3. Obtain your YouTube API Key (You will need a Gmail account for this)

    i) Go to the Google Developers Console (https://console.developers.google.com/)
    
   ii) Select "Create Project" button on the right hand side of the page
   
  iii) Select "library" on the left hand sidebar
  
   iv) In the search bar, type in "Youtube" and select "YouTube Data API v3"
   
    v) Click on "Enable", then select the "Create credentials" button on the right hand side
    
   vi) Fill in "Web server (eg. node.js, Tomcat)" and select "Public data" for the empty fields and get your credentials

Congratulations! You now have your API key!

4. Clone **eris** from this repository

5. Configure botsettings.json

    i) Take the Discord bot token and paste it into the botsettings(example).json file
    
   ii) Do the same with your API key
   
  iii) Rename the botsettings(example).json file to botsettings.json
  
6. Authorize the bot on your Discord server

    i) Go into bot.js and uncomment the block of code that is commented out
    
   ii) Save the file, and from your terminal go into the **eris** directory and type ./start.sh
   
  iii) You should see a Discord link show up, copy this and paste it into your browser
  
   iv) Follow the prompts and authorize your bot to the server of your choice
   
    v) Go back into bot.js to re-comment out the code in step i) and re-run ./start.sh
    
7. Test your bot by typing "!yt all naruto openings" into a channel your bot has authorization to and enjoy the nostalgia!

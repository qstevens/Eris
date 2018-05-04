# DiscordBot
Provides a 'feeling lucky' search result in response to !yt commands followed by a search query.

Very simple program made with Discord.js following Part 1 of Threebow's tutorial on YouTube (https://www.youtube.com/watch?v=024upsEuHaU). I got lost around the part he made the .bat file because I was coding on Ubuntu Linux 18.04. Made a .sh file instead to run the same script (see start.sh).

I was also having trouble with Google's YouTube API so instead used youtube-search from the npm packages (https://www.npmjs.com/package/youtube-search/v/1.1.0). Pretty simple copy and paste to set up the search query. Took the JSONObject from 'results' (see bot.js) and retrieved the URL of the first YouTube search result and had my bot paste it in text chat.

Discord automatically embeds YouTube links.

**Note about botsettings.json**

Because there is sensitive information in the botsettings.json folder, I've added a botsettings(example).json file to show how I have mine set up. Be sure that you create a botsettings.json with the appropriate token and key filled in so that your bot.js file can retrieve it properly. Instructions on how to get a Discord bot token and YouTube API Key are detailed below.

***Setup Instructions***

*Install node.js (https://nodejs.org/en/download/)*

*Set up your Discord Bot*

1. Go to Discord's Developer portal (https://discordapp.com/developers/)

2. Select "My Apps" from the left panel and create a "New App"

3. Add a name, possibly a description/image and select "Create App"

4. Your App should now appear on the "My Apps" page

5. Select your app and scroll down until you see the "Bot" heading, then select "Create  a Bot User"

6. Under the "Bot" heading you should now see that your bot has a username and a "token"

7. Click on "click to reveal" your bot's token

Congratulations, you now have your bot token! (Save this for later)

*Obtain your YouTube API Key (You will need a Gmail account for this)*

1. Go to the Google Developers Console (https://console.developers.google.com/)

2. Select "Create Project" button on the right hand side of the page

3. Select "library" on the left hand sidebar

4. In the search bar, type in "Youtube" and select "YouTube Data API v3"

5. Click on "Enable", then select the "Create credentials" button on the right hand side

6. Fill in "Web server (eg. node.js, Tomcat)" and select "Public data" for the empty fields and get your credentials

Congratulations, you now have your YouTube API Key! (Save this, too)

*Clone **eris** from this repository*

*Configure botsettings.json*

1. Take the Discord bot token and paste it into the botsettings(example).json file

2. Do the same with your YouTube API key

3. Rename the botsettings(example).json file to simply botsettings.json

*Authorize the bot on your Discord server*

1. Go into bot.js and uncomment the line of code that is commented out

2. Save the file, and from your terminal go into the **eris** directory and type ./start.sh

3. You should see a Discord link show up, copy this and paste it into your browser

4. Follow the prompts and authorize your bot to the server of your choice

5. Go back into bot.js to re-comment out the code in step 1 and re-run ./start.sh

*Test your bot by typing "!yt all naruto openings" into a channel your bot has authorization to and enjoy the nostalgia!*

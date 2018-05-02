# DiscordBot
Provides a 'feeling lucky' search result in response to !yt commands followed by a search query.

Very simple program made with Discord.js following Part 1 of Threebow's tutorial on YouTube (https://www.youtube.com/watch?v=024upsEuHaU). I got lost around the part he made the .bat file because I was coding on Ubuntu Linux 18.04. Made a .sh file instead to run the same script (see start.sh).

I was also having trouble with Google's YouTube API so instead used youtube-search from the npm packages (https://www.npmjs.com/package/youtube-search/v/1.1.0). Pretty simple copy and paste to set up the search query. Took the JSONObject from 'results' (see bot.js) and retrieved the URL of the first YouTube search result and had my bot paste it in text chat.

Discord automatically embeds YouTube links.

**Note about botsettings.json**

Because there is sensitive information in the botsettings.json folder, I've added a botsettings(example).json file to show how I have mine set up. Be sure that you create a botsettings.json with the appropriate token and key filled in so that your bot.js file can retrieve it properly. Instructions on how to get a Discord bot token can be found in Threebow's tutorial (linked above) and there should be many resources on how to get the YouTube API key so I won't bother explaining here.

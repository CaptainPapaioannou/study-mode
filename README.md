# STUDY MODE
#### Video Demo:  <https://www.youtube.com/watch?v=gh6W-sPed7g>
#### Description:

Study Mode is a Chrome extension designed to enhance your focus and productivity while studying or working on tasks. It offers a set of features to help you stay on track and make the most of your study sessions.

## Features

- **Distracting Site Blocking**: Block distracting websites and social media platforms to prevent you from getting off track.

- **Eye Strain Reminders**: Get periodic reminders to take short breaks and look away from the screen to reduce eye strain.

- **Customizable Studying Music**: Enjoy studying with background music by choosing from a selection of tracks available in the extension's drop-down menu.

- **To-Do List and Notes**: Keep track of your tasks and important notes right within the extension. Stay organized and never forget important details.

- **Quote of the Day**: Stay motivated with a daily inspirational quote displayed at the top of the popup menu.

## Installation

1. **Download the Extension**: Extension isn't available on Google Chrome store yet, you need to download the files and manualy load the extension from the extensions managment tab on your google chrome browser. Once you download it enable/disable it via the toogle bar.

2. **Enable Permissions**: Ensure that the extension has the necessary permissions to block websites and access your browsing history for accurate distraction prevention.

## Usage

1. **Blocking Distracting Sites**:Distracting sites are automatically blocked once the extension is enabled via the toggle bar in the extension settings tab. When you attempt to visit a distracting site, whether through a search engine or a URL, a CSS screen template will load, displaying a '404 GET BACK TO WORK' message along with a reminder that studying is a more productive choice than the site you're trying to access. This feature helps curb the habit of visiting social media or other entertainment services that can hinder your ability to focus on important tasks.
Currently, the extension blocks the following sites: Facebook, Netflix, Roblox, Discord, Spotify, and Instagram. We plan to add more blocked sites in future updates.

YouTube is treated as a separate case since it offers both entertainment and educational content. We are currently exploring the development of artificial intelligence that will allow access to only educational videos while blocking YouTube Shorts and purely entertainment-oriented content. This enhancement aims to provide users with valuable study-related resources on YouTube.

Please note that these blocking features are subject to updates and improvements as we strive to make your study experience even more efficient and distraction-free.

2. **Eye Strain Reminders**: Study Mode will remind you to take breaks every 30 minutes to reduce eye strain during extended study sessions. A Chrome alarm will pop up in your browser window every 30 minutes as a reminder to take a short break. We recommend taking a minute to focus on something distant, possibly even challenging to read. This practice can help prevent eye strain and reduce the risk of future visual impairments. It's essential to include an adequate number of breaks when working for extended periods in front of a monitor screen. Failure to do so can lead to vision problems.
PLEASE NOTE: I am not a medical professional and cannot provide medical advice or assistance in any way. The information provided above is based solely on empirical observations. If you have concerns about the health of your eyes, please consult with your medical provider.

3. **Studying Music**: Select your preferred background music by navigating to the music section within the extension's popup interface. Simply click on the dropdown menu, and you'll find a variety of music playlists to choose from. Once you've made your selection, click the 'Play' button to enjoy background music while you browse. To pause the music, simply click the 'Pause' button. Please note that clicking the 'Play' button will restart the playlist from the beginning.
We're continuously expanding our music selection, so expect more tracks to be added in future updates. PLEASE NOTE: all the tracks available are sourced from the YouTube Music Library, and I do not hold any rights to this music.

4. **To-Do List and Notes**: Utilize the built-in to-do list to efficiently manage your tasks and take notes as necessary. Simply type your note into the provided placeholder and click the 'Add' button to save a new note. Once saved, you can mark a task as completed by clicking the checkbox next to it. This action will visually cross it out on your list but won't delete it entirely. To remove a task permanently, you can click the 'Wastebasket' button.
It's important to note that your updates to notes and tasks are automatically saved in local storage, ensuring that they are retained even if the extension is disabled. In an upcoming update, we plan to implement the capability to store notes and tasks in a Firebase database, providing additional backup and accessibility options.

5. **Quote of the Day**: Discover daily motivation and inspiration at the top of the popup menu, with quotes sourced from local storage. Currently, the quotes are limited in variety as there is no utilization of a relative API. However, in a future update, we plan to incorporate API integration to diversify the range of quotes available.

## Source Code
Inside the downloading package you will find the following files:

track-<...>.mp3 files : These files contain the music that you can play in the background

icon-<...>.png files : These files contain the icon of the extension that is visible in the browser

manifest.json : Extension's essential manifest file

background.html : html to source bg.js file to play music in the background

bg.js : sends play/pause messages to background.html to play or pause background music

content.js : Contains the javascript code for the features that happen automatically in the background without the use of the popup menu. Specifically the Distracting site Blocker and the LookAway reminder. The page that pops up when visiting a blocked site is applied as a function, so the html and css of this page is featured in this file as well

popout.html : The html for interface of the popout menu.

popout.js : It contains the javascript for all the features that are being controlled via the popup menu. Specifically is divided in three parts. The Quote backend code, the Music backend code and the To-do List backend code.

## Limitations
- Currently only avialable for manifest V2
- Music tracks are not directly available due to copyright considerations. You can link any mp3 file you like. Just name it this way:
  ```
  *name*-track.mp3
  ```
  then, all you need to do is to apply the names that you gave to the -track.mp3 files to the corresponding values in the popout.html file. Make sure that the mp3 files are stored ate the same folder as the rest of the extension files, otherwise you need to modify the path at content.js
- Once you pause the track, it then restarts. You can only stop and play the tracks from the beggining at the momment

## Future enhancements
- Proper API for music tracks to avoid size limitations
- Proper API for quotes to expand variety 
- Extend the control of music tracks. Control the track and set a cursor to the point of the song that you desire
- Blockage of youtube with machine learning implementation that trains a model to only block distracting and entertainment videos and allow education videos and tutorials


## Acknowledgments

- Special thanks to Youtube for providing the studying music tracks through youtube music library.
- Special thanks to Pedro tech for providing the slightly modified HTML & CSS used in the blocked site feature.
- Special thanks to Rusty zone for providing chrome extension tutorials

## Contact

For any questions, suggestions, or support requests, please contact sotirispapaioannou2000@gmail.com

Happy studying and stay focused!

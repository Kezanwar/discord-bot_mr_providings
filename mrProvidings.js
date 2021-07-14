// Requiring packages needed for audio functionality and path serving functionality


const ffmpeg = require('ffmpeg-static');

const path = require('path');

// Bot checks to see if user whos sent message is in a voice channel

// Bot joins the channel which message has come from and plays a random audio file then leaves.

// Is ready is temporarily set to false to prevent function from refiring on a new command mid function

module.exports = function (message) {

    isReady = false
    var VC = message.member.voice.channel;
    if (!VC) {
        message.reply("You must be in a voice channel to do the providings");
        isReady = true;
        return
    }
    VC.join()
        .then(connection => {
            const random = Math.floor(Math.random() * providingsAudioArray.length);
            const dispatcher =
                connection.play(path.join(__dirname, '/mr_providings_audio', providingsAudioArray[random].audioPath));
            dispatcher.on("finish", () => {
                VC.leave()
                isReady = true;
                return
            });
        })
        .catch(error => {
            console.log(error)
            VC.leave()
            isReady = true;
            return
        });

};

// Array of swearword objects with end of file names in audio path ready for random selection

const providingsAudioArray = [
    {
        name: 'everybody wants upgradings',
        audioPath: 'everybody-wants-upgradings.mp3'
    },
    {
        name: 'he likes the bit butt',
        audioPath: 'he-like-the-big-but-things-like-the-jailings.mp3'
    },
    {
        name: 'spankings',
        audioPath: 'i-thought-maybe-you-like-in-spankings-and-want-to-spankings-you-with-30-inch-ruler-rings.mp3'
    },
    {
        name: 'get nasty',
        audioPath: 'i-want-to-take-you-back-to-mine-and-get-nasty-things.mp3'
    },
    {
        name: 'upsettings',
        audioPath: 'im-up-settings.mp3'
    },
    {
        name: '42 megabytings',
        audioPath: 'its-42-megabyte-ings.mp3'
    },
    {
        name: 'good',
        audioPath: 'oh-good.mp3'
    },
    {
        name: 'downgradings',
        audioPath: 'what-about-down-grading.mp3'
    },
    {
        name: 'breath stinkings',
        audioPath: 'you-sounding-like-your-breath-is-very-stinking-like-it-smell-of-the-pools.mp3'
    },
     {
        name: 'upgradings',
        audioPath: 'you-want-upgrading.mp3'
    },

];



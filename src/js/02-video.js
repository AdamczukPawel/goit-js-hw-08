import Player from '@vimeo/player';
var _ = require('lodash');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_TIME = "videoplayer-current-time";

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

const onPlay = function(data) {
    localStorage.setItem(LOCALSTORAGE_TIME, data.seconds);
    console.log("ok");
};

player.on('timeupdate',  _.throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_TIME)); 
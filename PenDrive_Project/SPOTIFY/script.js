console.log("welcome to spotify");


//initialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/0.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let next = document.getElementById('next');
let previous = document.getElementById('previous');

let songs = [
    { song: "Sanam Teri Kasam", filePath: "songs/0.mp3", coverPath: "img/sanam.jpg" },
    { song: "sabtera...", filePath: "songs/1.mp3", coverPath: "img/sabtera.jpg" },
    { song: "samjhawan kii....", filePath: "songs/2.mp3", coverPath: "img/samjahwan.jpg" },
    { song: "Rahnuma..", filePath: "songs/3.mp3", coverPath: "img/rehnuma.jpg" },
    { song: "Raat Bhar", filePath: "songs/4.mp3", coverPath: "img/ratbhar.jpg" },
    { song: "Akull_-_Raat Bhar", filePath: "songs/5.mp3", coverPath: "img/akull.jpg" },
    { song: "Alan_Walker_-_ON_MY_WAY", filePath: "songs/6.mp3", coverPath: "img/kick.jpg" },
    { song: "Bhar_Do_Jholi_Meri", filePath: "songs/7.mp3", coverPath: "img/bad.jpg" },
    { song: "Hassa..", filePath: "songs/8.mp3", coverPath: "img/hs.jpg" },
    { song: "High Rated Gabru", filePath: "songs/9.mp3", coverPath: "img/hiret.jpg" },

]


// console.log(audioElement);
// songs Album list name and img..............
songItems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].song;
});


// .................................... 
//handle play pause click


function masterPlayFun(){
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        // console.log("play song");
        // console.log(audioElement);
    
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        // console.log('push song')
    }
}
masterPlay.addEventListener('click', () => {
    masterPlayFun();
});

// ProgressBar Satup 

audioElement.addEventListener('timeupdate', () => {
    
    //update seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

})

// // ....................................................... 
// previous and pause btn MasterPlay 

// next song 
function nextSong() {
    if (songIndex == 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.play();
    masterSongName.innerText = songs[`${songIndex}`].song;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    playBtn();
}

next.addEventListener('click', () => {
    nextSong();
    gif.style.opacity = 1;
});


// previous songs...
function previousSong() {
    if (songIndex == 0) {
        songIndex = 9;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongName.innerText = songs[`${songIndex}`].song;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    
    playBtn();
};

previous.addEventListener('click', () => {
    previousSong();
    gif.style.opacity = 1;
});

// .......................................................................................... 
// song item list handle...

const makeAllPlays =  () => {
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        });
};


const playBtn = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        if (element.id == songIndex)  {
            element.classList.remove('fa-play-circle');
            element.classList.add('fa-pause-circle');
            audioElement.pause();
            gif.style.opacity = 1;
            // console.log("this is pause")
        }else{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
            audioElement.play();
            gif.style.opacity = 0;
            // console.log("this is play");
        }
    });
};

 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
   element.addEventListener('click', (e) => {
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src =`songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongName.innerText = songs[`${songIndex}`].song;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    playBtn();

   });
});






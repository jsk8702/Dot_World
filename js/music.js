function createTrackItem(index, name, duration) {
    var trackItem = document.createElement('div');
    trackItem.setAttribute("class", "playlist-track-ctn");
    trackItem.setAttribute("id", "ptc-" + index);
    trackItem.setAttribute("data-index", index);
    document.querySelector(".playlist-ctn").appendChild(trackItem);

    var playBtnItem = document.createElement('div');
    playBtnItem.setAttribute("class", "playlist-btn-play");
    playBtnItem.setAttribute("id", "pbp-" + index);
    document.querySelector("#ptc-" + index).appendChild(playBtnItem);

    var btnImg = document.createElement('i');
    btnImg.setAttribute("class", "fas fa-play");
    btnImg.setAttribute("height", "40");
    btnImg.setAttribute("width", "40");
    btnImg.setAttribute("id", "p-img-" + index);
    document.querySelector("#pbp-" + index).appendChild(btnImg);

    var trackInfoItem = document.createElement('div');
    trackInfoItem.setAttribute("class", "playlist-info-track");
    trackInfoItem.innerHTML = name
    document.querySelector("#ptc-" + index).appendChild(trackInfoItem);

    var trackDurationItem = document.createElement('div');
    trackDurationItem.setAttribute("class", "playlist-duration");
    trackDurationItem.innerHTML = duration
    document.querySelector("#ptc-" + index).appendChild(trackDurationItem);
}

var listAudio = [
    {
        name: "1. Cyberpunk 2077 - The Rebel Path(Cello Version)",
        file: "music/1. The Rebel Path.mp3",
        duration: "04:20"
    },
    {
        name: "2. Jonas Lefvert - Order Town Theme(HOMM4)",
        file: "music/2. Order Town Theme.mp3",
        duration: "02:45"
    },
    {
        name: "3. S.T.A.L.K.E.R. - Campfire song",
        file: "music/3. Campfire song.mp3",
        duration: "03:08"
    },
    {
        name: "4. Alina Gingertail - Hope/Dirt Theme(HOMM4)",
        file: "music/4. Hope  Dirt Theme.mp3",
        duration: "02:41"
    },
    {
        name: "5. Dryante Zan - Sea Theme(HOMM4)",
        file: "music/5. Sea Theme.mp3",
        duration: "02:42"
    },
    {
        name: "6. The Wellermen - The Wellermen",
        file: "music/6. The Wellermen.mp3",
        duration: "02:15"
    },
    {
        name: "7. Eileen - Shchedryk",
        file: "music/7. Shchedryk.mp3",
        duration: "02:39"
    },
    {
        name: "8. World of Tanks - Studzianki",
        file: "music/8. Studzianki.mp3",
        duration: "02:29"
    },
    {
        name: "9. Earth, Wind & Fire - Fantasy",
        file: "music/9. Fantasy.mp3",
        duration: "04:38"
    },
    {
        name: "10. Paul Romero - Haven Theme(HOMM4)",
        file: "music/10. Haven Theme.mp3",
        duration: "03:14"
    },
    {
        name: "11. HOMM6 - Summer Plains(HOMM6)",
        file: "music/11. Summer Plains.mp3",
        duration: "03:01"
    },
    {
        name: "12. Faun - Tanz mit mir",
        file: "music/12. Tanz mit mir.mp3",
        duration: "03:03"
    },
    {
        name: "13. Elvis Stanic - Naranca (Gingertail Cover)",
        file: "music/13. Naranca.mp3",
        duration: "03:19"
    },
    {
        name: "14. Sting - Shape of My Heart",
        file: "music/14. Shape of My Heart.mp3",
        duration: "04:40"
    },
    {
        name: "15. Faun - Federkleid",
        file: "music/15. Federkleid.mp3",
        duration: "04:17"
    },
    {
        name: "16. HOMM2 - City Of The Knight",
        file: "music/16. City Of The Knight.mp3",
        duration: "02:25"
    },
    {
        name: "17. Pascal Letoublon - Friendships",
        file: "music/17. Friendships.mp3",
        duration: "03:06"
    },
    {
        name: "18. HOMM5 - Sylvan Town Theme",
        file: "music/18. Sylvan Town Theme.mp3",
        duration: "02:21"
    }


]

for (var i = 0; i < listAudio.length; i++) {
    createTrackItem(i, listAudio[i].name, listAudio[i].duration);
}
var indexAudio = 0;

// 다음 눌렀을때 트랙이 다음 트랙으로 이동하게 된다.
function loadNewTrack(index) {
    var player = document.querySelector('#source-audio')
    player.src = listAudio[index].file
    document.querySelector('.title').innerHTML = listAudio[index].name
    this.currentAudio = document.getElementById("myAudio");
    this.currentAudio.load()
    this.toggleAudio()
    this.updateStylePlaylist(this.indexAudio, index)
    this.indexAudio = index;
}

// 현재 플레이 중인 음악의 플레이 시간, 이름, 최종 시간 등이 상단에 기록된다.
var playListItems = document.querySelectorAll(".playlist-track-ctn");

for (let i = 0; i < playListItems.length; i++) {
    playListItems[i].addEventListener("click", getClickedElement.bind(this));
}

function getClickedElement(event) {
    for (let i = 0; i < playListItems.length; i++) {
        if (playListItems[i] == event.target) {
            var clickedIndex = event.target.getAttribute("data-index")
            if (clickedIndex == this.indexAudio) { // alert('Same audio');
                this.toggleAudio()
            } else {
                loadNewTrack(clickedIndex);
            }
        }
    }
}

document.querySelector('#source-audio').src = listAudio[indexAudio].file
document.querySelector('.title').innerHTML = listAudio[indexAudio].name


var currentAudio = document.getElementById("myAudio");

currentAudio.load()

currentAudio.onloadedmetadata = function () {
    document.getElementsByClassName('duration')[0].innerHTML = this.getMinutes(this.currentAudio.duration)
}.bind(this);

var interval1;

function toggleAudio() {

    if (this.currentAudio.paused) {
        document.querySelector('#icon-play').style.display = 'none';
        document.querySelector('#icon-pause').style.display = 'block';
        document.querySelector('#ptc-' + this.indexAudio).classList.add("active-track");
        this.playToPause(this.indexAudio)
        this.currentAudio.play();
    } else {
        document.querySelector('#icon-play').style.display = 'block';
        document.querySelector('#icon-pause').style.display = 'none';
        this.pauseToPlay(this.indexAudio)
        this.currentAudio.pause();
    }
}

function pauseAudio() {
    this.currentAudio.pause();
    clearInterval(interval1);
}

var timer = document.getElementsByClassName('timer')[0]

var barProgress = document.getElementById("myBar");


var width = 0;

function onTimeUpdate() {
    var t = this.currentAudio.currentTime
    timer.innerHTML = this.getMinutes(t);
    this.setBarProgress();
    if (this.currentAudio.ended) {
        document.querySelector('#icon-play').style.display = 'block';
        document.querySelector('#icon-pause').style.display = 'none';
        this.pauseToPlay(this.indexAudio)
        if (this.indexAudio < listAudio.length - 1) {
            var index = parseInt(this.indexAudio) + 1
            this.loadNewTrack(index)
        }
    }
}


function setBarProgress() {
    var progress = (this.currentAudio.currentTime / this.currentAudio.duration) * 100;
    document.getElementById("myBar").style.width = progress + "%";
}


function getMinutes(t) {
    var min = parseInt(parseInt(t) / 60);
    var sec = parseInt(t % 60);
    if (sec < 10) {
        sec = "0" + sec
    }
    if (min < 10) {
        min = "0" + min
    }
    return min + ":" + sec
}

var progressbar = document.querySelector('#myProgress')
progressbar.addEventListener("click", seek.bind(this));


function seek(event) {
    var percent = event.offsetX / progressbar.offsetWidth;
    this.currentAudio.currentTime = percent * this.currentAudio.duration;
    barProgress.style.width = percent * 100 + "%";
}

function forward() {
    this.currentAudio.currentTime = this.currentAudio.currentTime + 5
    this.setBarProgress();
}

function rewind() {
    this.currentAudio.currentTime = this.currentAudio.currentTime - 5
    this.setBarProgress();
}


function next() {
    if (this.indexAudio < listAudio.length - 1) {
        var oldIndex = this.indexAudio
        this.indexAudio++;
        updateStylePlaylist(oldIndex, this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
}

function previous() {
    if (this.indexAudio > 0) {
        var oldIndex = this.indexAudio
        this.indexAudio--;
        updateStylePlaylist(oldIndex, this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
}

function updateStylePlaylist(oldIndex, newIndex) {
    document.querySelector('#ptc-' + oldIndex).classList.remove("active-track");
    this.pauseToPlay(oldIndex);
    document.querySelector('#ptc-' + newIndex).classList.add("active-track");
    this.playToPause(newIndex)
}

function playToPause(index) {
    var ele = document.querySelector('#p-img-' + index)
    ele.classList.remove("fa-play");
    ele.classList.add("fa-pause");
}

function pauseToPlay(index) {
    var ele = document.querySelector('#p-img-' + index)
    ele.classList.remove("fa-pause");
    ele.classList.add("fa-play");
}


function toggleMute() {
    var btnMute = document.querySelector('#toggleMute');
    var volUp = document.querySelector('#icon-vol-up');
    var volMute = document.querySelector('#icon-vol-mute');
    if (this.currentAudio.muted == false) {
        this.currentAudio.muted = true
        volUp.style.display = "none"
        volMute.style.display = "block"
    } else {
        this.currentAudio.muted = false
        volMute.style.display = "none"
        volUp.style.display = "block"
    }
}
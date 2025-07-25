

// 제이쿼리 설정
$(document).ready(function () {

  // nav 메뉴 설정
  // nav 메뉴를 클릭했을 때 해당 리스트가 나타난다.
  $(".nav_inner .nav_inner_hamBtn").click(function(){
    $(this).next(".nav_inner_menu").addClass("active");
  });
  // 해당 메뉴에서 마우스를 빼면 메뉴가 사라진다.
  $(".nav_inner_menu_close").click(function(){
    $(".nav_inner_menu").removeClass("active");
  });

  // nav 서브 메뉴 설정
  // 메인 메뉴 누르면 서브메뉴가 존재할 경우 열린다. 
  $(".nav_inner_sub_main").click(function(){
    $(this).find(".nav_inner_sub_menu").stop().slideToggle();
  });
  // 해당 메뉴 영역을 나가면 서브메뉴가 닫힌다.
  $(".nav_inner_sub_main").mouseleave(function(){
    $(this).find(".nav_inner_sub_menu").stop().slideUp();
  });

  // 서브 메뉴를 클릭하면 햄버거 메뉴 전체가 사라진다.
  $(".nav_inner_sub_menu").click(function(){
    $(".nav_inner_menu").removeClass("active");
    });
  
  // 사이트 소개를 클릭하면 햄버거 메뉴 전체가 사라진다.
  // 현재 일반 .nav_inner_sub_main 로 클릭 설정하면 사이트 소개 li는
  // 하단에 서브 ul, li 가 없어서 인식을 못한다. 그래서 별도로 클래스를 주고 직접 닫게 했다.
  $(".nav_inner_sub_main_about").click(function(){
    $(".nav_inner_menu").removeClass("active");
    });
    



  // 뮤직박스 메뉴 설정
  // nav 메뉴를 클릭했을 때 해당 리스트가 나타난다.
  $(".nav_inner .nav_inner_musicBtn").click(function(){
    $(this).next(".nav_inner_musicMenu").addClass("active");
  });
  // 해당 메뉴에서 마우스를 빼면 메뉴가 사라진다.
  $(".nav_inner_musicMenu_close").click(function(){
    $(".nav_inner_musicMenu").removeClass("active");
  });  
    
});


// 햄버거 메뉴 리스트 마우스 휠로 내리기 기능
const scrollContainer = document.querySelector('.nav_inner_menu > ul');

scrollContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollContainer.scrollTop += e.deltaY;
});


// 뮤직박스 스크립트
// 변수 설정
let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
// let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');


let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;


// create audio Element
let track = document.createElement('audio');


// all song list
let All_song = [
    {
        name: "Cyberpunk 2077 - The Rebel Path Cello Version",
        path: "music/The Rebel Path Cello Version.mp3",
        // img: "img/img1.jpg",
        singer: "Cyberpunk 2077 OST"
    },
    {
        name: "HOMM II - Sorceress Town Theme on grand piano",
        path: "music/Sorceress Town Theme on grand piano.mp3",
        // img: "img/img3.jpg",
        singer: "Cover by Pani Fortepiano"
    },
    {
        name: "HOMM IV - Order Town Theme",
        path: "music/Order Town Theme.mp3",
        // img: "img/img4.jpg",
        singer: "Cover by Roman"
    },
    {
        name: "HOMM IV - The Mountain Song",
        path: "music/The Mountain Song.mp3",
        // img: "img/img5.jpg",
        singer: "Cover by Dryante"
    },
    {
        name: "HOMM 6 - Summer and Winter Plains",
        path: "music/Summer and Winter Plains Game Soundtrack Mix.mp3",
        // img: "img/img5.jpg",
        singer: "Might & Magic Heroes 6 OST"
    },
    {
      name: "HOMM IV - Hope",
      path: "music/Hope Theme.mp3",
      // img: "img/img5.jpg",
      singer: "Cover by Alina Gingertail"
    },
    {
      name: "strangemoon",
      path: "music/strangemoon.mp3",
      // img: "img/img5.jpg",
      singer: "Dreamwave(pluck sounds)"},
    {
      name: "Tabula Rasa",
      path: "music/Tabula Rasa.mp3",
      // img: "img/img5.jpg",
      singer: "Purrple Cat(Lofi Records)"
    },
    {
      name: "one last time",
      path: "music/one last time.mp3",
      // img: "img/img5.jpg",
      singer: "Dreamwave(.Uzu)"
    },
    {
      name: "I Really Want to Stay at Your House",
      path: "music/I Really Want to Stay at Your House.mp3",
      // img: "img/img5.jpg",
      singer: "Cyberpunk 2077 OST"
    },
    {
      name: "Campfire song",
      path: "music/Campfire song.mp3",
      // img: "img/img5.jpg",
      singer: "S.T.A.L.K.E.R. OST"
    },
    {
      name: "Friendships",
      path: "music/Friendships.mp3",
      // img: "img/img5.jpg",
      singer: "Pascal Letoublon, Leony"
    },
    {
      name: "HOMM IV - Floating Across Water",
      path: "music/Floating Across Water.mp3",
      // img: "img/img5.jpg",
      singer: "Cover by ChequerChequer"
    },
    {
      name: "The Deli - 5:32PM",
      path: "music/532PM.mp3",
      // img: "img/img5.jpg",
      singer: "Dreamwave"
    },
    {
      name: "(FREE) lofi type beat - Deep In Ur Eyez",
      path: "music/Deep In Ur Eyez.mp3",
      // img: "img/img5.jpg",
      singer: "Nayture"
    },
    {
      name: "Dreams",
      path: "music/Dreams.mp3",
      // img: "img/img5.jpg",
      singer: "Joakim Karud"
    },
    {
      name: "Wandering Through The Clouds",
      path: "music/Wandering Through The Clouds.mp3",
      // img: "img/img5.jpg",
      singer: "MBSY"
    },
    {
      name: "Better Days",
      path: "music/Better Days.mp3",
      // img: "img/img5.jpg",
      singer: "LAKEY INSPIRED"
    },
    {
      name: "Domo - alone",
      path: "music/alone.mp3",
      // img: "img/img5.jpg",
      singer: "Dreamwave"
    },
    {
      name: "Time For a Coffee",
      path: "music/Time For a Coffee.mp3",
      // img: "img/img5.jpg",
      singer: "bxeset"
    },
    {
      name: "Dark Is The Night",
      path: "music/Dark Is The Night.mp3",
      // img: "img/img5.jpg",
      singer: "Nikita Bogoslovsky, Mark Bernes"
    },
    {
      name: "Midnight Snack Original Mix",
      path: "music/Midnight Snack Original Mix.mp3",
      // img: "img/img5.jpg",
      singer: "Purrple Cat"
    },
    {
      name: "Good Days",
      path: "music/Good Days.mp3",
      // img: "img/img5.jpg",
      singer: "Lofi Fruits Release"
    },
    {
      name: "Spring Nights",
      path: "music/Spring Nights.mp3",
      // img: "img/img5.jpg",
      singer: "Lofi Fruits Release"
    },
    {
      name: "DREAMS  AFRICAN LOFI",
      path: "music/DREAMS  AFRICAN LOFI.mp3",
      // img: "img/img5.jpg",
      singer: "MR YOHAN, AFRICAN LOFI"
    },
    {
      name: "Chillwave Chronicles",
      path: "music/Chillwave Chronicles.mp3",
      // img: "img/img5.jpg",
      singer: "HxR Lofi"
    },
    {
      name: "Heart of the Ocean",
      path: "music/Heart of the Ocean.mp3",
      // img: "img/img5.jpg",
      singer: "Purrple Cat - Oasis"
    },
    {
      name: "Hazy Daydreams",
      path: "music/Hazy Daydreams.mp3",
      // img: "img/img5.jpg",
      singer: "HxR Lofi"
    },
    {
      name: "Dreamsynth Chillsynth  Final Horizon",
      path: "music/Dreamsynth Chillsynth  Final Horizon.mp3",
      // img: "img/img5.jpg",
      singer: "Synthblade Tunes"
    },
    {
      name: "Vol4 Track No3 Room in the Sea",
      path: "music/Vol4 Track No3 Room in the Sea.mp3",
      // img: "img/img5.jpg",
      singer: "moogboy playlist"
    },
    {
      name: "90s Boom Bap Chill Jazz x LoFi Type Beat  Hustle",
      path: "music/90s Boom Bap Chill Jazz x LoFi Type Beat  Hustle.mp3",
      // img: "img/img5.jpg",
      singer: "Rama Low"
    },
    {
      name: "Lonely",
      path: "music/Lonely.mp3",
      // img: "img/img5.jpg",
      singer: "Purrple Cat"
    },
    {
      name: "Rooftop Rendezvous",
      path: "music/Rooftop Rendezvous.mp3",
      // img: "img/img5.jpg",
      singer: "Purrple Cat"
    },
    {
      name: "Torn",
      path: "music/Torn.mp3",
      // img: "img/img5.jpg",
      singer: "Purrple Cat"
    },
    {
      name: "Lunar Drive",
      path: "music/Lunar Drive.mp3",
      // img: "img/img5.jpg",
      singer: "Mondo Loops"
    },

    

];



// all function
// function load the track
function load_track(index_no) {
    clearInterval(timer);
    reset_slider();

    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    // track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

    // 음악 위치 슬라이더 값을 조절하는데 쓰인다.
    timer = setInterval(range_slider, 1000);
    // 오른쪽 상단에 음악 숫자 카운트가 노래 순서 변경하면 바뀐다.
    total.innerHTML = All_song.length;
    present.innerHTML = index_no + 1;
    
}
load_track(index_no);


// mute sound
function mute_sound() {
    track.volume = 0;
    volume.value = 0;
    volume_show.innerHTML = 0;
};



// checking the song is playing or not
function justplay(){
    if(Playing_song == false){
        playsong();
    }else{
        pausesong();
    }
};

// reset song slider bar 음악 위치 설정해도 다음 음악 선택하면 처음부터 실행된다.
function reset_slider() {
    slider.value = 0;
}

// play song 함수로 플레이 버튼 누르면 음악이 실행된다.
function playsong(){
    track.play();
    Playing_song = true;
    play.innerHTML = '<i class="fa fa-pause"></i>';
}

// pause song 함수로 멈춤 버튼을 누르면 음악이 중단된다.
function pausesong(){
    track.pause();
    Playing_song = false;
    play.innerHTML = '<i class="fa fa-play"></i>';
}

// next song 함수로 다음 음악 선택하기
function next_song() {
    if (index_no < All_song.length - 1){
        index_no += 1;
        load_track(index_no);
        playsong(); //이걸 삭제하면 넘어가기만 하고 실행은 안된다.
    } else {
        index_no = 0;
        load_track(index_no);
        playsong(); //이걸 삭제하면 넘어가기만 하고 실행은 안된다.
    };
};

// preivious song 함수로 이전 음악 선택하기
function previous_song() {
    if(index_no > 0){
        index_no -= 1;
        load_track(index_no);
        playsong();
    }else{
        index_no = All_song.length;
        load_track(index_no);
        playsong();
    };
};


// change volume  음량조정
function volume_change() {
    volume_show.innerHTML = recent_volume.value;
    track.volume = recent_volume.value / 100;
};

// change slider position 음악 플레이 위치
function change_duration() {
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch() {
    if(autoplay == 1){
        autoplay = 0;
        auto_play.style.background = "rgba(255,255,255,0.2)";
    }else{
        autoplay = 1;
        auto_play.style.background = "#ff8a65";
    }
}

function range_slider() {
    let position = 0;

    // update slider position 음악이 시작되면 음악이 간 만큼 슬라이더 바가 움직인다.
    if(!isNaN(track.duration)){
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }

    // function will run when the song over 음악이 끝나면 다음 음악이 나온다.
    if(track.ended){
        play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
        if(autoplay == 1){
            index_no += 1;
            load_track(index_no);
            playsong();
        }
    }
}

// 뮤직박스 스크립트 끝




// swpier 기본 설정
// 이미지 변환 시간 상태를 알리는 이미지는 못구해서 이건 이미지는 생략
// const progressCircle = document.querySelector(".autoplay-progress svg");
// const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  // 자동실행 비활성함(모든 슬라이드가 동시 작동 문제)
  //autoplay: {
  //  delay: 5000, // <<- 여기가 이미지 자동 변환에 걸리는 시간 설정(1000 = 1초)
  //  disableOnInteraction: true
  //},
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // 자동실행 비활성함
  // on: {
  //   autoplayTimeLeft(s, time, progress) {
  //     progressCircle.style.setProperty("--progress", 1 - progress);
  //     progressContent.textContent = `${Math.ceil(time / 1000)}s`;
  //   }
  // }
});


// 이미지 로딩 지연(lazy loading) 설정
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;    

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {  
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
});

// 이미지 크기 자동 조정
const slideContainer = $('.img_inside > a');
    const image = $('.img_inside > a img');
    function resizeImage() {
        const slideWidth = slideContainer.width();
        const imageWidth = image.width();
        const slideHeight = slideContainer.height();
        const imageHeight = image.height();
        if (imageWidth > slideWidth) {image.css('width', '90%');} 
        else if (imageWidth > slideWidth) {image.css('width', '80%');} 
        else if (imageWidth > slideWidth) {image.css('width', '70%');} 
        else {image.css('width', '100%');}
        

        if (imageHeight > slideHeight) {image.css('height', '90%');} 
        else if (imageHeight > slideHeight) {image.css('height', '80%');} 
        else if (imageHeight > slideHeight) {image.css('height', '70%');} 
        else {image.css('height', '100%');}

    }
        $(window).on('resize', resizeImage);
        resizeImage();



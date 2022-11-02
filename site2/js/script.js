

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
        name: "The Rebel Path Cello Version",
        path: "music/The Rebel Path Cello Version.mp3",
        // img: "img/img1.jpg",
        singer: "Cyberpunk 2077 OST"
    },
    {
        name: "RESIST AND DISORDER",
        path: "music/RESIST AND DISORDER.mp3",
        // img: "img/img2.jpg",
        singer: "Jason Charles Miller & Jamison Boaz"
    },
    {
        name: "Game of Thrones - House of the Dragon",
        path: "music/House of the Dragon Opening Theme.mp3",
        // img: "img/img3.jpg",
        singer: "Cover by Alina Gingertail"
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
      name: "The Poet And The Muse",
      path: "music/The Poet And The Muse.mp3",
      // img: "img/img5.jpg",
      singer: "Old Gods Of Asgard"
    },
    {
      name: "The Wellerman",
      path: "music/The Wellerman Gingertail Cover.mp3",
      // img: "img/img5.jpg",
      singer: "Cover by Alina Gingertail"
    },
    {
      name: "Tanz mit mir",
      path: "music/Tanz mit mir Gingertail Cover.mp3",
      // img: "img/img5.jpg",
      singer: "Cover by Alina Gingertail"
    },
    {
      name: "Steel for Humans",
      path: "music/Steel for Humans Extended Version.mp3",
      // img: "img/img5.jpg",
      singer: "The Witcher 3 OST"
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
      name: "Dancin (KRONO Remix)",
      path: "music/Aaron Smith  Dancin KRONO Remix.mp3",
      // img: "img/img5.jpg",
      singer: "Aaron Smith"
    },
    {
      name: "HOMM IV - Floating Across Water",
      path: "music/Floating Across Water.mp3",
      // img: "img/img5.jpg",
      singer: "Cover by ChequerChequer"
    },
    {
      name: "Take on Me",
      path: "music/Take on Me.mp3",
      // img: "img/img5.jpg",
      singer: "a-ha"
    },
    {
      name: "one way ticket",
      path: "music/one way ticket.mp3",
      // img: "img/img5.jpg",
      singer: "eruption"
    },
    {
      name: "Hotel California",
      path: "music/Hotel California.mp3",
      // img: "img/img5.jpg",
      singer: "Eagles"
    },
    {
      name: "Hotel California",
      path: "music/Hotel California.mp3",
      // img: "img/img5.jpg",
      singer: "Eagles"
    },
    {
      name: "Stayin Alive",
      path: "music/Stayin Alive.mp3",
      // img: "img/img5.jpg",
      singer: "Bee Gees"
    }

    


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
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
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
})

// ******************************************************************************************
// 게시판 갤러리 댓글 첨삭 스크립트

//1.입력받으면 입력값 초기화
//2. 입력값 댓글로들어가기
//3. 댓글 삭제, 수정기능
//4. 좋아요 투표기능
//5. 타임스템프기능
//6. 무작위 아이디  
//7. 댓글 삭제기능
//8. 댓글 수정기능

const inputBar = document.querySelector("#comment-input");
const rootDiv = document.querySelector("#comments");
const btn = document.querySelector("#submit");
const mainCommentCount = document.querySelector('#count'); //맨위 댓글 숫자 세는거.

//글로벌로 뺏음. 값을 저장하기 위해서.
let idOrVoteCountList=[];


//타임스템프 만들기
function generateTime(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const wDate = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const time = year+'-'+month+'-'+wDate+' '+hour+':'+min+':'+sec;
    return time;

}

//유저이름 발생기
//유저이름은 8글자로 제한.
function generateUserName(){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var makeUsername = '';
    for(let i=0; i<4;i++){
        let index = Math.floor(Math.random(10) * alphabet.length);
        makeUsername += alphabet[index];        
    }
    for(let j=0;j<4;j++){
        makeUsername += "*";
    }
    return makeUsername;    
}

function numberCount(event){       
    console.log(event.target.parentNode.id);
    for(let i=0; i<idOrVoteCountList.length; i++){  
        if(event.target.className === "voteUp"){                       
            
           //event.target.parentNode.id 값이 string이기 때문에 이 값을 Number처리하던지, idOrVoteCountList[i]["commentId"]이 값을 string처리해야 넘어감.
           if(idOrVoteCountList[i]["commentId"].toString() === event.target.parentNode.id){                
               idOrVoteCountList[i]["voteUpCount"]++;               
               event.target.innerHTML = "👍"+idOrVoteCountList[i]["voteUpCount"];
           }       
         
         }else if(event.target.className === "voteDown"){
           if(idOrVoteCountList[i]["commentId"].toString() === event.target.parentNode.id){
               idOrVoteCountList[i]["voteDownCount"]++;
               event.target.innerHTML = "👎"+idOrVoteCountList[i]["voteDownCount"];              
         } 
       }

   } 
}

//기존에 남아있던 id초기화 및 새로추가된부분만 코멘트값 이어서 들어옴.
function initIdCount(){
    for(let i=0; i<idOrVoteCountList.length; i++){
      if(idOrVoteCountList[i]["commentId"] - i > 1){    
        idOrVoteCountList[i]["commentId"] =  idOrVoteCountList[i]["commentId"] - (idOrVoteCountList.length-(i+1));        
      }
    }
}


function deleteComments(){ 
    const btn = event.target;
    const list = btn.parentNode.parentNode;//commentList
    //삭제버튼도 마찬가지임. 여러개니깐 인식을 못함. 상위노드에 id 부여함.    
    //삭제버튼 클릭한 배열의 인덱스를 날리면 됨. 뭐 여기까지 해도 상관없는데...
    for(let i=0; i<idOrVoteCountList.length; i++){
        if(idOrVoteCountList[i]["commentId"].toString() === btn.parentNode.id){
            idOrVoteCountList.splice(btn.parentNode.id-1,1);   
        }

    }
    //그다음에 전체 지우기.
    rootDiv.removeChild(list);   

    //메인댓글 카운트 줄이기. 
    if(mainCommentCount.innerHTML <='0'){
        mainCommentCount.innerHTML = 0;        
    }else{
        mainCommentCount.innerHTML--; 
    }
}

//수정창 모달로 만들기
function modifyComments(event){
    const mBtn = event.target;
    const modal = document.createElement('div');
}


//댓글보여주기
function showComment(comment){
    const userName = document.createElement('div');
    const inputValue = document.createElement('span');
    const showTime = document.createElement('div');
    const voteDiv = document.createElement('div');
    const countSpan = document.createElement('span')
    const voteUp = document.createElement('button');
    const voteDown = document.createElement('button');  
    const commentList = document.createElement('div');  //이놈이 스코프 밖으로 나가는 순간 하나지우면 다 지워지고 입력하면 리스트 다불러옴.
    const modifyBtn = document.createElement('button');
    const spacer = document.createElement('div');
    

    const newId = idOrVoteCountList.length+1; //댓글하나에 달린 ID
    inputValue.id = newId;
    //스페이서만들기
    spacer.className = "spacer";
    //삭제버튼 만들기
    const delBtn = document.createElement('button');
    delBtn.className ="deleteComment";
    delBtn.innerHTML="삭제";    
    commentList.className = "eachComment";
    userName.className="name";
    userName.id = newId; //삭제,수정버튼의 상위노드. 
    inputValue.className="inputValue";
    showTime.className="time";
    voteDiv.className="voteDiv";
    voteDiv.id = newId;
    //수정버튼 만들기
    modifyBtn.className = 'modifyBtn';
    modifyBtn.innerHTML = "수정";
    //유저네임가져오기 
    userName.innerHTML = generateUserName();  
    userName.appendChild(spacer);
    userName.appendChild(modifyBtn);
    userName.appendChild(delBtn);  
    //입력값 넘기기
    inputValue.innerText = comment;
    //타임스템프찍기
    showTime.innerHTML = generateTime();
    countSpan.innerHTML=0;
    //투표창 만들기, css먼저 입혀야함. 
    voteUp.className ="voteUp";
    voteDown.className ="voteDown";     
    voteUp.innerHTML = "👍"+0;         
    voteDown.innerHTML = "👎"+0;       
    voteDiv.appendChild(voteUp);
    voteDiv.appendChild(voteDown);

    //댓글뿌려주기       
    commentList.appendChild(userName);
    commentList.appendChild(inputValue);
    commentList.appendChild(showTime);
    commentList.appendChild(voteDiv);
    rootDiv.prepend(commentList);
   
    //아이디에 따른 투표수카운트. 배열에 접근해서 수정하는 방식으로 해야함.
    let IdAccordingToVoteCount ={
        "commentId" : newId,
        "voteUpCount" : 0,
        "voteDownCount" : 0,
        "commentValue" : comment

    }
    
    idOrVoteCountList.push(IdAccordingToVoteCount);
    console.log(idOrVoteCountList);
    
   initIdCount();
    
    
    voteUp.addEventListener("click",numberCount);
    voteDown.addEventListener("click",numberCount);
    delBtn.addEventListener("click",deleteComments);
    modifyBtn.addEventListener("click",modifyComments);

}



//버튼만들기+입력값 전달
function pressBtn(){ 

   const currentVal = inputBar.value;
   
   if(!currentVal.length){
      alert("댓글을 입력해주세요!!");
   }else{
      showComment(currentVal);  
      mainCommentCount.innerHTML++;
      inputBar.value ='';
   }
}

btn.onclick = pressBtn;


//수정창 모달로 만들기
function modifyComments(event){ 
    
  const mBtn = event.target;

  //모달창 만들기
    const modal = document.createElement('div')
    const modalOverlay = document.createElement('div');
    const modalContent = document.createElement('div');
    const cancleBtn = document.createElement('button');
    const okBtn = document.createElement('button');
    const input = document.createElement('input');
    const span = document.createElement('span');
    modal.className = "modal hidden";
    modalOverlay.className ="modal__overlay";
    modalContent.className ="modal__content";
    okBtn.id = "ok";
    okBtn.innerHTML="수정";
    cancleBtn.id = "cancle";
    cancleBtn.innerHTML = "취소";
    input.id = "modifyVal";
    input.placeholder = "변경할 내용을 입력하세요";
    span.id ="inBtn";

    span.appendChild(okBtn);
    span.appendChild(cancleBtn);
    modalContent.appendChild(input);
    modalContent.appendChild(span);
    modal.appendChild(modalOverlay);
    modal.appendChild(modalContent);
    rootDiv.appendChild(modal);  

    modal.classList.remove("hidden");
    
    cancleBtn.addEventListener("click",function(){
      modal.classList.add("hidden");
    });
    
   
    okBtn.addEventListener("click",function(event){       
      console.dir(mBtn.parentNode.parentNode.children[1]);       

      for(var i=0; i<idOrVoteCountList.length; i++){                  
          if(idOrVoteCountList[i]["commentId"].toString() === mBtn.parentNode.id){                
              idOrVoteCountList[i]["commentValue"] = input.value;  
              //수정버튼누르면 변경.              
              mBtn.parentNode.parentNode.children[1].innerHTML = input.value;
              modal.classList.add("hidden");                 
          }    
      }
    });

}
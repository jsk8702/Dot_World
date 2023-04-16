// 자바스크립트 설정

// 1. 이미지 슬라이드 효과(https://www.youtube.com/watch?v=-1mJGh627R4)
// 슬라이드1 설정
let currSlide1 = 1;
showSlide1(currSlide1);

function button_click1(num){
  showSlide1((currSlide1 += num));
}

function showSlide1(num){
  const slides = document.querySelectorAll(".slide1");
  if(num > slides.length){
    currSlide1 = 1;
  } if(num<1){
    currSlide1 = slides.length;
  }

  for(let i=0; i < slides.length; i++){
    slides[i].style.display="none";
  }slides[currSlide1 - 1].style.display="block";
}


// 슬라이드2 설정
let currSlide2 = 1;
showSlide2(currSlide2);

function button_click2(num){
  showSlide2((currSlide2 += num));
}

function showSlide2(num){
  const slides = document.querySelectorAll(".slide2");
  if(num > slides.length){
    currSlide2 = 1;
  } if(num<1){
    currSlide2 = slides.length;
  }

  for(let i=0; i < slides.length; i++){
    slides[i].style.display="none";
  }slides[currSlide2 - 1].style.display="block";
}


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


// 제이쿼리 설정
$(document).ready(function () {
    
});
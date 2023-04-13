// 자바스크립트 설정

// 1. 이미지 슬라이드 효과(https://www.youtube.com/watch?v=-1mJGh627R4)
let currSlide = 1;
showSlide(currSlide);

function button_click(num){
  showSlide((currSlide += num));
}

function showSlide(num){
  const slides = document.querySelectorAll(".slide");
  if(num > slides.length){
    currSlide = 1;
  } if(num<1){
    currSlide = slides.length;
  }

  for(let i=0; i < slides.length; i++){
    slides[i].style.display="none";
  }slides[currSlide - 1].style.display="block";
}

// 제이쿼리 설정
$(document).ready(function () {
    
});
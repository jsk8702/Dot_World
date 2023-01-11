// 자바스크립트 설정

// 1. 이미지 슬라이드 효과
// https://nohack.tistory.com/123

// 요소 & 사이즈
const list = document.querySelector('.art_body_frame_list');
const listScrollWidth = list.scrollWidth;
const listClientWidth = list.clientWidth;

// 이벤트마다 갱신될 값
let startX = 0;
let nowX = 0;
let endX = 0;
let listX = 0;

// 이벤트 핸들러 적용
// 스크롤 시작 이벤트 구현
const onScrollStart = (e) => {
  startX = getClientX(e);
    window.addEventListener('mousemove', onScrollMove);
    window.addEventListener('touchmove', onScrollMove);
    window.addEventListener('mouseup', onScrollEnd);
    window.addEventListener('touchend', onScrollEnd);
};

// 스크롤 진행 이벤트 구현
const onScrollMove = (e) => {
  nowX = getClientX(e);
  setTranslateX(listX + nowX - startX);
};

// 스크롤 종료 이벤트 구현
const onScrollEnd = (e) => {
  endX = getClientX(e);
  listX = getTranslateX();
  if (listX > 0) {
    setTranslateX(0);
    list.style.transition = `all 0.3s ease`;
    listX = 0;
  } else if (listX < listClientWidth - listScrollWidth) {
    setTranslateX(listClientWidth - listScrollWidth);
    list.style.transition = `all 0.3s ease`;
    listX = listClientWidth - listScrollWidth;
  }

  window.removeEventListener('mousedown', onScrollStart);
  window.removeEventListener('touchstart', onScrollStart);
  window.removeEventListener('mousemove', onScrollMove);
  window.removeEventListener('touchmove', onScrollMove);
  window.removeEventListener('mouseup', onScrollEnd);
  window.removeEventListener('touchend', onScrollEnd);
  window.removeEventListener('click', onClick);

  setTimeout(() => {
    bindEvents();
    list.style.transition = '';
  }, 300);
};

// 클릭 이벤트 구현
const onClick = (e) => {
  if (startX - endX !== 0) {
    e.preventDefault();
  }
};

// 유틸 함수 정리
const getClientX = (e) => {
    const isTouches = e.touches ? true : false;
    return isTouches ? e.touches[0].clientX : e.clientX;
  };
  
  const getTranslateX = () => {
    return parseInt(getComputedStyle(list).transform.split(/[^\-0-9]+/g)[5]);
  };
  
  const setTranslateX = (x) => {
    list.style.transform = `translateX(${x}px)`;
  };
  
//  클릭 이벤트 연결
const bindEvents = () => {
    list.addEventListener('mousedown', onScrollStart);
    list.addEventListener('touchstart', onScrollStart);
    list.addEventListener('click', onClick);
  };
  bindEvents();
  



// 제이쿼리 설정
$(document).ready(function () {
    
});
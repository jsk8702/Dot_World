

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
  // $(".nav_inner_sub_main").mouseleave(function(){
  //   $(this).find(".nav_inner_sub_menu").stop().slideUp();
  // });

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
// 자바스크립트 설정

// 1. 이미지 슬라이드 효과(swiper slide 설정)
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


// 2. 이미지 로딩 지연(lazy loading) 설정
// document.addEventListener("DOMContentLoaded", function() {
//   var lazyloadImages;    

//   if ("IntersectionObserver" in window) {
//     lazyloadImages = document.querySelectorAll(".lazy");
//     var imageObserver = new IntersectionObserver(function(entries, observer) {
//       entries.forEach(function(entry) {
//         if (entry.isIntersecting) {
//           var image = entry.target;
//           image.src = image.dataset.src;
//           image.classList.remove("lazy");
//           imageObserver.unobserve(image);
//         }
//       });
//     });

//     lazyloadImages.forEach(function(image) {
//       imageObserver.observe(image);
//     });
//   } else {  
//     var lazyloadThrottleTimeout;
//     lazyloadImages = document.querySelectorAll(".lazy");
    
//     function lazyload () {
//       if(lazyloadThrottleTimeout) {
//         clearTimeout(lazyloadThrottleTimeout);
//       }    

//       lazyloadThrottleTimeout = setTimeout(function() {
//         var scrollTop = window.pageYOffset;
//         lazyloadImages.forEach(function(img) {
//             if(img.offsetTop < (window.innerHeight + scrollTop)) {
//               img.src = img.dataset.src;
//               img.classList.remove('lazy');
//             }
//         });
//         if(lazyloadImages.length == 0) { 
//           document.removeEventListener("scroll", lazyload);
//           window.removeEventListener("resize", lazyload);
//           window.removeEventListener("orientationChange", lazyload);
//         }
//       }, 20);
//     }

//     document.addEventListener("scroll", lazyload);
//     window.addEventListener("resize", lazyload);
//     window.addEventListener("orientationChange", lazyload);
//   }
// });


// 제이쿼리 설정
$(document).ready(function () {
    
});
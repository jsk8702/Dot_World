
// lazy loading 기능으로 안보이는 영역의 이미지는 불러오지 않아서 렉이 줄어든다.
document.addEventListener("DOMContentLoaded", function () {
    var lazyloadImages = document.querySelectorAll("img.lazy");
    var lazyloadThrottleTimeout;

    function lazyload() {
        if (lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
        }

        lazyloadThrottleTimeout = setTimeout(function () {
            var scrollTop = window.pageYOffset;
            lazyloadImages.forEach(function (img) {
                if (img.offsetTop < (window.innerHeight + scrollTop)) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                }
            });
            if (lazyloadImages.length == 0) {
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationChange", lazyload);
            }
        }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
});



// 기타 제이쿼리 설정
$(document).ready(function () {

    //위로 가기 버튼이 첫 화면 내려가면 나오고 그 다음부터 누르면 맨위로 간다.
    $(window).scroll(function () {
        //화면 스크롤 값을 알아본다.
        var ht = $(this).scrollTop();
        //        console.log(sc);

        //화면 스크롤이 200 이상 내려가면 네비게이션이 탑에 고정된다.
        if (ht > 469) {
            $('header .head_btn').removeClass('on');
            $('header .head_btn').addClass('on');
        };
        //화면 스크롤이 200 이상 올라가면 네비게이션이 원 위치로 돌아간다.
        if (ht < 469) {
            $('header .head_btn').removeClass('on');
        };
    });

    //위로 가기 버튼을 클릭하면 사이트 탑으로 이동한다.
    $('header .head_btn').click(function (e) {
        //a태그 성질을 죽여서 누르면 화면 위로 이동하는 문제해결
        e.preventDefault();

        var ht = $('header').height();
        //그냥 ht 하면 header 아래에 온다. header의 전체높이 + section 의 padding-top 200을 계산해서 화면 위로 가라고 -200을 줬다.
        $('html, body').stop().animate({ 'scrollTop': ht - 200 }, 800);
    });


    //헤더 메뉴를 누르면 해당 section이 나온다.
    $('.header_nav > li').click(function (e) {
        e.preventDefault();

        //헤더의 li 인덱스 번호를 가져온다. 
        var uNum = $(this).index();

        $('section').removeClass('active');
        // 홈버튼 빼고 3개니까 인덱스가 1부터 시작해야 되서 1 더한다.
        $('section').eq(uNum).addClass('active');

        //탭 메뉴 색상이 클릭하면 변경된다.
        $('.header_nav > li').removeClass('on');
        $(this).addClass('on');
    });

});
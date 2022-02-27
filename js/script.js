
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
    // $(window).scroll(function () {
    //화면 상단의 스크롤 값을 알아본다.
    // var ht = $(this).scrollTop();
    //        console.log(sc);

    // 화면 하단의 스크롤 값을 알아본다.




    //화면 스크롤이 200 이상 내려가면 네비게이션이 탑에 고정된다.
    // if (ht > 469) {
    //     $('header .head_btn_up').removeClass('on');
    //     $('header .head_btn_down').removeClass('on');
    //     $('header .head_btn_up').addClass('on');
    //     $('header .head_btn_down').addClass('on');
    // };
    //화면 스크롤이 200 이상 올라가면 네비게이션이 원 위치로 돌아간다.
    // if (ht < 469) {
    //     $('header .head_btn_up').removeClass('on');
    //     $('header .head_btn_down').removeClass('on');
    // };
    // });

    //위로 가기 버튼을 클릭하면 사이트 탑으로 이동한다.
    // $('header .head_btn_up').click(function (e) {
    //a태그 성질을 죽여서 누르면 화면 위로 이동하는 문제해결
    // e.preventDefault();

    // var ht = $('header').height();
    //그냥 ht 하면 header 아래에 온다. header의 전체높이 + section 의 padding-top 200을 계산해서 화면 위로 가라고 -200을 줬다.
    // $('html, body').stop().animate({ 'scrollTop': ht - 200 }, 800);
    // });


    // 상하단 버튼 설정
    /******* 스크롤 감지하여 버튼이 나타나고 사라지게 합니다 ******/
    $(window).scroll(function () {

        /* 
            현재 스크롤이 최상단으로부터 조금 내려왔을 경우
            UP 버튼을 나타나게 합니다.
        */
        if ($(this).scrollTop() > 100) {
            $('#upBtn').fadeIn();
        }

        /* 
            현재 스크롤이 최상단 기준으로 올라왔을 경우
            UP 버튼을 사라지게 합니다.
        */
        else {
            $('#upBtn').fadeOut();
        }

        /* 
            현재 스크롤이 최하단으로부터 조금 올라왔을 경우
            DOWN 버튼을 나타나게 합니다.
        */
        if ($(this).scrollTop() < ($(document).height() - $(window).height() - 100)) {
            $('#downBtn').fadeIn();
        }

        /* 
            현재 스크롤이 최하단 기준으로 내려왔을 경우
            DOWN 버튼을 사라지게 합니다.
        */
        else {
            $('#downBtn').fadeOut();
        }

    });
    /*****************************************************************/


    /* 
        UP버튼 클릭 시 자연스럽게 최상단으로 올라가는 효과를 줍니다.
        400 -> 0.4초 
    */
    $('#upBtn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 400);
        return false;
    });

    /* 
        DOWN버튼 클릭 시 자연스럽게 최하단으로 내려가는 효과를 줍니다. 
    */
    $('#downBtn').click(function () {
        $('html, body').animate({ scrollTop: $(document).height() }, 400);
        return false;
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
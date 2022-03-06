
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

        $('section').eq(uNum).addClass('active');

        //탭 메뉴 색상이 클릭하면 변경된다.
        $('.header_nav > li').removeClass('on');
        $(this).addClass('on');
    });

    //act1 section의 번호를 누르면 해당 section이 나온다.
    $('.act1 .section_btn ul li').click(function (e) {
        e.preventDefault();

        //섹션 번호메뉴의 li 인덱스 번호를 가져온다. 
        var uNum2 = $(this).index();

        $('.act1 .section_inner').removeClass('active');

        $('.act1 .section_inner').eq(uNum2).addClass('active');

        //섹션 번호 메뉴를 선택한 번호의 색상이 바뀐다.
        $('.section_btn > ul > li').removeClass('on');
        $(this).addClass('on');
    });

    //act2 section의 번호를 누르면 해당 section이 나온다.
    $('.act2 .section_btn ul li').click(function (e) {
        e.preventDefault();

        //섹션 번호메뉴의 li 인덱스 번호를 가져온다. 
        var uNum2 = $(this).index();

        $('.act2 .section_inner').removeClass('active');

        $('.act2 .section_inner').eq(uNum2).addClass('active');

        //섹션 번호 메뉴를 선택한 번호의 색상이 바뀐다.
        $('.section_btn > ul > li').removeClass('on');
        $(this).addClass('on');
    });

    //act3 section의 번호를 누르면 해당 section이 나온다.
    $('.act3 .section_btn ul li').click(function (e) {
        e.preventDefault();

        //섹션 번호메뉴의 li 인덱스 번호를 가져온다. 
        var uNum2 = $(this).index();

        $('.act3 .section_inner').removeClass('active');

        $('.act3 .section_inner').eq(uNum2).addClass('active');

        //섹션 번호 메뉴를 선택한 번호의 색상이 바뀐다.
        $('.section_btn > ul > li').removeClass('on');
        $(this).addClass('on');
    });

    // menu 클래스 바로 하위에 있는 a 태그를 클릭했을때
    $(".header_menu li").click(function () {
        var submenu = $("ul.btn_list");

        // submenu 가 화면상에 보일때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
        if (submenu.is(":visible")) {
            submenu.slideUp();
        } else {
            submenu.slideDown();
        }
    });

});
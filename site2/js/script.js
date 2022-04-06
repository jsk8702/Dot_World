

// 제이쿼리 설정
$(document).ready(function () {


    //헤더 메뉴를 누르면 해당 section이 나온다.
    $('header .nav li').click(function (e) {
        e.preventDefault();

        //헤더의 li 인덱스 번호를 가져온다. 
        var uNum = $(this).index();

        $('section article').removeClass('active');

        $('section article').eq(uNum).addClass('active');

        //탭 메뉴 색상이 클릭하면 변경된다.
        $('header .nav li').removeClass('on');
        $(this).addClass('on');
    });
});
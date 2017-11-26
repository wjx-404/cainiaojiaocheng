// 导航栏效果
$(function() {
    $('#index-nav .c').on('click', function() {
        $(".wjx-xxk").attr("style", "display:block");
        $("#wjx-sc").attr("style", "display:block");
    })
});
$(function() {
    $('#index-nav .s').on('click', function() {
        $("#wjx-sc").attr("style", "display:none");
        $(".wjx-xxk").attr("style", "display:block");
        $("#wjx-ks").attr("style", "display:block");
    })
});
$(function() {
    $('.navgo').on('click', function() {
        $(".wjx-xxk").attr("style", "display:none");
    })
});
$(".navter").on("click", function() {
    var _index = $(this).index();
    $(".triangle").eq(_index).css("display", "block").siblings().css("display", "none");
});
// 主内容效果
$(".deg").on("click", function() {
    var _index = $(this).index();
    $(".cater").eq(_index).css("display", "block").siblings().css("display", "none");
});
$(".tab").on("click", function() {
        $(".cater").css("display", "block");
    })
    // 侧栏固定窗口效果
$(function() {
    $(".fixed-btn .qrcode").mouseover(function() {
        $(".hove").attr("style", "display:block");
    });
    $(".fixed-btn .qrcode").mouseout(function() {
        $(".hove").attr("style", "display:none");
    });
});

$('.fixed-btn .go-top').on('click', function(event) {
    // alert(1);
    event.preventDefault();
    $('body').animate({
        scrollTop: 0
    }, 1000);
});

// 登录注册界面效果
$(function() {
    $('.entera .modal-content .pull-right').on('click', function() {
        $(".den").attr("style", "display:none");
        $(".zhuce").attr("style", "display:block");
        $(".zhuc").css("background-color", "white");
        $(".zhuc").css("color", "#333434");
        $(".zh").css("color", "#9FBE8A");
        $(".zh").css("background-color", "#E8F1E2");
    })
});

$(function() {
    $('.entera .modal-content .pull-left').on('click', function() {
        $(".den").attr("style", "display:block");
        $(".zhuce").attr("style", "display:none");
        $(".zhuc").css("background-color", "#E8F1E2");
        $(".zhuc").css("color", "#9FBE8A");
        $(".zh").css("color", "#333434");
        $(".zh").css("background-color", "white");
    })
});
/*自动轮播*/
$(document).ready(function() {
    var w = $("#lunbo").width();
    var i = 0;
    $("#igs").on("swipeleft", function() {
        clearInterval(timer);
        if (i < 2) {
            $(this).animate({
                left: '-=' + w + 'px'
            }, 300);
            i++;
            $("#tabs li").eq(i).addClass("now").siblings().removeClass("now");
        }
    });
    $("#igs").on("swiperight", function() {
        clearInterval(timer);
        if (i > 0) {
            $(this).animate({
                left: '+=' + w + 'px'
            }, 300);
            i--;
            $("#tabs li").eq(i).addClass("now").siblings().removeClass("now");
        }
    });

    startTimer(); //后台播放
    //自动播放
    var scroleft = true;

    function startTimer() {
        timer = window.setInterval(function() {
            if (scroleft == true) {
                if (i < 2) {
                    $("#igs").animate({
                        left: '-=' + w + 'px'
                    }, 300);
                    i++;
                    $("#tabs li").eq(i).addClass("now").siblings().removeClass("now");
                } else {
                    scroleft = false;
                }
            } else {
                if (i > 0) {
                    $("#igs").animate({
                        left: '+=' + w + 'px'
                    }, 300);
                    i--;
                    $("#tabs li").eq(i).addClass("now").siblings().removeClass("now");
                } else {
                    scroleft = true;
                }
            }
        }, 2000);
    }
});
/********************************/
/*自动tab切换*/
var i = 0;
var timer;
$(document).ready(function() {
    $("#title>li").click(function() {
        clearInterval(timer);
        i = $(this).index();
        $(this).addClass("action").siblings().removeClass("action");
        $("#con li").eq(i).addClass("now").siblings().removeClass("now");
    });
});
startTimer();

function startTimer() {
    timer = window.setInterval(function() {
        if (i < 2) {
            i++;
        } else {
            i = 0;
        }
        $("#title li").eq(i).addClass("action").siblings().removeClass("action");
        $("#con li").eq(i).addClass("now").siblings().removeClass("now");
    }, 5000);
}

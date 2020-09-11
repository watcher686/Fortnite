/*自动tab切换*/
var i = 0;
var timer;
$(document).ready(function() {
    $("#title>li").click(function() {
        clearInterval(timer);
        i = $(this).index();
        $(this).addClass("action").siblings().removeClass("action");
        $("#con>li").eq(i).addClass("now").siblings().removeClass("now");
    });
});
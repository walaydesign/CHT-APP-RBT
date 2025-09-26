$(".song-pic_icon").click(function () {
    $(this).parents(".song-pic").toggleClass("playing");
});

$(".produce-sec_head").click(function () {
    $(this).find(".produce-sec_icon").toggleClass("active");
    $(this).parents(".produce-sec").find(".produce-sec_body").slideToggle(300);
});
var header = $(".main .index");
var title = $(".main .index .title");
var moreIcon = $(".main .iconList .more");
var defaultIconList = $(".main .iconList .default");
var clickBefore = $(".main .iconList p.click-before");
var moveArea = $(".main .iconList .moveArea");

$(window).resize(function() {
    var size = window.innerWidth;
    
    if (size < 1025) {
        title.addClass("width-1024");
    } else {
        title.removeClass("width-1024");
    }
});

$(window).scroll(function() {
    var scrollVal = $(document).scrollTop();

    if (scrollVal > 800) {
        header.addClass("scroll-800");
    } else {
        header.removeClass("scroll-800");
    }
});

moreIcon.click(function() {
    if ($(this).hasClass("spin") === true) {
        $(this).removeClass("spin");
        defaultIconList.removeClass("fadeOut");
        // clickBefore.addClass("fadeOut");
        moveArea.removeClass("click-after");
    } else {
        $(this).addClass("spin");
        defaultIconList.addClass("fadeOut");
        // clickBefore.removeClass("fadeOut");
        moveArea.addClass("click-after");
    }

    if (clickBefore.hasClass("click-after") === false) {
        clickBefore.addClass("click-after");
    } else {
        clickBefore.removeClass("click-after");
    }
});
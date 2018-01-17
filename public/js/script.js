$("nav .right").click(function(){
    console.log("Menu Toggled");
    var menuState = $("nav").hasClass("open");
    if (menuState){
        $("nav").animate({
            left: "-275px"
        }, 1000, function(){
            $("nav").removeClass("open");
            $("nav svg use").each(function(){
                $(this).attr('xlink:href', '../images/open-iconic.svg#chevron-right');
            });
        });
    } else {
        $("nav").animate({
            left: "0px"
        }, 1000, function(){
            $("nav").addClass("open");
            $("nav svg use").each(function(){
                $(this).attr('xlink:href', '../images/open-iconic.svg#chevron-left');                
            });
        });
    }
});

$("div#content").click(function(){
    var menuState = $("nav").hasClass("open");
    if (menuState){
        $("nav").animate({
            left: "-275px"
        }, 1000, function(){
            $("nav").removeClass("open");
            $("nav svg use").each(function(){
                $(this).attr('xlink:href', '../images/open-iconic.svg#chevron-right');
            });
        });
    }
});

var tileClicked = 0

$('.card svg').click(function(){
    var imgSource = $(this).siblings("img").attr("src");
    var imgCaption = $(this).siblings(".card-body").children("")
    $("#fullscreen img").attr("src", imgSource);

});

$('.caption svg').click(function(){

});

// $("#content").mCustomScrollbar({
//     // axis: "yx",
//     scrollButtons:{ enable: true },
//     theme: "rounded"
// });

var s = skrollr.init();
s.refresh($('section.px'));

$(window).on("load",function(){
    $('#content svg').hover(function(){
        $(this).addClass("shadowBox");
    }, function(){
        $(this).removeClass("shadowBox");
    });
    $(".card").each(function(index, item){
        var width = $(item).width();
        console.log(width);
        $(item) .height(width);
    });
    if (typeof imgList !== 'undefined') {
        console.log("Imagelist: " + imgList);
    }
    if (typeof imageID !== 'undefined') {
        var imgname = imgList[imageID];
        console.log("NAME: " + imgname);
    }
    if (typeof galContent !== 'undefined') {
       
    }
    // If Fullscreen loads
    if (window.location.pathname.includes("/gallery/") && (window.location.pathname.length > 9)){
        var height = $("#fullscreen img").height();
        var centerW = ($("#fullscreen img").width() + 300)/2;
        $("#fullscreen .caption").height(height - 100).css("right", "calc(50vw - "+centerW+"px)");
        $("#fullscreen img").css("left","calc(50vw - "+centerW+"px)");
    }
});
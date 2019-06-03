$(document).ready(function () {

    $('.header-mobile__menu').on('click',function(){
    $('.header-mobile__menu').toggleClass("menu_open");
    $('.menu-mobile').toggleClass("menu-open");
    

});
    
 $(".bath-slider__block-item").click(function() { 
    if (this.id == "slide-1") {
        $(".choice-img").attr("src", "../img/bathhouse/bathhouse-slider-1.png");
        $('.choice-slider').removeClass("choice-slider");
        $(this).addClass("choice-slider");
    } else if (this.id == "slide-2") {
        $(".choice-img").attr("src", "../img/bathhouse/slider-choice.png");
        $('.choice-slider').removeClass("choice-slider");
        $(this).addClass("choice-slider");
    } else if (this.id == "slide-3") {
        $(".choice-img").attr("src", "../img/bathhouse/bathhouse-slider-3.png");
        $('.choice-slider').removeClass("choice-slider");
        $(this).addClass("choice-slider");
    } else if (this.id == "slide-4") {
        $(".choice-img").attr("src", "../img/bathhouse/bathhouse-slider-4.png");
        $('.choice-slider').removeClass("choice-slider");
        $(this).addClass("choice-slider");
    } else if (this.id == "slide-5") {
        $(".choice-img").attr("src", "../img/bathhouse/bathhouse-slider-5.png");
        $('.choice-slider').removeClass("choice-slider");
        $(this).addClass("choice-slider");
    } else if (this.id == "slide-6") {
        $(".choice-img").attr("src", "../img/bathhouse/bathhouse-slider-6.png");
        $('.choice-slider').removeClass("choice-slider");
        $(this).addClass("choice-slider");
    } 

});
$("[name = phone]").mask("+7 (999) 999-9999");


$(".modal-succes__block-close").on("click", function(){
    $(".modal-succes").removeClass("open");
});


$(".bath-form__form").on('submit', function(){
    var phone = $("[name = phone]").val(),
        name = $("[name = fio]").val(),
        mail = $("[name = mail]").val(),
        text = $("[name = text]").val();

        $.ajax({
            url: "../php/send.php",
            data: {fio:name, phone:phone, mail:mail, text:text},
            success: function(){
                $(".modal-succes").addClass("open");
            }
        });
        return false;
});

$(".owl-carousel").owlCarousel({
      loop:false,
      nav:true,
      margin:13,
      navText:["<div class='prev-slider'></div>","<div class='next-slider'></div>"],
      items: 6,
      responsive:{
        0:{
            items:1,
            margin:0,
            startPosition:1,
            loop:true
        },
        480:{
            items:3,
            margin:0
        },
        768:{
            items:4
        },
        1300:{
            items:6
        }
    }
    });
});
$(document).ready(function () {

$('.header-mobile__menu').on('click',function(){
  $('.header-mobile__menu').toggleClass("menu_open");
  $('.menu-mobile').toggleClass("menu-open");
});

$(".modal-succes__block-close").on("click", function(){
    $(".modal-succes").removeClass("open");
    $(".modal").removeClass("modal-open");
});

$("[name = phone]").mask("+7 (999) 999-9999");
$(".contacts-feedback__form").on('submit', function(){
    var name = $("[name = fio]").val(),
        mail = $("[name = mail]").val(),
        text = $("[name = text]").val();

        $.ajax({
            url: "../php/send.php",
            data: {fio:name, mail:mail, text:text},
            success: function(){
                $(".modal-succes").addClass("open");
            }
        });
        return false;
});

$(".main-button").on("click", function(){
    $(".modal").addClass("modal-open");
});

$(".modal__block-close").on("click", function(){
    $(".modal").removeClass("modal-open");
});

$(".present-info__button-rooms").on('click', function() {
    window.open('rooms/index.html')
});

$(".present-info__button-bath").on('click', function() {
    window.open('bathhouse/index.html')
});

$(".attractions-button").on('click', function() {
    window.open('attractions/index.html')
});

$("#modal").on('submit', function(){
    var phone = $("[name = phone]").val(),
        name = $("[name = fio]").val(),
        mail = $("[name = mail]").val(),
        text = $("[name = text]").val();

        $.ajax({
            url: "php/send.php",
            data: {fio:name, phone:phone, mail:mail, text:text},
            success: function(){
                $(".modal-succes").addClass("open");
            }
        });
        return false;
});

});


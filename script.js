//Guided Practice

$(".spanish").click(function() {
    let n = $(".name").val();
    $(".message").text("hola"+" "+n);
    $("body").css("background-color","yellow");
});
$(".french").click(function() {
    let n = $(".name").val();
    $(".message").text("salut"+" "+n);
    $("body").css("background-color","blue");
});
$(".chinese").click(function() {
    let n = $(".name").val();
    $(".message").text("你好"+" "+n);
    $("body").css("background-color","red");
});
$(".english").click(function() {
    let n = $(".name").val();
    $(".message").text("hi"+" "+n);
    $("body").css("background-color","white");
});




//Independent Practice 

$(".korean").click(function() {
    let n = $(".name").val();
    $(".message").text("안녕"+" "+n);
    $("body").css("background-color","black");
});



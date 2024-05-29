Num1 = Math.floor(Math.random()*6)+1;

diceimg1 = "img/dice" + Num1 + ".png";

$("#img1").attr("src",diceimg1);


Num2 = Math.floor(Math.random()*6)+1;

diceimg2 = "img/dice" + Num2 + ".png";

$("#img2").attr("src",diceimg2);


//Winner code

if(Num1 > Num2){
    $("h2").text("Player1 is Winner");
}
else if(Num1 < Num2){
    $("h2").text("Player2 is Winner");
}
else{
    $("h2").text("Draw");
}
//Dice Roll
$("button").click(function () {
    location.reload(true);
});


// document.querySelector("h3").style.color = "yellow";
// console.log($("h3").css("color","yellow"));
// console.log($("h3").addClass("head3 class"));

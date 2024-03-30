let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let restart = document.querySelector(".restart");
let cir = gsap.to(".box1", {
    y : -200,
    duration : 5.5,
    backgroundColor : "red",
    repeat : -1,
    yoyo : true,
});
play.addEventListener("click",() => cir.play());
restart.addEventListener("click",() => cir.restart());
pause.addEventListener("click",() => cir.pause());
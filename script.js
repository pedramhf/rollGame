btn = document.getElementById("btn").addEventListener("click", myFounction);
function myFounction() {
  document.getElementById("cubic1").style.animation = "cubic1 2s linear";
  document.getElementById("cubic2").style.animation = "cubic2 2s linear";
  document.getElementById("message").innerHTML = "";

  let userSideNo = Math.floor(Math.random(0, 1) * 6);
  let userSideNo2 = Math.floor(Math.random(0, 1) * 6);

  const userSideArray = [
    '<span class="cc"></span>',
    '<span class="lc"></span><span class="rc"></span>',
    '<span class="cc"></span><span class="lt"></span><span class="rb"></span>',
    '<span class="lt"></span><span class="lb"></span><span class="rt"></span><span class="rb"></span>',
    '<span class="cc"></span><span class="lt"></span><span class="lb"></span><span class="rt"></span><span class="rb"></span>',
    '<span class="lt"></span><span class="lc"></span><span class="lb"></span><span class="rt"></span><span class="rc"></span><span class="rb"></span>',
  ];
  var userSide = userSideArray[userSideNo];
  var userSide2 = userSideArray[userSideNo2];

  setTimeout(() => {
    document.getElementById("side6").innerHTML = userSide;
    document.getElementById("side26").innerHTML = userSide2;
  }, 1000);
  setTimeout(() => {
    document.getElementById("cubic1").style.animation = "";
    document.getElementById("cubic2").style.animation = "";
    if (userSideNo == 5 && userSideNo2 == 5) {
      document.getElementById("message").innerHTML =
        "Congratulation! Check Your Email Now";
    } else {
      document.getElementById("message").innerHTML =
        "Try Again , No Big Deal! ";
    }
  }, 2000);
}

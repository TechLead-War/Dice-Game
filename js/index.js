  function play(){
    var Player1 = Math.floor(Math.random() * 6) + 1;
    var Img1 = "img/dice" + Player1 + ".png";
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", Img1);

    var Player2 = Math.floor(Math.random() * 6) + 1;
    var Img2 = "img/dice" + Player2 + ".png";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", Img2);

    if(Player1 > Player2){
      document.querySelector("h1").innerHTML = "🚩 Player1 Wins";

      var p1 = document.querySelectorAll("h3")[0].innerHTML;
      var last = parseInt(p1[p1.length - 1]) + 1;
      var neww = p1.substr(0,p1.length - 1) + last;
      document.querySelectorAll("h3")[0].innerHTML = neww;
    }
    else{
      document.querySelector("h1").innerHTML = "Player2 Wins 🚩";

      var p2 = document.querySelectorAll("h3")[1].innerHTML;
      var last = parseInt(p2[p2.length - 1]) + 1;
      var neww = p2.substr(0,p2.length - 1) + last;
      document.querySelectorAll("h3")[1].innerHTML = neww;
    }


}

let options = ["spock", "lizard", "rock", "paper", "scissors"];
var score = 0;

function handleClick(button){
  getWinner(button);
}

function isString(x) {
  return Object.prototype.toString.call(x) === "[object String]"
}

function onDeploy(){
    var para = new URLSearchParams(window.location.search);
    score = para.get("score");
    var i = isString(score);
    console.log(i);
    if(i){
      document.getElementById("score").innerHTML = score;
    }else{
      score = 0;
    }
}

function getWinner(userSelecttion){
  var randVar = Math.floor(Math.random()*5)
  var computerSelection = options[randVar];
  
  var para = new URLSearchParams();
  para.append("score", score.toString());
  para.append("user", userSelecttion.toString());
  para.append("npc", computerSelection.toString());
  location.href = "./test.html?" + para.toString();
}

  function openPopup() {
    document.getElementById("modal").classList.add("abrir");
    document.getElementById("modal").classList.remove("cerrar");
  }

  function closePopup() {
    document.getElementById("modal").classList.remove("abrir");
    document.getElementById("modal").classList.add("cerrar");
  }
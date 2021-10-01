var score;

function test(){
    var para = new URLSearchParams(window.location.search);
    score = para.get("score");
    var userSelection = para.get('user');
    var computerSelection = para.get('npc');
    
    var imageUser = "./images/icon-" + userSelection + ".svg";
    document.getElementById('user').src = imageUser;

    var computer = "./images/icon-" + computerSelection + ".svg";
    document.getElementById('pc').src = computer;

    var colorUser, colorComputer;
    switch(userSelection){
        case "spock":
            document.getElementById("userPick").classList.add("cyanCircleUser");
            break;
        case "lizard":
            document.getElementById("userPick").classList.add("purpleCircleUser");
            break;
        case "rock":
            document.getElementById("userPick").classList.add("redCircleUser");
            break;
        case "paper":
            document.getElementById("userPick").classList.add("blueCircleUser");
            break;
        case "scissors":
            document.getElementById("userPick").classList.add("orangeCircleUser");
            break;
    }

    switch(computerSelection){
        case "spock":
            document.getElementById("computerPick").classList.add("cyanCircleComputer");
            break;
        case "lizard":
            document.getElementById("computerPick").classList.add("purpleCircleComputer");
            break;
        case "rock":
            document.getElementById("computerPick").classList.add("redCircleComputer");
            break;
        case "paper":
            document.getElementById("computerPick").classList.add("blueCircleComputer");
            break;
        case "scissors":
            document.getElementById("computerPick").classList.add("orangeCircleComputer");
            break;
    }

    switch(userSelection){
      case "spock":
        if (computerSelection == "scissors" || computerSelection == "rock"){
          score++;
          document.getElementById("score").innerHTML = score;
          document.getElementById("result").innerHTML = "YOU WIN";
        }else if(userSelection == computerSelection){
            document.getElementById("result").innerHTML = "IT'S A TIE";
        }
        else{
          if(score != 0){
            score--;
          }
          document.getElementById("score").innerHTML = score;
          document.getElementById("result").innerHTML = "YOU LOOSE";
        }
        break;
      case "lizard":
        if ((computerSelection == "spock") || (computerSelection == "paper")){
          score++;
          document.getElementById("score").innerHTML = score;
          document.getElementById("result").innerHTML = "YOU WIN";
        }else if(userSelection == computerSelection){
            document.getElementById("result").innerHTML = "IT'S A TIE";
        }
        else{
          if(score != 0){
            score--;
          }
          document.getElementById("score").innerHTML = score;
          document.getElementById("result").innerHTML = "YOU LOOSE";
        }
        break;
      case "rock":
        if (computerSelection == "lizard" || computerSelection == "scissors"){
          score++;
          document.getElementById("score").innerHTML = score;
          document.getElementById("result").innerHTML = "YOU WIN";
        }else if(userSelection == computerSelection){
            document.getElementById("result").innerHTML = "IT'S A TIE";
        }
        else{
          if(score != 0){
            score--;
          }
          document.getElementById("score").innerHTML = score;
          document.getElementById("result").innerHTML = "YOU LOOSE";
        }
        break;
      case "paper":
        if (computerSelection == "rock" || computerSelection == "spock"){
          score++;
          document.getElementById("score").innerHTML = score;
          document.getElementById("result").innerHTML = "YOU WIN";
        }else if(userSelection == computerSelection){
            document.getElementById("result").innerHTML = "IT'S A TIE";
        }
        else{
          if(score != 0){
            score--;
          }
          document.getElementById("score").innerHTML = score;
          document.getElementById("result").innerHTML = "YOU LOOSE";
        }
        break;
      case "scissors":
        if (computerSelection == "paper" || computerSelection == "lizard"){
          score++;
          document.getElementById("score").innerHTML = score;
          document.getElementById("result").innerHTML = "YOU WIN";
        }else if(userSelection == computerSelection){
            document.getElementById("result").innerHTML = "IT'S A TIE";
        }
        else{
          if(score != 0){
            score--;
          }
          document.getElementById("score").innerHTML = score;
          document.getElementById("result").innerHTML = "YOU LOOSE";
        }
        break;
    }
}

function openPopup() {
    document.getElementById("modal").classList.add("abrir");
    document.getElementById("modal").classList.remove("cerrar");
  }

  function closePopup() {
    document.getElementById("modal").classList.remove("abrir");
    document.getElementById("modal").classList.add("cerrar");
  }
    
function returnMainPage(){
    var para = new URLSearchParams();
    para.append("score", score.toString());
    location.href = "./index.html?" + para.toString();
}
  
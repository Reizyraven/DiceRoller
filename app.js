let diceAmount = 4;
//let displayDice = true;
let counter = 0;

for (let index = 0; index <= diceAmount; index++) {
  let diceName = "dice" + index.toString();
  console.log(diceName);
  $( '.dice' ).append("<a onclick = 'diceSelect('diceName')'><div id = '" + diceName + "'><ol class='die-list even-roll' data-roll='1' id='die-2'> <li class='die-item' data-side='1'> <span class='dot'></span> </li> <li class='die-item' data-side='2'> <span class='dot'></span> <span class='dot'></span> </li> <li class='die-item' data-side='3'> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> </li> <li class='die-item' data-side='4'> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> </li> <li class='die-item' data-side='5'> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> </li> <li class='die-item' data-side='6'> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> </li> </ol> </div> </a>");
} 

while (counter >= 2) {
  document.getElementById('roll-button').disabled = true;
  $('#button-group').append('<button type="button" id="restartButton" onclick="addDice("restart")">Restart</button>');
}

function diceSelect(diceId){
  if(document.getElementById(diceId).firstChild.classList.contains("selected")){
    document.getElementById(diceId).firstChild.classList.remove("selected");
  }
  else{
    document.getElementById(diceId).firstChild.classList.add("selected");
  }
}

function rollDice() {
    const dice = [...document.querySelectorAll('.die-list')];
    dice.forEach(die => {
      if(die.classList.contains("selected")){
        return;
      }
      else{
        toggleClasses(die);
        die.dataset.roll = getRandomNumber(1, 6);
      }
    });
  console.log("You have " + (3-(counter +1)) + " spins left!");  
  return counter ++;  
  }
  
  function toggleClasses(die) {
    die.classList.toggle('odd-roll');
    die.classList.toggle('even-roll');
  }
  
  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function addDice(toggleDice) {
    if(diceAmount == 4){
      $( '.dice' ).append("<ol class='die-list even-roll' data-roll='1' id='die-2'> <li class='die-item' data-side='1'> <span class='dot'></span> </li> <li class='die-item' data-side='2'> <span class='dot'></span> <span class='dot'></span> </li> <li class='die-item' data-side='3'> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> </li> <li class='die-item' data-side='4'> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> </li> <li class='die-item' data-side='5'> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> </li> <li class='die-item' data-side='6'> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> </li> </ol>");
      diceAmount++;
      //displayDice = false;
      document.getElementById(toggleDice).style.backgroundColor = '#4de34d';
    }
    else if(diceAmount == 5 ){
      $('.dice').children().last().remove();
      //displayDice = true;
      document.getElementById(toggleDice).style.backgroundColor = 'rgb(255,255,255)';
      diceAmount -= 1;
    }
  }
  function addSecondDice(toggleDice) {
    if(diceAmount == 5){
      $( '.dice' ).append("<ol class='die-list even-roll' data-roll='1' id='die-2'> <li class='die-item' data-side='1'> <span class='dot'></span> </li> <li class='die-item' data-side='2'> <span class='dot'></span> <span class='dot'></span> </li> <li class='die-item' data-side='3'> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> </li> <li class='die-item' data-side='4'> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> </li> <li class='die-item' data-side='5'> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> </li> <li class='die-item' data-side='6'> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> <span class='dot'></span> </li> </ol>");
      diceAmount++;
      //displayDice = false;
      document.getElementById(toggleDice).style.backgroundColor = '#4de34d';
    }
    else if(diceAmount == 6){
      $('.dice').children().last().remove();
      //displayDice = true;
      document.getElementById(toggleDice).style.backgroundColor = 'rgb(255,255,255)';
      diceAmount -= 1;
    }
  }
  
  document.getElementById('roll-button').addEventListener('click', rollDice);

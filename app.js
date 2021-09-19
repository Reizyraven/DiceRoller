let diceAmount = 4;
let counter = 0;
let values = []

for (let index = 0; index <= diceAmount; index++) {
  let diceName = "dice" + index.toString();
  $( '.dice' ).append("<a onclick = 'diceSelect("+ diceName +")'><div id = '" + diceName + "'><ol class='die-list even-roll' data-roll='1' id='die-2'> <li class='die-item' data-side='1' id = 'side-1'></li> <li class='die-item' data-side='2'id = 'side-2'></li><li class='die-item' data-side='3' id = 'side-3'></li><li class='die-item' data-side='4' id = 'side-4'></li> <li class='die-item' data-side='5' id = 'side-5'></li><li class='die-item' data-side='6' id = 'side-6'></li></ol></div></a>");
} 

  function diceSelect(diceId){
    console.log(diceId.id);
    let dice = document.getElementById(diceId.id);
    if(dice.classList.contains('selected')){
      dice.classList.remove('selected');
    }
    else{
      dice.classList.add('selected');
    }
  }
  function rollDice() {
      const dice = [...document.querySelectorAll('.die-list')];
      dice.forEach(die => {
        if(die.parentElement.classList.contains('selected')){
          console.log('ive been selected!')
          return;
        }
        else{
          toggleClasses(die);
          die.dataset.roll = getRandomNumber(1, 6);
        }
      });
    console.log("You have " + (3-(counter +1)) + " spins left!");   
      if(counter >= 2) {
        document.getElementById('roll-button').style.display = 'none';
        document.getElementById('plusOne').style.display = 'none';
        document.getElementById('plusTwo').style.display = 'none';
        document.getElementById('restart-button').style.display = 'inline-block';
      }
    return counter++;
    }
  function restart(){
    document.getElementById('roll-button').style.display = 'inline-block';
    document.getElementById('plusOne').style.display = 'inline-block';
    document.getElementById('plusTwo').style.display = 'inline-block';
    document.getElementById('restart-button').style.display = 'none';
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
    let diceName = "dice";
    if(diceAmount == 4){
      $( '.dice' ).append("<a onclick = 'diceSelect("+ diceName +")'><div id = '" + diceName + "'><ol class='die-list even-roll' data-roll='1' id='die-2'> <li class='die-item' data-side='1' id = 'ex-side-1'></li> <li class='die-item' data-side='2'id = 'ex-side-2'></li><li class='die-item' data-side='3' id = 'ex-side-3'></li><li class='die-item' data-side='4' id = 'ex-side-4'></li> <li class='die-item' data-side='5' id = 'ex-side-5'></li><li class='die-item' data-side='6' id = 'ex-side-6'></li></ol></div></a>");
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
    let diceName = "dice";
    if(diceAmount == 5){
      $( '.dice' ).append("<a onclick = 'diceSelect("+ diceName +")'><div id = '" + diceName + "'><ol class='die-list even-roll' data-roll='1' id='die-2'> <li class='die-item' data-side='1' id = 'ex-side-1'></li> <li class='die-item' data-side='2'id = 'ex-side-2'></li><li class='die-item' data-side='3' id = 'ex-side-3'></li><li class='die-item' data-side='4' id = 'ex-side-4'></li> <li class='die-item' data-side='5' id = 'ex-side-5'></li><li class='die-item' data-side='6' id = 'ex-side-6'></li></ol></div></a>");
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

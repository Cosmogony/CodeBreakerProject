let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer.value == '' && attempt.value == ''){
      setHiddenFields();
    }

    if (!validateInput(input.value)){
      return false;
    } else {
      attempt++
    }
}

//implement new functions here
function setHiddenFields (){
 answer = Math.floor(Math.random()*10000);
 answer.toString();
 while(answer.length < 4) {
   answer ='0'+answer;
 }
 attempt = 0;

}


function setMessage (labelText){
  let message = document.getElementById('message');
  let newLabel = document.createElement('label');
  newLabel.setAttribute('for','message');
  newLabel.innerHTML = labelText;
  var parentDiv = message.parentNode;
  parentDiv.insertBefore(newLabel,message);
}

function validateInput(parameter){
  if (parameter.length == 4) {
    return true;
  } else {
    setMessage('Guesses must be exactly 4 characters long.');
    return false;
  }
}

/*$(document).ready(function(){
});*/

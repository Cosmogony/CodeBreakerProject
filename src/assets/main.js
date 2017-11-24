let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer.value == '' || attempt.value == ''){
      setHiddenFields();
    }

    if (!validateInput(input.value)){
      return;
    } else {
      attempt.value++
    }
    if(getResults(input.value)){
      setMessage("You Win! :)");
      showAnswer(true);
      showReplay();
    } else if (attempt.value >=10){
      setMessage("You Lose! :(")
      showAnswer(false);
      showReplay();
    } else {
      setMessage("Incorrect, try again.");
    }
}

//implement new functions here
function setHiddenFields (){
 answer.value = Math.floor(Math.random()*10000).toString();
 while(answer.value.length < 4) {
   answer.value ='0'+answer.value;
 }
 attempt.value = 0;
}


function setMessage (labelText){
  document.getElementById('message').innerHTML = labelText;

}

function validateInput(parameter){
  if (parameter.length == 4) {
    return true;
  } else {
    setMessage('Guesses must be exactly 4 characters long.');
    return false;
  }
}


function getResults(p){
  var newContent = '<div class="row"><span class="col-md-6">' + p + '</span><div class="col-md-6">';

  console.log('Actual answer is: '+answer.value+". Which is type: "+ typeof answer+"and length: "+ answer.length);
  console.log("User's attempt is: "+p+". Which is type: "+ typeof p+"and length: "+ p.length);
  var counter = 0;
  for (var i = 0; i < p.length; i++ ){
      if( answer.value.charAt(i) == p.charAt(i)) {
         counter++;
         newContent += '<span class="glyphicon glyphicon-ok"></span>';
      } else if (answer.value.indexOf(p.charAt(i)) > -1) {
        newContent += '<span class="glyphicon glyphicon-transfer"></span>';
      } else{
        newContent += '<span class="glyphicon glyphicon-remove"></span>';
      }
  }
    newContent +=  '</div></div>';
    document.getElementById('results').innerHTML += newContent;
    console.log("pasamos");

    if(counter == 4) {
      return true;
    } else {
      return false;
    }
}

function showAnswer(won){
  document.getElementById('code').innerHTML = answer.value;
  if(won){
    document.getElementById('code').className += " success";
  } else {
    document.getElementById('code').className += " failure";
  }
}

function showReplay(){
  document.getElementById("guessing-div").style.display='none';
  document.getElementById("replay-div").style.display="block";
}

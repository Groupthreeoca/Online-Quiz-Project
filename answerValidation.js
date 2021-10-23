'use strict';

//Task #1
////// a Fuction that takes the correct answers as an array and saves each element in the local storage (example: Question1:Italy)//////
function saveCorrectAnswersToStorage(correctAnswers){
    //In Order to print the question number in the keys in the local storage//
    let questionNumber = 1;
    /////Saving each element in the correct answers array coming from haneen into the storage as seperate key for each question with the value of the correct answer///////
    for(let i of correctAnswers){
        localStorage.setItem(`Question${questionNumber}`,i);
        questionNumber++;
    }
}
let correctAnswers = [3,1,2,4]
saveCorrectAnswersToStorage(correctAnswers);
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Task #2
/////////Comparing user answer with correct answer from local storage when the user click on next button////////

// A) Global Declerations
const nextButton=document.querySelector('.nextButton');
let currentQuestion=1;
let correctStatus = [];
let userAnswers = [];
let correctAnswersCounter ;

// B) The validation only occurs when the user clicks next button and the funtion needs to read the user's answer from the selected radio.
nextButton.addEventListener('click',function(){
    const radioChoices = document.querySelectorAll('input[name="answer"]');
    // B1) Determining which answer the user has chosen (will save the input value as a number)//
    let userCurrentAnswerValue;
    radioChoices.forEach(function(item){
        if (item.checked){
            userCurrentAnswerValue = item.value;
        }
    })
    correctAnswersCounter = 0;
    
    /* B2) -Comparing user answer with correct answer.
    -Editing the correct counter if the answer is correct.
    -Pushing the correct status to correctStatus Array:
    *if correct answer-->i will push true
    *if wrong answer--> i will push false
    */ 
    if(userCurrentAnswerValue == correctAnswers[currentQuestion-1]){
        console.log("correct ya ghaly")
       correctAnswersCounter++;
       correctStatus.push(true);         
       
    }else{
        // console.log('wrong ya 7mar')
        correctStatus.push(false);
    }
    let userCurrentAnswerText = document.getElementById(`answer${userCurrentAnswerValue}`).innerHTML
    console.log(userCurrentAnswerText)
    userAnswers.push(userCurrentAnswerText);
    
    currentQuestion++;
})

let button = document.querySelector('.nextButton');
button.addEventListener("click",showFinalResults);
function showFinalResults(){
	let content =  document.getElementById('option');
    content.innerHTML = '<h2>You Completed The Quiz</h2>';
    content.innerHTML+= `<p>Below are your results:</p>`;
    content.innerHTML+= `<h2>` + correctAnswersCounter + `out of ${currentQuestion-1} questions </h2>`;



    if(correctAnswersCounter>=(currentQuestion/2)){
        console.log("toqa");
        document.body.style.backgroundColor = "#4caf50";
        content.innerHTML += '<h2>You Passed</h2>';

    }else{
        document.body.style.backgroundColor = "#f44336";
        content.innerHTML += '<h2>You Failed</h2>';
        console.log("toqaaaaaaaaaa");
    }
    content.innerHTML+=`<input type="button" value="Show Results" >`; 
}


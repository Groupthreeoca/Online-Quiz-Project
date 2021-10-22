'use strict';

//Task #1
////// a Function that takes the correct answers as an array and saves each element in the local storage (example: Question1:Italy)//////
function saveCorrectAnswersToStorage(correctAnswers){
    //In Order to print the question number in the keys in the local storage//
    let questionNumber = 1;
    /////Saving each element in the correct answers array coming from haneen into the storage as separate key for each question with the value of the correct answer///////
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
    let correctAnswersCounter = 0;
    
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
        console.log('wrong ya 7mar')
        correctStatus.push(false);
    }
    let userCurrentAnswerText = document.getElementById(`answer${userCurrentAnswerValue}`).innerHTML
    console.log(userCurrentAnswerText)
    userAnswers.push(userCurrentAnswerText);
    
    currentQuestion++;
})

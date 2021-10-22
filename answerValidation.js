'use strict';

//Task #1
////// a Function that takes the correct answers as an array and saves each element in the local storage (example: Question1:Italy)//////
function saveCorrectAnswersToStorage(correctAnswers){
    let questionNumber = 1;
    //In Order to print the question number in the keys in the local storage//
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

// A) Global Decelerations
const nextButton=document.querySelector('.nextButton');
let currentQuestion=1;
let correctStatus = [];
let userAnswers = [];

// B) The validation only occurs when the user clicks next button and the function needs to read the user's answer from the selected radio.
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
    console.log(userCurrentAnswerText)//To check if the user's answer is correct or not//
    userAnswers.push(userCurrentAnswerText);//pushing the user answer to the userAnswers array//
    
    currentQuestion++;//incrementing the current question number//
})

function checkAnswer(correctStatus,userAnswers){
    let table=  document.createElement('table');//creating a table to show the user's answers//
    let quizDiv = document.querySelector('.quiz-answer');//selecting the div where the table will be inserted//
    for(let i=0;i<userAnswers.length;i++){//
        let listItem = document.createElement('tr');//creating a row for each question//
        let questionCell = document.createElement('td');//creating a cell for each question//
            questionCell.innerHTML=`Hi`

        let userAnswerCell = document.createElement('td');//creating a cell for each user answer//
        userAnswerCell.innerHTML=`${userAnswers[i]}`;

        if(correctStatus[i] == true){//if the user answer is correct//
            
            userAnswerCell.style.color = 'green';//changing the color of the user answer cell to green//
    
        }else{
            userAnswerCell.style.color = 'red';//changing the color of the user answer cell to red//
        }
        
        table.appendChild(listItem);//adding the row to the table//
        listItem.appendChild(questionCell);//adding the question cell to the row//
        listItem.appendChild(userAnswerCell);//adding the user answer cell to the row//
    }
    quizDiv.appendChild(table);//adding the table to the div//

}

let submitButton = document.querySelector('#sub');//selecting the submit button//
submitButton.addEventListener('click',function(){//when the user clicks on the submit button//
    checkAnswer(correctStatus,userAnswers);//calling the checkAnswer function//
}
)


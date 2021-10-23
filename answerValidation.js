'use strict';


// Question an array ....element of array object
let Question=[
    
    {
        question:'What does HTML stand for?',
        option1 :'Hyper Text Markup Language',
        option2:'Hyperlinks and Text Markup Language',
        option3:'Home Tool Markup Language',
        Answer :'Hyper Text Markup Language',
    },
    
    {
        question:'Choose the correct HTML element for the largest heading:',
        option1: 'h1',
        option2:'head',
        option3:'heading',
        Answer : 'h1',
    },
    
    {
        question:'What is the correct HTML element for inserting a line break?',
        option1:'br',
        option2:'break',
        option3:'lb' ,
        Answer : 'br',
    },
    
    {
        question:'Which HTML tag is used to define an internal style sheet?',
        option1 :'css',
        option2 :'style',
        option3:'script' ,
        Answer : 'style',
    },
    
    {
        question:'What does CSS stand for?',
        option1:'Colorful Style Sheets',
        option2:'Creative Style Sheets',
        option3: 'Cascading Style Sheets',
        Answer : 'Cascading Style Sheets',
    },
    
    {
        question:'Which is the correct CSS syntax?',
        option1: 'body:color=black;',
        option2:'{body;color:black;}',
        option3:'body {color: black;}' ,
        Answer : 'body {color: black;}',
    },
    
    {
        question:'Inside which HTML element do we put the JavaScript?',
        option1:'javascript',
        option2:'script',
        option3:'scripting' ,
        Answer : 'script',
    },
    
    {
        question:'How do you write "Hello World" in an alert box?',
        option1:'msgBox("Hello World");',
        option2:'alertBox("Hello World");',
        option3:'alert("Hello World");' ,
        Answer : 'alert("Hello World");',
    },
    
    {
        question:'How do you create a function in JavaScript?',
        option1:'function:myFunction()',
        option2:'function myFunction()',
        option3:'function = myFunction()' ,
        Answer : 'function myFunction()',
    },
    
    {
        question:'How to write an IF statement in JavaScript?',
        option1:'if i == 5 then',
        option2:'if (i == 5)',
        option3:'if i == 5 then',
        Answer : 'if (i == 5)',
    },
    
    ]

    let correctAnswers = [];
    for(let i=0,length=Question.length;i<length;i++){
    correctAnswers[i] = Question[i].Answer;
    }
    
    let quizQuestion=document.querySelector(".quiz-question");
    let quizAnswer=document.getElementsByTagName("label");
    let nextCheck=document.querySelector(".nextButton");
    let letStart=document.querySelector(".letsStart");
    let showRadio=document.getElementsByClassName("radio")
    let endQuiz=document.querySelector(".endQuiz");
    let welcoming=document.querySelector(".welcoming");
    let quizTitle=document.querySelector(".quiz-title");
    // radio button 
    let answerSelect =document.getElementsByName("answer");
    
    let value=false ;
    let count=1;
    // hidden Next and  End Quiz before start the quiz 
    endQuiz.style.display="none";
    nextCheck.style.display="none";
    
    // in click at let's start Execution the function 
    letStart.addEventListener("click", function(){
    
        // hidden quizTitle
        quizTitle.style.display="none";
    
        // in click let`s start hidden welcoming 
        welcoming.style.display="none";
        // show Next button 
       nextCheck.style.display="inline-block";
    
    //    show Radio button 
        for(let i=0;i<showRadio.length;i++)
        showRadio[i].style.visibility = 'visible';
    
        // hidden the let`s start button 
        document.querySelector(".letsStart").style.display="none";
    
    
        // show the question one 
        quizQuestion.innerHTML=Question[0].question;
    
        // // show the options of question one 
        quizAnswer[0].innerHTML=Question[0].option1;
        quizAnswer[1].innerHTML=Question[0].option2;
        quizAnswer[2].innerHTML=Question[0].option3;
    
       
    });
    
    let userCurrentAnswerText
let radioChoices;
    // in click at Next button Execution the function 
        nextCheck.addEventListener("click",function(){
        radioChoices = document.querySelectorAll('input[name="answer"]');
            // console.log(questionsFromLocal)
            // B1) Determining which answer the user has chosen (will save the input value as a number)//
            let userCurrentAnswerValue;
            radioChoices.forEach(function(item){
                
                if (item.checked){
                    userCurrentAnswerValue = item.value;
                    userCurrentAnswerText = document.getElementById(`a${userCurrentAnswerValue}`).innerHTML
                }
            })
    value=false;
            // check if the user select one of option or no 
            for(let i=0;i<answerSelect.length;i++){
                if(answerSelect[i].checked)
               value =true;
                }
    
                // console.log(value);
            
        //  if the user select one of options 
            if(value ==true){
    
                // show the question 
            for (let i=1;i<Question.length ;i++){
                  
                // count=1 
                quizQuestion.innerHTML=Question[count].question;
                
    

                quizAnswer[0].innerHTML=Question[count].option1;
                quizAnswer[1].innerHTML=Question[count].option2;
               quizAnswer[2].innerHTML=Question[count].option3;
                 
            //   When moving to the last question hidden the Next button and show the end quiz 
               if(count===Question.length-1){
                nextCheck.style.display="none";
                endQuiz.style.display="inline-block";
               }
                
             }
            //  Increase the counter to move to the next question
             count++;
         
           }
       
     
    //   if the user not select one of options 
            else{
                window.alert("please Choose one of the options");
        
            }
        });
    
    
      
    
    
    
    

//Task #1
////// a Function that takes the correct answers as an array and saves each element in the local storage (example: Question1:Italy)//////
function saveCorrectAnswersToStorage(correctAnswers){
    let questionNumber = 0;
    //In Order to print the question number in the keys in the local storage//
    /////Saving each element in the correct answers array coming from haneen into the storage as separate key for each question with the value of the correct answer///////
    for(let i of correctAnswers){
        localStorage.setItem(`Question${questionNumber}`,i);
        questionNumber++;
    }
}
saveCorrectAnswersToStorage(correctAnswers);
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Task #2
/////////Comparing user answer with correct answer from local storage when the user click on next button////////

// A) Global Decelerations
const nextButton=document.querySelector('.nextButton');
let currentQuestion=1;
let correctStatus = [];
let userAnswers = [];
let correctAnswersCounter=0 ;
let questionsFromLocal = []; ////Array that will contain the questions from local storage////
let questionsFromLocalLength = localStorage.length;
console.log(questionsFromLocalLength)
for(let j=0;j<questionsFromLocalLength;j++){
    questionsFromLocal[j] = localStorage.key(j)
}
console.log(questionsFromLocal)
questionsFromLocal.sort();
console.log(questionsFromLocal);

// B) The validation only occurs when the user clicks next button and the function needs to read the user's answer from the selected radio.

nextButton.addEventListener('click',function(){
    /* B2) -Comparing user answer with correct answer.
    -Editing the correct counter if the answer is correct.
    -Pushing the correct status to correctStatus Array:
    *if correct answer-->i will push true
    *if wrong answer--> i will push false
    */ 
    console.log(localStorage.getItem(questionsFromLocal[currentQuestion-1]))
    console.log(userCurrentAnswerText)
    if(userCurrentAnswerText == localStorage.getItem(questionsFromLocal[currentQuestion-1])){
        console.log("correct ya ghaly")
        correctAnswersCounter++;
        correctStatus.push(true);   
        
    }else{
        console.log('wrong ya 7mar')
        correctStatus.push(false);
    }
    // console.log(userCurrentAnswerText)//To check if the user's answer is correct or not//
    userAnswers.push(userCurrentAnswerText);//pushing the user answer to the userAnswers array//
    console.log(currentQuestion);

    currentQuestion++;//incrementing the current question number//
    //Resetting the selection of the user//
    console.log(currentQuestion);

    radioChoices.forEach(function(item){
        item.checked = false;
    })

})


//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////
////////////Toqa////////////////////////

let endExamButton = document.querySelector('.endQuiz');
let showResultBtn;
endExamButton.addEventListener("click",showFinalResults);
function showFinalResults(){

 // in click at Next button Execution the function 
// nextCheck.addEventListener("click",function(){
    radioChoices = document.querySelectorAll('input[name="answer"]');
        // console.log(questionsFromLocal)
        // B1) Determining which answer the user has chosen (will save the input value as a number)//
        let userCurrentAnswerValue;
        radioChoices.forEach(function(item){
            
            if (item.checked){
                userCurrentAnswerValue = item.value;
                userCurrentAnswerText = document.getElementById(`a${userCurrentAnswerValue}`).innerHTML
            }
        })
 /* B2) -Comparing user answer with correct answer.
    -Editing the correct counter if the answer is correct.
    -Pushing the correct status to correctStatus Array:
    *if correct answer-->i will push true
    *if wrong answer--> i will push false
    */ 
    console.log(localStorage.getItem(questionsFromLocal[currentQuestion-1]))
    console.log(userCurrentAnswerText)
    if(userCurrentAnswerText == localStorage.getItem(questionsFromLocal[currentQuestion-1])){
        console.log("correct ya ghaly")
        correctAnswersCounter++;
        correctStatus.push(true);   
        
    }else{
        console.log('wrong ya 7mar')

        correctStatus.push(false);
    }
    // console.log(userCurrentAnswerText)//To check if the user's answer is correct or not//
    userAnswers.push(userCurrentAnswerText);//pushing the user answer to the userAnswers array//
    
 
    //Resetting the selection of the user//

    radioChoices.forEach(function(item){
        item.checked = false;
    })
	let content =  document.querySelector('.quiz-content');
    content.innerHTML = '<h2>You Completed The Quiz</h2>';
    content.innerHTML+= `<p>Below are your results:</p>`;
    content.innerHTML+= `<h2>` + correctAnswersCounter + ` out of ${currentQuestion} questions </h2>`;


    if(correctAnswersCounter >= (currentQuestion/2)){
        console.log("toqa");
        document.body.style.backgroundColor = "#4caf50";
        content.innerHTML += '<h2>You Passed</h2>';

    }else{
        document.body.style.backgroundColor = "#f44336";
        content.innerHTML += '<h2>You Failed</h2>';
        console.log("toqaaaaaaaaaa");
    }
    content.innerHTML+=`<input type="button" value="Show Results" class="show" >`; 
     showResultBtn = document.querySelector(".show");
     showResultBtn.addEventListener('click',function(){//when the user clicks on the submit button//
        checkAnswer(correctStatus,userAnswers);//calling the checkAnswer function//
    }
    )
}

function checkAnswer(correctStatus,userAnswers){
     let examQuestion = [];
     for (let i = 0, length = Question.length; i < length; i++) {
        examQuestion[i] = Question[i].question;
     }
    
    let table=  document.createElement('table');//creating a table to show the user's answers//
    let quizDiv = document.querySelector('.quiz-content');//selecting the div where the table will be inserted//
    for(let i=0;i<userAnswers.length;i++){//
        let listItem = document.createElement('tr');//creating a row for each question//
        let questionCell = document.createElement('td');//creating a cell for each question//
            questionCell.innerHTML = examQuestion[i];

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




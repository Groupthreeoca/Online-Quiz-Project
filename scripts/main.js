// Question an array ....element of array object
let Question=[
    
{
    question:'What does HTML stand for?',
    option1 :'Hyper Text Markup Language  ',
    option2:'Hyperlinks and Text Markup Language',
    option3:'Home Tool Markup Language',
    Answer :'Hyper Text Markup Language ',
},

{
    question:'Choose the correct HTML element for the largest heading:',
    option1: 'h1',
    option2:'head',
    option3:'heading',
    Answer : 'h1'
},

{
    question:'What is the correct HTML element for inserting a line break?',
    option1:'br',
    option2:'break',
    option3:'lb' ,
    Answer : 'br'
},

{
    question:'Which HTML tag is used to define an internal style sheet?',
    option1 :'css',
    option2 :'style ',
    option3:'script' ,
    Answer : 'style'
},

{
    question:'What does CSS stand for?',
    option1:'Colorful Style Sheets  ',
    option2:'Creative Style Sheets',
    option3: 'Computer Style Sheets',
    Answer : 'Cascading Style Sheets'
},

{
    question:'Which is the correct CSS syntax?',
    option1: 'body:color=black;',
    option2:'{body;color:black;}',
    option3:'body {color: black;}  ' ,
    Answer : 'body {color: black;}'
},

{
    question:'Inside which HTML element do we put the JavaScript?',
    option1:'javascript',
    option2:'script',
    option3:'scripting' ,
    Answer : 'script'
},

{
    question:'How do you write "Hello World" in an alert box?',
    option1:'msgBox("Hello World");',
    option2:'alertBox("Hello World");',
    option3:'alert("Hello World");' ,
    Answer : 'Hyper Text Markup Language '
},

{
    question:'How do you create a function in JavaScript?',
    option1:'function:myFunction()',
    option2:'function myFunction()',
    option3:'function = myFunction()' ,
    Answer : 'Hyper Text Markup Language '
},

{
    question:'How to write an IF statement in JavaScript?',
    option1:'if i == 5 then',
    option2:'if (i == 5)  ',
    option3:'if i == 5 then',
    Answer : 'if (i == 5)'
},

]


let quizQuestion=document.querySelector(".quiz-question");
let quizAnswer=document.getElementsByTagName("label");
let nextCheck=document.querySelector(".nextCheck");
let letStart=document.querySelector(".letsStart");
let showRadio=document.getElementsByClassName("radio")
let endQuiz=document.querySelector(".endQuiz");
let welcoming=document.querySelector(".welcoming");
let quizTitle=document.querySelector(".quiz-title");
// radio button 
let answerSelect =document.getElementsByName("answer");

let value ;
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

 
// in click at Next button Execution the function 
    nextCheck.addEventListener("click",function(){


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


  




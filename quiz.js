const score = document.getElementById("score");
const ques = document.getElementById("ques");
const ans = document.getElementById("ans");
const btn = document.getElementById("btn")
const showQuiz = document.getElementById("showQuiz")
const quizDiv = document.getElementById("quizDiv")
let item = 0;
let scoreva = 0;
let flag = true
quizDiv.style.display = "none"
const quizdata = [
    {
        question:"Which planet is known as the Red Planet?",
        answer: [
            {
                Option:  "Saturn",
                istrue: false
            },
            {
                Option: "London",
                istrue: false
            },
            {
                Option: "Jupiter",
                istrue: false
            },
            {
                Option: "Mars",
                istrue: true
            }
        ]
    },
    {
        
        question: 'Sum is 2-2?',
        answer: [
            {
                Option: "5",
                istrue: false
            },
            {
                Option: "4",
                istrue: false
            },
            {
                Option: "-4",
                istrue: false
            },
            {
                Option: "0",
                istrue: true
            }

        ]
    },
    {
        question: 'Sum is 2+2?',
        answer: [
            {
                Option: "5",
                istrue: false
            },
            {
                Option: "4",
                istrue: true
            },
            {
                Option: "-4",
                istrue: false
            },
            {
                Option: "2",
                istrue: false
            }
        ]
    },
    {
        question: "What is the capital of France?",
        answer: [
            {
                Option: "Earth",
                istrue: false
            },
            {
                Option: "London",
                istrue: false
            },
            {
                Option: "Berlin",
                istrue: false
            },
            {
                Option: "Paris",
                istrue: true
            }
        ]
    }
];



   btn.addEventListener("click",()=>{
    btn.style.display = "none"
      quizDiv.style.display = "block";
      displayQuiz(item);
   })

function displayQuiz(item) {
    if (item < quizdata.length) {
        ques.innerHTML = quizdata[item].question;
        ans.innerHTML = ""
        for (let i = 0; i < quizdata[item].answer.length; i++) {
            ans.innerHTML += `
             <div>
          
          <input  class="m-1 rounded-lg"  type="checkbox" onclick="isChecked(${item},${i})"   
           <p>${quizdata[item].answer[i].Option}</p>
             
            </div>  
         `

        }
    } else {
        alert('completed')
    }

}

function isChecked(item, i) {
    if (quizdata[item].answer[i].istrue) {
        scoreva++;
        score.innerHTML = scoreva;
        item++;
        displayQuiz(item);
    }

    else {
       
    }
}
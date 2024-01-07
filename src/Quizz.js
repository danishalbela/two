// import React from 'react'
import React, { useState } from 'react'


function Quizz() {

    const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

    // console.log(questions);

// states
   let [quesNum,setQuesNum] = useState(0)
   let [score,setScore] = useState(0)
   let [showsScore,setShowScore] = useState(false)



   let handleQues =(para)=>{
    // console.log(para)
       
    if(para===true)
    setScore(score+1)


      let nextQ = quesNum+1

      if(nextQ < questions.length)
      {
        setQuesNum(nextQ)
      }
      else{
        alert('Quizz Over')
      }

   }


  return (
    <div>
       <h1>Quizz App</h1>
       <hr/>
        
        <div className='score_section'>
            <h1>You Scored 2 Points</h1>
        </div>
        <div className='ques_ans'>

         <div className='ques'>
              <h3>Question  {quesNum+1}  ). {questions[quesNum]?.questionText}</h3>
         </div>
         <div className='ans'>
                {
                    questions[quesNum].answerOptions.map((ele,index)=>{
                        return <button
                         key={index}
                         onClick={()=>handleQues(ele.isCorrect)}
                         >{ele.answerText}</button>
                    })
                }
         </div>

        </div>




    </div>
  )
}

export default Quizz
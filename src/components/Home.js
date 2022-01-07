import React,{ useEffect} from "react";
import {useSelector} from 'react-redux'
import QuestionCard from './QuestionCard'
    export default function Home(props){
    const authedUser = useSelector(({authedUser}) => authedUser)
    const users = useSelector(({users})=> users)
    const questions =useSelector(({questions})=>questions)
    const questionsIds = useSelector(({questions})=>Object.keys(questions))
    const answeredQuestions = users[authedUser]?Object.keys(users[authedUser].answers):[]
    const unansweredQuestions = questionsIds.filter(item => !answeredQuestions.includes(item));


return <div className="home-container">
    <h3>Unanswered Questions list</h3>
       <ul>
       {unansweredQuestions.map((id)=>(
         <li key={id}>
           <QuestionCard id = {id}></QuestionCard>
         </li>
       )).sort((a,b)=>{
        return questions[b.key].timestamp-questions[a.key].timestamp
      })
       }
       </ul>
       <hr/>
       <h3>Answered Questions list</h3>
       <ul>
       {answeredQuestions.map((id)=>(
         <li key={id}>
           <QuestionCard id = {id}></QuestionCard>
         </li>
       )).sort((a,b)=>{
         return questions[b.key].timestamp-questions[a.key].timestamp
        })
      }
       </ul>
    </div>
}
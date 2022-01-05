import React,{ useEffect} from "react";
import {useSelector} from 'react-redux'
import QuestionCard from './QuestionCard'
    export default function Home(props){
    const authedUser = useSelector(({authedUser}) => authedUser)
    const users = useSelector(({users})=> users)
    const questions = useSelector(({questions})=>Object.keys(questions))
    console.log("questions in Home Component",questions)
    const answeredQuestions = users[authedUser]?Object.keys(users[authedUser].answers):[]
    const unansweredQuestions = questions.filter(item => !answeredQuestions.includes(item));
      console.log(`${authedUser} answered questions`, answeredQuestions)
      console.log(`${authedUser} unanswered questions`, unansweredQuestions)

return <div className="home-container">
    Unanswered Questions list
       <ul>
       {unansweredQuestions.map((question)=>(
         <li key={question}>
           <QuestionCard id = {question}></QuestionCard>
         </li>
       ))}
       </ul>
       <hr/>
       answered Questions list
       <ul>
       {answeredQuestions.map((question)=>(
         <li key={question}>
           <QuestionCard id = {question}></QuestionCard>
         </li>
       ))}
       </ul>
    </div>
}
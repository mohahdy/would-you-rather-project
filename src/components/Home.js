import React,{ useEffect} from "react";
import {useSelector} from 'react-redux'
import QuestionCard from './QuestionCard'
    export default function Home(props){
    const authedUser = useSelector(({authedUser}) => authedUser)
    const users = useSelector(({users})=> users)
    const questions = useSelector(({questions})=>Object.keys(questions))
    const answeredQuestions = users[authedUser]?Object.keys(users[authedUser].answers):[]
    const unansweredQuestions = questions.filter(item => !answeredQuestions.includes(item));


return <div className="home-container">
    <h3>Unanswered Questions list</h3>
       <ul>
       {unansweredQuestions.map((question)=>(
         <li key={question}>
           <QuestionCard id = {question}></QuestionCard>
         </li>
       ))}
       </ul>
       <hr/>
       <h3>Answered Questions list</h3>
       <ul>
       {answeredQuestions.map((question)=>(
         <li key={question}>
           <QuestionCard id = {question}></QuestionCard>
         </li>
       ))}
       </ul>
    </div>
}
import React from "react";
import {useSelector} from 'react-redux'
import QuestionCard from './QuestionCard'
    export default function Home(props){

    const questions = useSelector((state)=>Object.keys(state.questions))
    console.log("questions in Home Component",questions)
return <div className="home-container">
    Questions list
       <ul>
       {questions.map((question)=>(
         <li key={question}>
           <QuestionCard id = {question}></QuestionCard>
         </li>
       ))}
       </ul>
    </div>
}
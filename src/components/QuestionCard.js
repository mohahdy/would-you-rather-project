import React from "react";
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom'
export default function QuestionCard(props){
    const questions = useSelector((state)=>state.questions)
    const users = useSelector((state)=>state.users)
    const {id} = props
    const authorID = (questions[id]!==undefined)&&questions[id].author
    const questionOptionOne = (questions[id]!==undefined)&&questions[id].optionOne.text
    const authorName = useSelector(({users})=>(users[authorID]!==undefined)?users[authorID].name:null)
    return(
        <Link to={`/questions/${id}`} className="question">
            <img className = "avatar" src={users[authorID]?users[authorID].avatarURL:null} alt={authorName} />
        <div >
           <div> {authorName} Asks </div>
            <div>Would you rather...</div>
            <ul>
                <li>...{questionOptionOne}...</li>
            </ul>
        </div>
        </Link>
    )
}
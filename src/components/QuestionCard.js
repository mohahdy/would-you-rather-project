import React from "react";
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom'
export default function QuestionCard(props){
    const questions = useSelector((state)=>state.questions)
    const {id} = props
    const authorID = questions[id].author
    const quesOptionone = questions[id].optionOne.text
    const authorName = useSelector((state)=>state.users[authorID].name)
    return(
        <Link to={`/questions/${id}`} className="question">
        <div >
           <div> {authorName} Asks </div>
            <div>Would you rather...</div>
            <ul>
                <li>...{quesOptionone}...</li>
            </ul>
        </div>
        </Link>
    )
}
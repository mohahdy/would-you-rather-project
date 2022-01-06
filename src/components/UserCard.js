import React from "react";
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom'
export default function UserCard(props){
    const questions = useSelector((state)=>state.questions)
    const users = useSelector((state)=>state.users)
    const {id} = props
    const authorID = (questions[id]!==undefined)&&questions[id].author
    const questionOptionOne = (questions[id]!==undefined)&&questions[id].optionOne.text
    const authorName = useSelector(({users})=>(users[authorID]!==undefined)?users[authorID].name:null)
    return (
        <div className="question">
        <img className = "avatar" src={users[id]?users[id].avatarURL:null} alt={authorName} />
    <div >
       <h2> {authorName}  </h2>
        <ul>
            <li>Answered Questions : {users[id]&&Object.keys(users[id].answers).length}</li>
            <li>Created Questions : {users[id]&&users[id].questions.length}</li>
            <li><strong>Total : </strong>{users[id]&&Object.keys(users[id].answers).length+users[id].questions.length}</li>
        </ul>
    </div>
    </div>
    )
}
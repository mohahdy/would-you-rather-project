import React from "react";
import {useSelector} from "react-redux";
export default function UserCard(props){
    const users = useSelector((state)=>state.users)
    const {id} = props
    const authorName = useSelector(({users})=>(users[id]!==undefined)?users[id].name:null)
    return (
        <div className="userCard">
        <img className = "avatar" src={users[id]?users[id].avatarURL:null} alt={authorName} />
        <h2> {authorName}  </h2>

    <div >

        <ul>
            <li>Answered Questions : {users[id]&&Object.keys(users[id].answers).length}</li>
            <li>Created Questions : {users[id]&&users[id].questions.length}</li>
            <li><strong>Total : </strong>{users[id]&&Object.keys(users[id].answers).length+users[id].questions.length}</li>
        </ul>
    </div>
    </div>
    )
}
import React,{useState} from 'react';
import {useSelector} from 'react-redux'
import UserCard from './UserCard'
export default function LeaderBoard(){
    const authedUser = useSelector(({authedUser}) => authedUser)
    const users = useSelector(({users})=>Object.keys(users))
    const totalScore = useSelector(({users})=>users.questions.length+)
    return <div className="home-container">
       <ul>
       {users.map((user)=>(
         <li key={user}>
           <UserCard id = {user}></UserCard>
         </li>
       ))}
       </ul>
       </div>
    
}
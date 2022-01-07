import React from 'react';
import {useSelector} from 'react-redux'
import UserCard from './UserCard'
export default function LeaderBoard(){
    const usersIds = useSelector(({users})=>Object.keys(users))
    const users = useSelector(({users})=>users)
    return <div className="home-container">
       <ul>
       {usersIds.map((user)=>(
         <li key={user}>
           <UserCard id = {user}></UserCard>
         </li>
       )).sort((a,b)=>{
        return(
         (Object.keys(users[b.key].answers).length+users[b.key].questions.length)
         -(Object.keys(users[a.key].answers).length+users[a.key].questions.length)
         )}
         )
         }
       </ul>
       </div>
    
}
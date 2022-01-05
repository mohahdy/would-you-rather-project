import React,{useEffect} from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export default function Navig(props) {

   console.log("NAVIG PROPS: ", props)

    
    return <div >
            <ul className="nav">
                <li>
                    <Link to='/'>Home </Link>
                </li>
                <li>
                    <Link to='/leaderboard'>Leaderboard </Link>
                </li>
                <li>
                    <Link to='/new'>New Question </Link>
                </li>
                
                <li className='authedUsernav' >Hello <strong>{props.username}</strong></li>

            </ul>
            <ul className='authedUsernav'> 
            </ul>
        </div>
    
}
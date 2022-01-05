import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import setAuthedUser from '../actions/authedUser'
export default function Navig(props) {

    const dispatch = useDispatch();
   console.log("NAVIG PROPS: ", props)
    const handleLogout = (e)=>{
        e.preventDefault();
        dispatch(setAuthedUser(null))
    }
    
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
                <li ><button onClick={handleLogout}>Logout</button></li>
            </ul>
        </div>
    
}
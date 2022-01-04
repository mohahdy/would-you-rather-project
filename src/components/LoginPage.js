import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import setAuthedUser from '../actions/authedUser';
export default function LoginPage(props) {
    const initialState = {isUserSelected:false,selectedUser:null}
    const [state, setState] = useState(initialState);
    const dispatch = useDispatch();
    const users = useSelector((state)=>Object.keys(state.users))
    const logo = '../utils/logo192.jpg'
    const handleUserChange= (e)=>{
        e.preventDefault();
        console.log('Local state before user change',state)
        setState({isUserSelected:true,selectedUser:e.target.value});

    }
    const handleLogin = (e)=>{
        e.preventDefault();
        dispatch(setAuthedUser(state.selectedUser))
    }
    useEffect (()=>console.log('Local state after user change',state),[state])
    

    return (
        <div className="centered">

            <form>
                <img src={logo} alt='logo'/>
                <label form="users">Choose a user:</label>
                <select name="users" id="users" defaultValue="nochoice" onChange={handleUserChange}>
                    <option value="nochoice" disabled>Select a User</option>
                    {users.map((user)=>(
                        <option value={user} key = {user}>{user}</option> 

                    ))}
                </select>
                <br></br>
                    <input type="submit" value="Login" disabled={!state.isUserSelected} onClick={handleLogin}/>
                    </form>
                </div>
                    )
}


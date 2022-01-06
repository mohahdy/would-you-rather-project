import {useSelector,useDispatch} from 'react-redux';
import React,{ useEffect,Fragment,useLayoutEffect } from 'react';
import handleGetUsers from '../actions/users'
import handleGetQuestions from '../actions/questions';
import setAuthedUser from '../actions/authedUser'
import LoginPage from './LoginPage'
import QuestionDetails from './QuestionDetails'
import Navig from './Nav'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Home'
import NewQuestion from './NewQuestion';
export default function App(props) {
  const users = useSelector(({users})=>users)
  const questions = useSelector(({questions})=>Object.keys(questions))
  const authedUser = useSelector(({authedUser})=>authedUser)
  let authedUserName=(users[authedUser]!==undefined)?users[authedUser].name:null;
  const dispatch = useDispatch()
  useEffect(() =>{
      // eslint-disable-next-line react-hooks/exhaustive-deps
  dispatch(handleGetUsers())},[])
  

useEffect(() =>{
dispatch(handleGetQuestions())
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[])
useEffect(() =>{dispatch(setAuthedUser('sarahedo'))},[])
useEffect(()=>{
  authedUserName=(users[authedUser]!==undefined)?users[authedUser].name:null;
  console.log('useEFFECT funct ::users[authedUser] : ', users[authedUser])
  console.log('useEFFECT funct ::authedUser :',authedUser)
},[users,authedUser])
console.log("props inside App: ", props)
  return (
    <Router>
    {authedUser?<Navig username ={authedUserName} />:<h1>Would You Rather...? APP</h1>}
    {/* <Home/> */}
    {/* <NewQuestion className="center"/>  */}
    {/* vthrdm985a262al8qx3do 8xf0y6ziyjabvozdd253nd */}
    <QuestionDetails id={"vthrdm985a262al8qx3do"}/>
    </Router>
    // <div >
    //   <header >
    //     Users List
    //   </header>
    //   <ul>
    //   {props.users.map((user)=>(        
    //     <li key={user}>
    //       {user}
    //     </li>
    //   ))}
    //   </ul>
    //   Questions list
    //   <ul>
    //   {props.questions.map((question)=>(
    //     <li key={question}>
    //       {question}
    //     </li>
    //   ))}
    //   </ul>
    //   Authenticated User:
    //   {props.authedUser}
    // </div>
  );
}

// function mapStateToProps({users,questions,authedUser}) {
//   return {users: Object.keys(users),
//   questions: Object.keys(questions),
// authedUser};
// }
// export default connect(mapStateToProps)(App);

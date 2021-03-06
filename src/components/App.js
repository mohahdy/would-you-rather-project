import {useSelector,useDispatch} from 'react-redux';
import React,{ useEffect } from 'react';
import handleGetUsers from '../actions/users'
import handleGetQuestions from '../actions/questions';
import LoginPage from './LoginPage'
import QuestionDetails from './QuestionDetails'
import Navig from './Nav'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Home'
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard'
import PageNotFound from './PageNotFound'
export default function App(props) {
  const loading = useSelector(({users,questions,authedUser})=> (users 
    && Object.keys(users).length === 0
    && Object.getPrototypeOf(users) === Object.prototype)||
    (questions 
    && Object.keys(questions).length === 0
    && Object.getPrototypeOf(questions) === Object.prototype))
  const users = useSelector(({users})=>users)
  const questions = useSelector(({questions})=>Object.keys(questions))
  const authedUser = useSelector(({authedUser})=>authedUser)
  let authedUserName=(users[authedUser]!==undefined)?users[authedUser].name:null;
  console.log ("users : ", users)
  console.log ("questions : ", questions)
  console.log ("loading : ", loading)

  const dispatch = useDispatch()
  useEffect(() =>{
      // eslint-disable-next-line react-hooks/exhaustive-deps
  dispatch(handleGetUsers())},[])
  

useEffect(() =>{
dispatch(handleGetQuestions())
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[])
// useEffect(() =>{dispatch(setAuthedUser('sarahedo'))},[])
useEffect(()=>{

},[users,authedUser])
  return (
    loading===true?null:
    <Router>
    {authedUser?<Navig username ={authedUserName} />:<h1>Would You Rather...? APP</h1>}
    <Routes>
      <Route path="/" element = { authedUser===null?<LoginPage/>:<Home/>}/>
      <Route path="/add" element = {authedUser===null?<LoginPage/>:<NewQuestion/>}/>
      <Route path="/questions/:question_id" element = {authedUser===null?<LoginPage/>:<QuestionDetails/>}>
          <Route path="*" element = {authedUser===null?<LoginPage/>:<PageNotFound/>}/>
      </Route>
      <Route path="/leaderboard" element = {authedUser===null?<LoginPage/>:<LeaderBoard/>}/>
      <Route path="/new" element = {authedUser===null?<LoginPage/>:<NewQuestion/>}/>
      <Route path="*" element = {authedUser===null?<LoginPage/>:<PageNotFound/>}/>
    </Routes>
    {/* <Home/> */}
    {/* <NewQuestion className="center"/>  */}
    {/* vthrdm985a262al8qx3do 8xf0y6ziyjabvozdd253nd */}
    {/* <QuestionDetails id={"vthrdm985a262al8qx3do"}/> */}
    
    </Router>
  );
}

// function mapStateToProps({users,questions,authedUser}) {
//   return {users: Object.keys(users),
//   questions: Object.keys(questions),
// authedUser};
// }
// export default connect(mapStateToProps)(App);

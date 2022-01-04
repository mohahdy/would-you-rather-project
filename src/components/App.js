import {connect, useSelector} from 'react-redux';
import React,{ useEffect } from 'react';
import handleGetUsers from '../actions/users'
import handleGetQuestions from '../actions/questions';
import setAuthedUser from '../actions/authedUser'
function App(props) {
  useEffect(() =>{
      // eslint-disable-next-line react-hooks/exhaustive-deps
  props.dispatch(handleGetUsers())},[])
  

useEffect(() =>{
  // eslint-disable-next-line react-hooks/exhaustive-deps
props.dispatch(handleGetQuestions())},[])
props.dispatch(setAuthedUser('sarahedo'))
  return (
    <div >
      <header >
        Users List
      </header>
      <ul>
      {props.users.map((user)=>(        
        <li key={user}>
          {user}
        </li>
      ))}
      </ul>
      Questions list
      <ul>
      {props.questions.map((question)=>(
        <li key={question}>
          {question}
        </li>
      ))}
      </ul>
      Authenticated User:
      {props.authedUser}
    </div>
  );
}

function mapStateToProps({users,questions,authedUser}) {
  return {users: Object.keys(users),
  questions: Object.keys(questions),
authedUser};
}
export default connect(mapStateToProps)(App);

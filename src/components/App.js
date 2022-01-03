import {connect} from 'react-redux';
import React,{ useEffect } from 'react';
import handleGetUsers from '../actions/users'
function App(props) {
  useEffect(() =>{
      // eslint-disable-next-line react-hooks/exhaustive-deps
  props.dispatch(handleGetUsers())},[])

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
    </div>
  );
}
function mapStateToProps({users}) {
  return {users: Object.keys(users)}
}
export default connect(mapStateToProps)(App);

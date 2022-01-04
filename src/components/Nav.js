import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export default function Nav(props) {
    const authedUser = useSelector((state) => state.authedUser)
    return (
        <div >
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
            </ul>
        </div>
    )
}
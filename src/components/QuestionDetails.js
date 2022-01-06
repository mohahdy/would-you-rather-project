import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import { handleAddAnswer } from '../actions/questions'

export default function QuestionDetails(props) {
    console.log('Question Details props: ', props)

    const [state, setState] = useState({ isAnswered: false, btnDisabled: true, answer: null, opt1Percentage: 0, opt2Percentage: 0,opt1Votes:0,opt2Votes:0 })
    const dispatch = useDispatch()
    const questions = useSelector((state) => state.questions)
    const users = useSelector((state) => state.users)
    const authedUser = useSelector(({ authedUser }) => authedUser)
    const { id } = props
    const authorID = (questions[id] !== undefined) && questions[id].author
    console.log("Question Details : questions[id] : ", questions[id])
    const questionOptionOne = (questions[id] !== undefined) && questions[id].optionOne.text
    const questionOptionTwo = (questions[id] !== undefined) && questions[id].optionTwo.text
    const authorName = useSelector(({ users }) => (users[authorID] !== undefined) ? users[authorID].name : null)
            const opt1Votes = (questions[id]!==undefined)?questions[id].optionOne.votes.length:0
        const opt2Votes = (questions[id]!==undefined)?questions[id].optionTwo.votes.length:0
        const totalVotes = (questions[id]!==undefined)?opt1Votes+opt2Votes:0
        const opt1Percentage = (questions[id]!==undefined)?(opt1Votes/totalVotes)*100:0
        const opt2Percentage = (questions[id]!==undefined)?(opt2Votes/totalVotes)*100:0
    useEffect(() => {
        // console.log("(questions[id]!==undefined)?questions[id].optionOne.votes.length:0) ===>", (questions[id]!==undefined)?questions[id].optionOne.votes.length:0)


        (users[authedUser] !== undefined) && setState((prevState) => ({
            ...prevState,
            isAnswered: Object.keys(users[authedUser].answers).find(answer => answer === id),
            opt1Percentage,
            opt2Percentage,
            opt1Votes,
            opt2Votes
        })
        )
    }
        , [users, authedUser, id,opt1Percentage,opt2Percentage,opt1Votes,opt2Votes])
    // const isAnswered = (users[authedUser]!==undefined)?Object.keys(users[authedUser].answers).find(answer => answer === id):null
    const handleOptionChange = (e) => {
        setState((prevState) => ({
            ...prevState,
            answer: e.target.value,
            btnDisabled: false
        }))
    }

    const handleSubmitAnswer = (e) => {
        e.preventDefault();

        dispatch(handleAddAnswer({ answer: state.answer, qid: id, authedUser }))
    }
    const unansweredQuestion = <div className="question-container">
        <img className="avatar" src={users[authorID] ? users[authorID].avatarURL : null} alt={authorName} />
        <div >
            <div> {authorName} Asks </div>
            <div>Would you rather...</div>
            <form>
                <input type="radio" name="Answers" value="optionOne" onChange={handleOptionChange} />  <label>{questionOptionOne}</label>
                <br></br>
                <input type="radio" name="Answers" value="optionTwo" onChange={handleOptionChange} />  <label>{questionOptionTwo}</label>

            </form>
            <button type="submit" disabled={state.btnDisabled} onClick={handleSubmitAnswer}>Answer</button>
        </div>
    </div>

    const answeredQuestion = <div className="question-container">
        <img className="avatar" src={users[authorID] ? users[authorID].avatarURL : null} alt={authorName} />
        <div >
            <div> Asked by {authorName}  </div>
            <h3>Results: </h3><br /><br />
            <div><strong>Would you rather {questionOptionOne}</strong></div>
            <div>Percentage : {state.opt1Percentage.toFixed(1)}%</div>
            <div> Number of Votes : {opt1Votes}</div>
            <div><strong>Would you rather {questionOptionTwo}</strong></div>
            <div>Percentage : {state.opt2Percentage.toFixed(1)}%</div>
            <div> Number of Votes : {opt2Votes}</div>
        </div>
    </div>

    if (state.isAnswered) {
        return answeredQuestion
    } else {
        return unansweredQuestion
    }
}
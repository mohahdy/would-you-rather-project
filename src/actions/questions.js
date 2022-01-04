import {_getQuestions} from '../utils/_DATA'
export const GET_QUESTIONS = 'GET_QUESTIONS'

function getQuestions (questions)
{
    return {
        type: GET_QUESTIONS,
        questions
    }
}

export default function handleGetQuestions (){
    return (dispatch)=>{
        _getQuestions().then((questions)=>dispatch(getQuestions(questions)))
    }

}
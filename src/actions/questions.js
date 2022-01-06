import {_getQuestions,_saveQuestion} from '../utils/_DATA'
export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
function getQuestions (questions)
{
    return {
        type: GET_QUESTIONS,
        questions
    }
}

function addQuestion(question){
    return{type: ADD_QUESTION, question}
}

export default function handleGetQuestions (){
    return (dispatch)=>{
        _getQuestions().then((questions)=>dispatch(getQuestions(questions)))
    }

}

export function handleAddQuestion(question) {
    return(dispatch)=>{
        console.log("handleAddQuestion question : ",question)
        _saveQuestion(question).then((question)=>dispatch(addQuestion(question)))
    }
}
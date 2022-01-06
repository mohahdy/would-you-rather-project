import {_getQuestions,_saveQuestion, _saveQuestionAnswer} from '../utils/_DATA'
export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER = 'ADD_ANSWER'
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
function addAnswer(integratedAnswer){
    return{type: ADD_ANSWER, integratedAnswer}
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

export function handleAddAnswer(integratedAnswer){
    return(dispatch)=>{
        console.log("IntegratedAnswer",integratedAnswer)
        _saveQuestionAnswer(integratedAnswer).then(()=>dispatch(addAnswer(integratedAnswer)))
    }
}
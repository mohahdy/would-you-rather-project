import { GET_QUESTIONS } from "../actions/questions"
import {ADD_QUESTION} from "../actions/questions"
import {ADD_ANSWER} from "../actions/questions"
export default function questions (state={},action){
    switch(action.type){
        case GET_QUESTIONS:
           return {
               ...state, 
               ...action.questions
            }
            case ADD_QUESTION:
               return {
                ...state,
                [action.question.id]:action.question
                }
            case ADD_ANSWER:

                    return {...state,
                        [action.integratedAnswer.qid]:{
                        ...state[action.integratedAnswer.qid],
                        [action.integratedAnswer.answer]:{
                            ...state[action.integratedAnswer.qid][action.integratedAnswer.answer],
                        votes: state[action.integratedAnswer.qid][action.integratedAnswer.answer].votes.concat([action.integratedAnswer.authedUser])
                        }
                    }
                        }
           default: 
           return state
    }
}
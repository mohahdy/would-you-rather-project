import {GET_USERS} from '../actions/users'
import {ADD_QUESTION} from '../actions/questions'
import {ADD_ANSWER} from '../actions/questions'
export default function users (state={},action){
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.author]:{
                    ...state[action.question.author],
                    questions:state[action.question.author].questions.concat([action.question.id])
                }
            }
        case ADD_ANSWER:

        return {...state,
            [action.integratedAnswer.authedUser]:{
                ...state[action.integratedAnswer.authedUser],
                answers:{...state[action.integratedAnswer.authedUser].answers,
                    [action.integratedAnswer.qid]:action.integratedAnswer.answer
                }
            }
        }
            default:
                return state
    }
}
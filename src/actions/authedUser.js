export const GET_AUTHED_USER='GET_AUTHED_USER'
export const SET_AUTHED_USER='SET_AUTHED_USER'

export default function setAuthedUser(authedUser){
    return {
        type:SET_AUTHED_USER,
        authedUser
    }
}

import React,{setState,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {handleAddQuestion} from '../actions/questions'
export default function NewQuestion(){
    const [state,setState] = useState({optionOneText:'',optionTwoText:''})
    const author = useSelector((state)=>state.authedUser)
    const dispatch = useDispatch()
    const {optionOneText, optionTwoText} =state

    const handleOpt1= (e)=>{
        const text = e.target.value
        
        setState(prevState => {
            return {...prevState, optionOneText: text};
          });
    }
    const handleOpt2= (e)=>{
        const text = e.target.value
        setState(prevState => {
            return {...prevState, optionTwoText: text};
          });
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const question = {optionOneText, optionTwoText,author}
        dispatch(handleAddQuestion(question))
    }
return <div className="center">
    <h3> Create a new question</h3>
    <form>
        <div> Would You Rather ... ?</div>
    <textarea name="optionOne" placeholder="Option One" onChange={handleOpt1}>
    </textarea>
        <p>OR..</p>
        <textarea name="optionTwo" placeholder="Option Two" onChange={handleOpt2}>
    </textarea>
    <div>
    <button disabled={(optionOneText==='')||(optionTwoText==='')} onClick={handleSubmit}>Submit</button>
    </div>
    </form>
</div>
}
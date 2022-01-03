
const logger = (store)=>(next)=>(action) => {
    console.group(action.type)
    console.log("Action: ", action)
    const newState = next(action)
    console.log("new state : ", store.getState())
    console.groupEnd()
    return newState;
  }
  export default logger;
  
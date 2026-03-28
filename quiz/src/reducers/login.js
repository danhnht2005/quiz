const loginReducer = ((state = false, action) => {
  switch (action.type) {
    case "CHECKED_LOGIN":
      return action.status;
    default:
      return state;
  }
})
  
export default loginReducer;
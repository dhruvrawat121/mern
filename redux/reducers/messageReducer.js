
const initialState={};

const messageReducer=(state =initialState, action)=>{

    switch(action.type){
        case "LOGIN_SUCCESSFUL":
            return{
                               
                logInSuccess:action.payload,
            }

        case "LOGIN_FAILED":
            return{
                
                logInFailed:action.payload,
            }
        case "SIGNUP_SUCCESSFUL":
            return{
                
                signUpSuccess:action.payload
            }
        case "SIGNUP_FAILED":
            return{
                
                signUpFailed:action.payload
            }
        default:
            return state;
    }
}
export default messageReducer;


const initialState = false

const signUp=(state= initialState,action)=>{
    switch(action.type){
        case "SIGN_UP":
            return !state;
        default:
            return state;

        
    }
}
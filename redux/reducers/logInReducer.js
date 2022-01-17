

const initialState= false;
const  logInReducer=(state=initialState, action)=>{
        switch(action.type) {
            case "LOGIN":
                return !state;
            default:
                return state;
            }
        
    
};

export default logInReducer;
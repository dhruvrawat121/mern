const initState={user:[]}

export const SignUpReducer =(state=initState,action)=>{
    switch(action.type){
        case "REGISTER_USER_REQUEST":
            return{
                loading:true
            }
      
        case "REGISTER_USER_SUCCESS":
            return{
                ...state,
                success:action.payload.success,
                loading:false
            }
       
        case "REGISTER_USER_FAIL":
            return{
                ...state,
                error:action.payload
                
            }
            // for load User details
        case "LOAD_USER_REQUEST":
                return{
                    ...state,
                    loading: true,
                    isAuthenticated:false
                }

        case "LOAD_USER_FAIL":
            return{
                error:action.payload,
                loading:false,
                isAuthenticated: false
            }
        
        case "LOAD_USER_SUCCESS":
                return{
                    user:action.payload,
                    loading: false,
                    isAuthenticated:true
                }
        case "CLEAR_ERRORS":
            return{
                clear:null
            }
        default:
            return{
                ...state
            }
    }
}
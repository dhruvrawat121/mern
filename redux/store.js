import { createStore,applyMiddleware,compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { HYDRATE,createWrapper } from "next-redux-wrapper";
import allReducers from "./reducers";


const bindMiddleware = (middleware)=>{
  if(process.env.NODE_ENV !=='production'){
    const{composeWithDevTools} = require('@redux-devtools/extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const reducer = (state, action)=>{
  if(action.type===HYDRATE){
    const nextState = {
      ...state,
      ...action.payload
    }
    return nextState
  }else{
    return allReducers(state,action)
  }
}

const initStore =()=>{
  return createStore(reducer,bindMiddleware([thunkMiddleware]))
}
 export const wrapper = createWrapper(initStore)
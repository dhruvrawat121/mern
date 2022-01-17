import { createStore,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import allReducers from "./reducers";


      const composeEnhancers =
      (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
      compose;

      const initStore =()=>createStore(allReducers, composeEnhancers(applyMiddleware(thunk)))


export const wrapper = createWrapper(initStore)
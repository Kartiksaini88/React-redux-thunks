import { legacy_createStore as createstore,combineReducers,applyMiddleware } from "redux";
import { loginReducer } from "./login/reducer";

import { registerReducer, Registerstore } from "./register/reducer";

const middleware = (store)=>(next)=>(action)=>{
console.log("Action",action)
next(action)
}

const rootreducer = combineReducers({
    register:registerReducer,
    // login:loginReducer,
    login:loginReducer
})



export const store = createstore(rootreducer,applyMiddleware(middleware))

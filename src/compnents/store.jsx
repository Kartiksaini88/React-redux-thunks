import { legacy_createStore as createstore,combineReducers } from "redux";
import { loginReducer } from "./login/reducer";

import { registerReducer, Registerstore } from "./register/reducer";

const rootreducer = combineReducers({
    register:registerReducer,
    // login:loginReducer,
    login:loginReducer
})



export const store = createstore(rootreducer)

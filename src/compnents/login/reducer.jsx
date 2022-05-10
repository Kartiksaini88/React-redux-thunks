import { ADD_LOGIN } from "./action";


export const LoginStore ={
     login:[]
}

export const loginReducer = (store = LoginStore , {type , payload})=>{
    switch(type){
        case ADD_LOGIN:return{...store , login:[...store.login,payload]}
        default:return store
    }
}
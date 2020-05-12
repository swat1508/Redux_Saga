import { FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE } from "./userTypes";

const initialState={
    loading:false,
    users:[],
    error:''
}

const userReducer = (state=initialState , action) =>{

    switch(action.type){
        
                case FETCH_USERS_REQUEST:{
                    console.log('6. UserReducer - switch - FETCH_USERS_REQUEST');
                    return {
                        ...state,
                        loading:true
                    }
                }
                case FETCH_USERS_SUCCESS:{
                    console.log('9. UserReducer - switch - FETCH_USERS_SUCCESS');
                    return {
                        ...state,
                        loading:false,
                        users:action.payload,
                        error:''
                    }
                }
                case FETCH_USERS_FAILURE:{
                    return {
                        loading:false,
                        users:[],
                        error:action.payload
                    }
                }
                default:{
                    return initialState
            }
    
    }
}

export default userReducer;
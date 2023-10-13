const initialState = {
    value:"",
    error:false,
    loading:false, 
    deleted:false,
    confirmed:false,
};


const reducer = (state, action) => {
    if(action.type === "ERROR") {
        return {...state,error:true,loading:false};
    }

    if(action.type === "CHECK"){
        return{...state, loading:true};
    }

    if(action.type === "CONFIRM"){
        return {...state, loading:false , error:false , confirmed:true}
    }

    if(action.type === "DELETE"){
        return {...state, deleted:true}
    }

    if(action.type === "RESET"){
        return {...state, confirmed:false, deleted:false , value:""}
    }

    return initialState;
};
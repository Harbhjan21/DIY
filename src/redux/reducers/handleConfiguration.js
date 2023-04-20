
const initialState =0;

const handleConfiguration = (state = initialState, action) => {
    switch(action.type){    
    case "SET_CURRENT_PAGE" :
        console.log(action.payload,"00000");
            return action.payload;
            
    default :    return state;
    }
}

export default handleConfiguration
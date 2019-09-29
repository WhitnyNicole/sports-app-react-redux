export default (state = [], action) => {
    switch(action.type) {
        case "FETCH_TEAMS_SUCCESS":
            return action.payload 
        default: 
            return state;
    }
}
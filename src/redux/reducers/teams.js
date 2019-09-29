export default (state = [], action) => {
    switch(action.type) {
        case "FETCH_TEAMS_SUCCESS":
            return action.teams
        case "TEAM_CREATE_SUCCESS":
            return [...state, action.payload];
        default: 
            return state;
    }
}
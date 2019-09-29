export const getTeams = () => {
    return function(dispatch) {

    return fetch(`http://localhost:3001/teams`)
        .then(res => res.json())
        .then(teams => dispatch({type: 'FETCH_TEAMS_SUCCESS', payload: teams}))
    };
};
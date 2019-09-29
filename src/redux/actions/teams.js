const fetchTeams = (teams) => {
    return {
        type: 'FETCH_TEAMS_SUCCESS', 
        teams  
    }
}

export const getTeams = () => {
    return function(dispatch) {
    return fetch(`http://localhost:3001/teams`)
        .then(res => res.json())
        .then(teams => dispatch(fetchTeams(teams)))
    };
};

export const createTeam = (teamObject) => {
    const teamToCreate = { team: teamObject };
    return dispatch => {
            fetch(`http://localhost:3001/teams`, {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({teamToCreate})
            })
            .then(res => res.json())
            .then(team => 
                dispatch({
                    type: 'TEAM_CREATE_SUCCESS', 
                    payload: team
                })
            )
        }
}
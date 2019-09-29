import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { getTeams } from '..redux/actions/teams'

class TeamsList extends Component {

    // componentDidMount() {
    //     this.props.getTeams()
    // }

    render() {
        return (
            <div>
                <h1> Teams List </h1>
            </div>
        )
    }
}

export default TeamsList;
// export default connect(
//     null, 
//     { getTeams }
//     )(TeamsList);
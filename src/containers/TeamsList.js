import React, { Component } from 'react'
import { connect } from 'react-redux'

class TeamsList extends Component {

    render() {
        if (this.props.teams.length == 0) {
            return <p>Loading...</p>
        }
        return (
            <div>
                <h1> Teams List </h1>
                {this.props.teams.map(team => (
                    <p>{team.name}</p>
                ))}
            </div>
        )      
    }
}

const mapStateToProps = (state) => {
    return {
        teams: state
    }
}

// export default TeamsList;
export default connect(mapStateToProps)(TeamsList);
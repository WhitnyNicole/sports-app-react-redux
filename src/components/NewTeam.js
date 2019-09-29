import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTeam } from '../redux/actions/teams.js';


class NewTeam extends Component {

    state ={
        name: " ",
        sport: " ",
        num_of_players: 15
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = e => {
        e.preventDefault()
        this.props.createTeam(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <label>Name</label>
                    <input 
                        onChange={this.handleChange}
                        required 
                        type="text" 
                        name="name" 
                        value={this.state.name} 
                    />
                    <label>Sport</label>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        required
                        name="sport" 
                        value={this.state.sport} 
                    />
                    <label>Number of Players</label>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        required 
                        name="num_of_players" 
                        value={this.state.num_of_players} 
                    />
                <button type="submit">Create Team</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {
    createTeam
})(NewTeam)
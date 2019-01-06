import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
    state = {}

    componentDidMount() {
        const url = "https://randomuser.me/api/"
        fetch(url)
            .then(resp => resp.json())
            .then(json => {
                const people = json.results[0]
                this.setState({people})
            })
    }
  
    render() {
        const { people } = this.state
        console.log(people)
        if (people) {
          return (
            <div className="App">
              <img src={people.picture.large} alt={people.name.first.last}></img>
              <h4>First Name:</h4> {people.name.first.toUpperCase()}
              <h4>Last Name:</h4> {people.name.last.toUpperCase()}
              <h4>Email:</h4> {people.email}       
              <h4>Ph:</h4> {people.cell}

            </div>
          )
          } else {
              return (
                <div>Loading...</div>
              )
        }
    }
}

export default Profile;
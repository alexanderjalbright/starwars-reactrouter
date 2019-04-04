import React, { Component } from "react";

export default class PlanetDetailsPage extends Component {
  constructor() {
    super();
    this.state = {
      planet: { name: "<loading...>" }
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`https://swapi.co/api/planets/${id}`)
      .then(res => res.json())
      .then(json => this.setState({ planet: json }));
  }
  render() {
    const id = this.props.match.params.id;
    return (
      <div>
        <h1>Planet Details #{id}</h1>
        <h2>Name {this.state.planet.name}</h2>
      </div>
    );
  }
}

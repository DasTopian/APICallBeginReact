import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      character: {}
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1500);
    fetch("https://swapi.co/api/people/1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          character: data
        });
      });
  }

  render() {
    let loadingText = this.state.isLoading
      ? "Loading...."
      : this.state.character.name;
    return <h1>{loadingText}</h1>;
  }
}

export default App;

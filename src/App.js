import React, { Component } from 'react'

import post1 from './blog-post.1.md'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { md: "" }
  }

  componentDidMount() {
    fetch(post1)
      .then((res) => res.text())
      .then((md) => {
        this.setState({ md })
      })
  }

  render() {
    return (
      <pre>{this.state.md}</pre>
    )
  }
}

export default App

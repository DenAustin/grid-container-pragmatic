import React, { Component } from 'react'

 class ClassApp extends Component {
  state = {
    loading: true,
    fellow: null
  }

  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=3"
    const response = await fetch(url)
    const data = await response.json()
    this.setState({ fellow: data.results[0], loading: false})
    
  }

  render() {
    return (
      <>
        {this.state.loading || !this.state.fellow? (<div>loading...</div>) :
        (<div>
            {/* <div>{this.state.fellow.name.title}</div>
            <div>{this.state.fellow.name.first}</div>
            <div>{this.state.fellow.name.last}</div> */}
            <img src={this.state.fellow.picture.large} alt="img" className="img"></img>
          </div>)}
      </>
    )
  }
}

export default ClassApp
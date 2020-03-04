import React,  { Component } from "react";


export default class GifSearch extends Component {
  constructor() {
    super()

    this.state = {
      query: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = event => {
    this.setState({
      query: event.target.value
    })
  }
  
  render() {
    return( 
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label  >Search for a Gif:&nbsp;</label>
          <input 
            type='text' 
            name='query' 
            value={this.state.query} 
            onChange={event => this.handleChange(event)} 
          />
          <input type='submit' value='Search' />
        </form>
      </div>
    )
  }
}
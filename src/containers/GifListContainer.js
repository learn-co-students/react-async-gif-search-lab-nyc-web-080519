import React, { Component } from "react";
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends Component {
  constructor(){
    super()

    this.state = {
      gifs: []
    }
  }
  
  handleSubmit = ({ query }) => {
    console.log(query)
    const api_key = '1dg7TukE9mOaYxxBMF6Q8C69GZSJTnDO'
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${api_key}&rating=g`

    fetch(url)
    .then(resp => resp.json())
    .then(body => {
      const data = body.data.slice(0, 3)
      const gifs = data.map(gif =>{
        return  {image: gif.images.original.url, id: gif.id}
      })

      this.setState({ gifs })
    })
  }

  componentDidMount(){
    this.handleSubmit({query: 'dolphins'})
  }
  
  render() {
    return (
      <div>
        < GifSearch handleSubmit={this.handleSubmit}/> 
        < GifList gifs={this.state.gifs} />
      </div>
    )
  }

}

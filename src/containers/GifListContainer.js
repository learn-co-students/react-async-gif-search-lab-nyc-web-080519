import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {

    state = {
        searchTerm: "",
        gifs: []
    }

    changeHandler = (event) => {
        this.setState({
            searchTerm: event.target.value,
        })
        this.fetchGifs(event.target.value)
    }

    fetchGifs = (term) => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
            .then(data => this.setState({ gifs: data.data}))
    }

    render () {
        console.log("state of gifs:", this.state.gifs)
        return (
            <div>
                <GifSearch searchTerm ={this.state.searchTerm} changeHandler={this.changeHandler} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer
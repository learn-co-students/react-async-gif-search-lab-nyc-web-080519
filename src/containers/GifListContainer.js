import React from "react"
import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch"

class GifListContainer extends React.Component {

    state={
        gif: [],
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = (search = "Yankees") => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(response => response.json())
        .then(gif => this.setState({
            gif: gif.data
        })
        )
    }

    render(){
        return (
            <div className="gif-list-container">
                <GifList gif = {this.state.gif}/>
                <GifSearch search={this.state.search} changeHandler = {this.changeHandler} fetchData = {this.fetchData}/>
            </div>
        )
    }
}

export default GifListContainer
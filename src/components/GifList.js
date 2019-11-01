import React from 'react'
import GifCard from './GifCard'

const GifList = (props) => {
    let gifsArray = props.gifs.map(gif => <GifCard key={gif.id} gif={gif} />)
    return (
        <div>
            {gifsArray}
        </div>
    )
}

export default GifList
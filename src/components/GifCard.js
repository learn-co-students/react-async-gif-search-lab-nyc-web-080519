import React from 'react'

const GifCard = (props) => {
    console.log(props.gif.url)
    return (
        <div>
            <img src={props.gif.images.original.url} alt="" />
        </div>
    )
}

export default GifCard
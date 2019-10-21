import React from "react"

const GifList = (props) => {
    return (
        <div>
            {props.gif.map(gifObj => <img key = {gifObj.id} alt = "gif" src = {gifObj.images.original.url}/>)}
        </div>
    )
}

export default GifList
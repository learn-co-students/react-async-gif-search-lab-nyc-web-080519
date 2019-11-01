import React from 'react'

class GifSearch extends React.Component {
    
    
    render () {
        // console.log("props:", this.props)
        return (
            <form>
                <input type="text" placeholder="Search for a GIF" name="search" value={this.props.searchTerm} onChange={(event) => this.props.changeHandler(event)} />
            </form>
        )
    }
}

export default GifSearch
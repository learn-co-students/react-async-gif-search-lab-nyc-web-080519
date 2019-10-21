import React from "react"

class GifSearch extends React.Component {

    state={
        search: ""
    }

    changeHandler = (event) => {
        this.setState({
            search: event.target.value
        })
    }
    
    submitHandler = event => {
        event.preventDefault()
        this.props.fetchData(this.state.search)
        this.setState({
            search: ""
        })
    }

    render() {
        console.log(this.state.search)
        return (
            <div>
                <h3>Enter a Search Term</h3>
                <form onSubmit = {this.submitHandler}>
                    <input placeholder = "Search" value={this.state.search} onChange={this.changeHandler}></input>
                    <button>Find Gifs</button>
                </form>
            </div>
           
        )
    }
}


export default GifSearch
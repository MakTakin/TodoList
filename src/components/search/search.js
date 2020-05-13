import React, {Component} from "react";
import "./search.css"

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            term: ""
        }
        this.onSearchChange = (e) => {
            const term = e.target.value
            this.setState( {term} )
            this.props.onSearchChange(term)


        }

    }

    render() {
        return (
                <input className='search-input' placeholder="search"
                       onChange={this.onSearchChange}
                       value={this.state.term}/>
        )
    }
}


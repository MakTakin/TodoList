import React, {Component} from "react";
import "./item-add.css"



export default class ItemAdd extends Component {
    constructor() {
        super();
            this.state = {
                label: ""
            }
        this.onLabelChange = (e) => {
            this.setState({
               label : e.target.value
            })
        }

        this.onSubmit = (e) => {
            e.preventDefault()
            this.props.onAddItem(this.state.label)
            this.setState({
                label: ""
            })
        }

    }
    render() {
        return (
            <form className="item-add-form d-flex"
                  onSubmit={this.onSubmit}>

                <input type="text" className="form-control"
                       placeholder="What needed to do?"
                       onChange={this.onLabelChange}
                       value={this.state.label}/>
                <button
                    className="btn btn-outline-secondary">
                    Add item
                </button>
            </form>
        )
    }
}

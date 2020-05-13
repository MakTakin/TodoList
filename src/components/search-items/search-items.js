import React, {Component} from "react";
import "./search-items.css"

export default class SearchItems extends Component {
    constructor() {
        super();
        this.filterButtons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' }
        ];
    }

    render() {
        const {filter, onFilterChange} = this.props
        const buttons = this.filterButtons.map(({name, label}) => {
            const isActive = name === filter;
            const clazz = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');
            return (
                <button type="button"
                        className={`btn ${clazz}`}
                        key={name}
                        onClick={()=>onFilterChange(name)}>
                    {label}
                </button>
            )
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
    )
    }
}



import React, {Component} from "react";
import "./todo-list-item.css"

export class TodoListItem extends Component {
   /* constructor() {
        super();
        this.state = {
            done:false,
            important: false
        }
        this.onLabelClick = () => {
            this.setState(({done}) =>({
               done: !done
            }))
            }
        this.onBtnClick = () => {
            this.setState(({important}) =>({
               important: !important
            }))
            }
        }*/

    render () {
        const {label, onDeleted,
               onToggleImportant,
               onToggleDone} = this.props
        let classNames ="";
        if(this.props.done === true) {
                classNames+= " done";
        }
        if (this.props.important === true) {
                classNames+= " important";
        }
        return (
            <span className={classNames}>
            <span
            onClick = {onToggleDone} >
                {label}
            </span>
            <button type="button" className="btn btn-outline-success"
                    onClick = {onToggleImportant}>
                    <i className="fa fa-exclamation" ></i>
            </button>
            <button type="button" className="btn btn-outline-danger"
                    onClick = {onDeleted}>
                    <i className="fa fa-trash-o" ></i>
            </button>

            </span>
        )
    }
}

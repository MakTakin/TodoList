import React from "react";
import "./app-header.css"
const AppHead = ({todo, done}) => {
    return (
        <div className='app-header d-flex mt-5'>
        <h1>ToDo List</h1>
        <h2>{done} done {todo} do</h2>
        </div>
    )
}

export default AppHead;
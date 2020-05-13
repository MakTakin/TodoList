import React, {Component} from 'react';
import AppHead from "../app-header/app-header";
import Search from "../search/search";
import TodoList from "../todo-list/todo-list";
import ItemAdd from "../item-add/item-add";
import './app.css'
import SearchItems from "../search-items/search-items";

export default class App extends Component {
    constructor() {
        let maxId = 100;
        super();
        this.createTodoItem = (label) =>  {
            return {
                label,
                important: false,
                done: false,
                id: maxId++
            }
        }
        this.state = {
           todoData : [
                this.createTodoItem('Drink Coffee'),
                this.createTodoItem('Make App'),
                this.createTodoItem('Sleep')
            ],
            term : "",
            filter : "all"
        }


        this.deleteItem = (id) => {
            this.setState (({todoData}) =>{
                const indx = todoData.findIndex(el => el.id === id);
                const todoDataDel = [
                    ...todoData.slice(0, indx),
                    ...todoData.slice(indx +1)]
                return {
                    todoData : todoDataDel
                }

            })
        }
        this.addItem = (text) => {
            const newElem = this.createTodoItem(text)
            this.setState(({todoData}) => {
                const todoDataAdd = [
                    ...todoData,
                    newElem]
                return {
                    todoData : todoDataAdd
                }

            })
        }
        this.addProperty = (arr, id, property) => {
                const indx = arr.findIndex(el => el.id === id);
                const oldItem = arr[indx]
                const newItem = {
                    ...oldItem,
                    [property]: !oldItem[property]
                }
                 return [
                    ...arr.slice(0, indx),
                    newItem,
                    ...arr.slice(indx +1)
                 ];
        }
        this.toggleDone = (id) => {
            this.setState(( {todoData} ) => {
                return {
                    todoData: this.addProperty(todoData,id,'done')
                }
            })

        }
        this.toggleImportant = (id) => {
           this.setState(( {todoData} ) => {
                return {
                    todoData: this.addProperty(todoData,id,'important')
                }
            })
        }
        this.search = (items, term) => {
            if (term.length === 0) {
                return items
            }
            return items.filter( (item) => {
               return item.label.toLowerCase()
                      .indexOf(term.toLowerCase()) > -1
            })

        }
        this.onSearchChange = (term) => {
            this.setState({term})
        }
        this.onFilterChange = (filter) => {
            this.setState({filter});
        };
        this.filter = ( items, filter) => {
            switch (filter) {
                case 'all' :
                    return items
                case 'active' :
                    return items.filter(item => !item.done)
                case 'done' :
                    return items.filter(item => item.done)
                default:
                    return items
            }

        }
    }


    render() {
            const {todoData, term, filter} =this.state
            const visibleItem = this.filter(this.search(todoData, term), filter)
            const doneCount = todoData
                              .filter((item) => item.done === true).length
            const doCount = todoData.length - doneCount
            return (
            <div className='todo-app'>
                <AppHead done={doneCount} todo={doCount}/>
                <div className='d-flex mb-3'>
                <Search onSearchChange={this.onSearchChange}/>
                <SearchItems filter={filter}
                onFilterChange={this.onFilterChange}/>
                </div>
                <TodoList todos={visibleItem}
                          onDeleted ={this.deleteItem}
                onToggleDone={this.toggleDone}
                onToggleImportant={this.toggleImportant}/>
                 <ItemAdd onAddItem = {this.addItem}/>
            </div>
        )
    }


    };


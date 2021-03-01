import React, {Component} from "react"
import ItemTask from "./ItemTask";

class ToDo extends Component {

    state={
        tasks:[],
        newTask:"",
        isLoading: true
    }

    handleAddNewTask=()=>{

        console.log(this.state.newTask);

        const data = {
            title: this.state.newTask,
            done: false
        }

        const url = "http://localhost:1337/all-tasks";
        fetch(url, {
                method: 'POST',
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data) // body data type must match "Content-Type" header
            }).then(res=>res.json())
            .then((createdTaskResponse)=>{
                // console.log(`🚀 -> createdTaskResponse`, createdTaskResponse)
                // this.setState((prevState)=>({
                //     tasks:[...prevState.tasks, createdTaskResponse],
                //     isLoading: false,
                //     newTask: ""
                // }))

                this.getAllTasks()
            })
    }

    hanleChangeNewItem=(event)=>{
        this.setState({newTask: event.target.value})
    }

    componentDidMount(){
        this.getAllTasks()
    }

    getAllTasks=()=>{
        fetch("http://localhost:1337/all-tasks")
            .then(res=>res.json())
            .then((tasksResponse)=>{
                this.setState({
                    tasks: tasksResponse,
                    isLoading: false
                })
            })
    }


  render(){

    return (
      <div className="ToDo" >
          {this.state.isLoading?
          <p>Loading...</p>
          :
            <div>
                <h3> All tasks:</h3>
                <ul>
                    {
                        this.state.tasks.map((itemTask)=>{
                            return (<ItemTask key={itemTask.id} task={itemTask} />)
                        })
                    }
                </ul>
                <div>
                    <input type="text" onChange={this.hanleChangeNewItem} value={this.state.newTask} />
                    <button onClick={this.handleAddNewTask}>Add New</button>
                </div>
            </div>
        }
      </div>
    );
  }
}

export default ToDo;


import React, {Component } from 'react'

class TaskForm extends Component {
state = {
  taskName: '',
  taskDescription: ''
}

handleSubmit = event => {
  event.preventDefault()

  this.props.addTask(this.state.taskName, this.state.taskDescription)

  this.setState({
    taskName: '',
    taskDescription: ''
  })
}

handleChange = event => {
  this.setState({
    [event.target.name]:event.target.value
  })

}

render() {
  return(
    <form onSubmit={this.handleSubmit}>
      <input
        name="taskDescription"
        value={this.state.taskDescription}
        onChange={this.handleChange}
        />
    <button>Add</button>
    </form>

  )

}




}

export default TaskForm
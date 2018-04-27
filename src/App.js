import React from 'react';
import './App.css';
import Counter from './Counter';
import TaskForm from './TaskForm';



class App extends React.Component {
    render() {
        return (
            <div>
            <Counter/>
                <TaskForm addTask={(taskName, taskDescription) => alert(taskName +', ' + taskDescription)}/>
            </div>

        );
    }
}

export default App;

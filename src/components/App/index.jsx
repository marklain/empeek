import React, {Component} from 'react';
import v4 from 'uuid';
import TasksList from '../TasksList';
import Comments from '../Comments';
import Header from '../Header';

class App extends Component {
    state = {
        TasksList: []
    }

    componentWillMount() {
        this.setState({
            TasksList: JSON.parse(localStorage.getItem('tasks-list')) || []
        })
    }

    _addTaskToList = value => {
        let task = {
            id: v4(),
            name: value,
            comments: [],
            isActive: false
        };
        this.setState(prevState => ({
            TasksList: [
                ...prevState.TasksList,
                task
            ]
        }));
        setTimeout(() => {
            let TasksList = JSON.stringify(this.state.TasksList);
            localStorage.setItem('tasks-list', TasksList);
        }, 100);
    }
    _deleteFromTaskList = id => {
        let list = this.state.TasksList.filter(task => task.id !== id)
        this.setState({TasksList: list});
        setTimeout(() => {
            let TasksList = JSON.stringify(this.state.TasksList);
            localStorage.setItem('tasks-list', TasksList);
        }, 100);
    }
    _toggleActiveTask = id => {
        let list = this.state.TasksList.map(task => {
            if (task.id === id) {
                task.isActive = true;
                return task;
            } else {
                task.isActive = false;
                return task
            }
        });
        this.setState({TasksList: list});
        setTimeout(() => {
            let TasksList = JSON.stringify(this.state.TasksList);
            localStorage.setItem('tasks-list', TasksList);
        }, 100);
    }

    _addComment = value => {
        let list = this.state.TasksList.map(task => {
            if (task.isActive === true) {
                task.comments.push(value);
                return task;
            } else
                return task;
            }
        );
        this.setState({TasksList: list});
        setTimeout(() => {
            let TasksList = JSON.stringify(this.state.TasksList);
            localStorage.setItem('tasks-list', TasksList);
        }, 100);
    }

    render() {
        return (<div className="wrapper">
            <Header/>
            <div className="main">
                <TasksList addTaskToList={this._addTaskToList} TasksList={this.state.TasksList} deleteFromTaskList={this._deleteFromTaskList} toggleActiveTask={this._toggleActiveTask}/>
                <Comments TasksList={this.state.TasksList} addComment={this._addComment}/>
            </div>
        </div>);
    }

}

export default App;

import React from 'react';
import PropTypes from 'prop-types';
import ItemList from '../ItemList';

const TasksList = ({TasksList, addTaskToList, deleteFromTaskList, toggleActiveTask}) => {
    let input = null;
    return (<div className="tasks">
        <h2 className="main__title">Items</h2>
        <form className="tasks__form" onSubmit={e => {
                e.preventDefault();
                addTaskToList(input.value)
            }}>
            <input type="text" className="tasks__input" ref={node => input = node} placeholder="Type name here..."/>
            <button className="tasks__btn">Add new</button>
        </form>
        <ul className="list">
            {
                TasksList.map(task => {
                    if (task !== undefined) {
                        return (<ItemList taskName={task.name} key={task.name} commentsLength={task.comments.length} deleteFromTaskList={deleteFromTaskList} id={task.id} toggleActiveTask={toggleActiveTask}/>)
                    }
                    return null;
                })
            }
        </ul>
    </div>);
};

TasksList.propTypes = {
    TasksList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(PropTypes.string),
        isActive: PropTypes.bool.isRequired
    })),
    addTaskToList: PropTypes.func.isRequired,
    deleteFromTaskList: PropTypes.func.isRequired,
    toggleActiveTask: PropTypes.func.isRequired
}

export default TasksList;

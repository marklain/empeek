import React from 'react';
import PropTypes from 'prop-types';

const ItemList = ({taskName, commentsLength, id, deleteFromTaskList, toggleActiveTask}) => (<li className="list__item">
    <p onClick={e => {
            toggleActiveTask(id);
        }} className="list__name">{taskName}&nbsp;<span className="list__comment-num">{commentsLength}</span>
    </p>
    <button onClick={e => {
            deleteFromTaskList(id);
        }} className="list__btn">Delete</button>
</li>);

ItemList.propTypes = {
    taskName: PropTypes.string.isRequired,
    commentsLength: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    deleteFromTaskList: PropTypes.func.isRequired,
    toggleActiveTask: PropTypes.func.isRequired
}
export default ItemList;

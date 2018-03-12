import React from 'react';
import PropTypes from 'prop-types';
import PostItem from '../PostItem';

const Comments = ({TasksList, addComment}) => {
    let post = TasksList.find(task => task.isActive === true),
        activePost = null,
        commentTxt = null,
        postName = '';
    if (post === undefined) {
        post = null;
    } else {
        activePost = post.comments.map(comment => <PostItem key="1" postTxt={comment}/>);
        postName = `of Task, which name is "${post.name}"`;
    };
    return (<div className="comments">
        <h2 className="main__title">Comments {postName}</h2>
        <ul className="posts">
            {activePost}
        </ul>
        <form className="new-post-form">
            <div className="new-post-form__img"></div>
            <textarea onKeyDown={e => {
                if (e.ctrlKey && e.keyCode === 13) {
                    addComment(commentTxt.value);
                        commentTxt.value = '';
                }
            }} className="new-post-form__message" ref={node => commentTxt = node}></textarea>
        </form>
    </div>);
}

Comments.propTypes = {
    TasksList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(PropTypes.string),
        isActive: PropTypes.bool.isRequired
    })),
    addComment: PropTypes.func.isRequired
}

export default Comments;

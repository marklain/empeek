import React from 'react';
import PropTypes from 'prop-types';

const PostItem = ({postTxt}) => (<li className="posts__item">
    <div className="posts__img"></div>
    <p className="posts__txt">{postTxt}</p>
</li>);

PostItem.PropTypes = {
    postTxt: PropTypes.string.isRequired
};

export default PostItem;

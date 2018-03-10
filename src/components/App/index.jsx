import React, { Component } from 'react';

class App extends Component {

    render() {
        return (
            <div className="wrapper">
                <div className="header">
                    <h1 className="header__title">dairy app</h1>
                    <p className="header__descr">Comment with no sense</p>
                </div>
                <div className="main">
                    <div className="items">
                        <h2 className="main__title">Items</h2>
                        <form className="items__form">
                            <input type="text" className="items__input" placeholder="Type name here..."/>
                            <button className="items__btn">Add new</button>
                        </form>
                        <ul className="list">
                            <li className="list__item">
                                First item with custom name &nbsp;
                                <span className="list__comment-num">132</span>
                                <button className="list__btn">Delete</button>
                            </li>
                            <li className="list__item list__item--active">
                                Second type &nbsp;
                                <span className="list__comment-num">3</span>
                                <button className="list__btn">Delete</button>
                            </li>
                        </ul>
                    </div>
                    <div className="comments">
                        <h2 className="main__title">Comments #2</h2>
                        <ul className="posts">
                            <li className="posts__item">
                                <div className="posts__img"></div>
                                <p className="posts__txt">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio facere cumque saepe a quidem dolores exercitationem nobis iste quod corrupti iure, aperiam rem molestias pariatur laboriosam, dicta ex eius. Omnis!
                                </p>
                            </li>
                            <li className="posts__item">
                                <div className="posts__img"></div>
                                <p className="posts__txt">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio facere cumque saepe a quidem dolores exercitationem nobis iste quod corrupti iure, aperiam rem molestias pariatur laboriosam, dicta ex eius. Omnis!
                                </p>
                            </li>
                            <li className="posts__item">
                                <div className="posts__img"></div>
                                <p className="posts__txt">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis magnam distinctio labore illum impedit odio deleniti laudantium! Perferendis atque veniam officia maxime vitae natus magni nisi aliquid ipsa eum soluta voluptatibus consequatur totam autem mollitia magnam officiis, amet nostrum suscipit recusandae voluptates et facere odit. Corporis, debitis. Ducimus voluptates non, cupiditate sunt nisi praesentium maiores cum dolores minus? Fugiat reiciendis quasi in facilis nostrum, rerum at provident quo modi vitae!
                                </p>
                            </li>
                        </ul>
                        <form className="new-post-form">
                            <div className="new-post-form__img"></div>
                            <textarea className="new-post-form__message"></textarea>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;

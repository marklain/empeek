import React, { Component } from 'react';

class ItemList extends Component {

    render() {
        return (
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
        );
    }

}

export default ItemList;

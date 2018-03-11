import React, { Component } from 'react';
import ItemList from '../ItemsList';
import Comments from '../Comments';
import Header from '../Header';

class App extends Component {

    render() {
        return (
            <div className="wrapper">
                <Header />
                <div className="main">
                    <ItemList />
                    <Comments />
                </div>
            </div>
        );
    }

}

export default App;

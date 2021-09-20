import React from "react";
import './App.css';
import AddList from './components/AddList/AddList.js';
import ListsContainer from "./components/List/ListsContainer";


const App = (props) => {
    return (
        <div className="App">
            <div className="App-header">
                <ListsContainer />
            </div>
        </div>
    );
}

export default App;

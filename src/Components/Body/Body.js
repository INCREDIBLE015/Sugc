import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Main from '../Main/Main';
import "./Body.css";
import Widget from '../Widget/Widget';


function Body() {
    return (
        <div className="body">
            <Sidebar />
            <Main />
            <Widget />
        </div>
    )
}

export default Body

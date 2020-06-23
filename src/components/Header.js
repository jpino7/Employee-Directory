import React, { Component } from 'react';
import "../styles/Header.css";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Employee Directory</h1>
                <img className="logo" src="./images/red-folder-business-user.png" alt="Employee Directory Logo" />
                <p>Hover over NAME heading and click to sort by First Name</p>
            </div>
        )
    }
}

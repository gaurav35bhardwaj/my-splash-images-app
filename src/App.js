import React, { Component } from 'react';
import './App.css';
import { MainRoutes } from './Routes';
import { BrowserRouter } from "react-router-dom";
import { createUsers } from './utils/helperMethods';
const users = [
    {
        userName: "Gaurav",
        password: "12345",
        favourites: [],
    },
    {
        userName: "Guest",
        password: "12345",
        favourites: [],
    }
]
class App extends Component {
    constructor(props){
        super(props);
        createUsers(users);
    }
    render(){
        return (
            <div className="App">
                <BrowserRouter>
                  <MainRoutes />
                </BrowserRouter>
            </div>
        );
    }
  
}

export default App;

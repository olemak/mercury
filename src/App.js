import React, { Component } from "react";
import "./App.css";
import Vehicle from "./components/Vehicle";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Mercury</h1>
                </header>
                <Vehicle />
            </div>
        );
    }
}

export default App;

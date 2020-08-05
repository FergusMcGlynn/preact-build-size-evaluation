import React from 'react';
import {useEffect, useState} from 'preact/hooks'
import './App.css';
import _ from 'lodash';
import {Auth} from "aws-amplify";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Select from "react-select";
import Popup from "reactjs-popup";


function App() {

    const [people, setPeople] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const json = await response.json();
            setPeople(json);
        };

        fetchData();

    }, []);

    const currentUser = async () => {
        return Auth.currentAuthenticatedUser();
    };

    const someRoutes = () => {
        return (
            <React.Fragment>
                <Router basename={process.env.PUBLIC_URL}>
                    <Switch>
                        <Route exact path="/" render={() => (<Redirect to={process.env.REACT_APP_LIST_PATH}/>)}/>
                    </Switch>
                </Router>
            </React.Fragment>
        );
    };

    const someSelect = () => {
        return (
            <Select
                placeholder="Search for items..."
            />
        );
    };

    const somePopup = () => {
        return (
            <Popup>Blah</Popup>
        );
    };

    return (
        <div>
            <p>Hello!</p>
            <ul>
                {_.map(people, person => <li>{person.name}</li>)}
            </ul>
        </div>
    );
}

export default App;

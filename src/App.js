import React, {useEffect, useState} from 'react';
import './App.css';

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

    return (
        <div>
            <p>Hello!</p>
            <ul>
                {people.map(person => {
                    return <li>{person.name}</li>
                })}
            </ul>
        </div>
    );
}

export default App;

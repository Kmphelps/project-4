import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Home() {
const [people, setPeople] = useState([]);
const [chores, setChores] = useState([]);

// Gets all of the people and sets state
useEffect(() => {
    fetch("/people")
    .then((r) => r.json())
    .then(setPeople);
}, []);

// Gets all of the chores and sets state
useEffect(() => {
    fetch("/chores")
    .then((r) => r.json())
    .then(setChores);
}, []);


return (
    <div>
        {/* Displays each person in a separate card on the home page */}
        <section className="people-container">
            {people.map((person) => (
                <div className="card" key={person.id}>
                        <h3>{person.name}</h3>
                        <img src={person.image} className="profile-image-home" alt={person.name}></img>
                        <Link to={`/people/${person.id}`} className="chores-button">View Chores</Link>
                        <br></br>
                </div>
            ))}
        </section>
        <br></br>
        <h2>Chores</h2>
        {/* Displays each chore on a separate line on the home page */}
        <section className="chores-container">
            {chores.map((chore) => (
                <div className="chore-listing" key={chore.id}>
                    <h3>
                        <text style={{color: "blue"}}>{chore.chore}</text> | Frequency: {chore.frequency} | Time Estimate: {chore.time_estimate_minutes} minutes
                    </h3>
                </div>
            ))}
        </section>
    </div>
);
}

export default Home;
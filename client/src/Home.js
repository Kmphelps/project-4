import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Home() {
const [people, setPeople] = useState([]);

useEffect(() => {
    fetch("/people")
    .then((r) => r.json())
    .then(setPeople);
}, []);

return (
    <div>
        <section className="container">
            {people.map((person) => (
                <div className="card" key={person.id}>
                        <h3>{person.name}</h3>
                        <img src={person.image} className="profile-image-home"></img>
                        <br></br>
                        <button className="chores-button">View Chores</button>
                </div>
            ))}
        </section>
        <br></br>
        <section className="container">
        <h2>Chores</h2>
        </section>
    </div>
);
}

export default Home;
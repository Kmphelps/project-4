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
        <ul>
            {people.map((person) => (
                <li key={person.id}>
                    <span>
                        {person.name}
                    </span>
                </li>
            ))}
        </ul>
    </div>
);
}

export default Home;
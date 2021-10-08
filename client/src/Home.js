import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CreateChore from "./CreateChore";
import CreatePerson from "./CreatePerson";

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

function handleAddChore(newChore) {
    fetch(`/chores`, { 
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-type": "application/json"
        },
        body: JSON.stringify(newChore), 
      })
      .then(res => res.json())
      .then(json => setChores([...chores, newChore]))
    }

function handleAddPerson(newPerson) {
        fetch(`/people`, { 
            method: "POST",
            headers: {
              Accept: "*/*",
              "Content-type": "application/json"
            },
            body: JSON.stringify(newPerson), 
          })
          .then(res => res.json())
          .then(json => setPeople([...people, newPerson]))
    }

function handleDelete(id) {
        fetch(`/chores/${id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                setChores((chores) =>
                chores.filter((chore) => chore.id !== id)
                );
            }
        });
    }

function handleDeletePerson(id) {
    fetch(`/people/${id}`, {
        method: "DELETE",
    }).then((r) => {
        if (r.ok) {
            setPeople((people) =>
            people.filter((person) => person.id !== id)
            );
        }
    });
}



return (
    <div>
        {/* Displays each person in a separate card on the home page */}
        <section className="people-container">
            {people.map((person) => (
                <div className="card" key={person.id}>
                        <button style={{color: "#F04520"}} className="delete-person-button" onClick={() => handleDeletePerson(person.id)}>x</button>
                        <h3>{person.name}</h3>
                        <img src={person.image} className="profile-image-home" alt={person.name}></img>  
                        <br></br>
                        <Link to={`/people/${person.id}`} className="chores-button">View Chores</Link>
                        
                        <br></br>
                </div>
            ))}
        </section>
        
        <section className="home-container"> 
         
        <section className="chore-form-container"> 
        <CreateChore addChore={handleAddChore} />
        </section>

        <section className="person-form-container"> 
        <CreatePerson addPerson={handleAddPerson} />
        
        </section>
        
        {/* Displays each chore on a separate line on the home page */}
        <section className="chores-container">
        <h2>All Household Chores</h2>
            {chores.map((chore) => (
                <div className="chore-listing" key={chore.id}>
                    <h4>
                        <text style={{color: "#EF869C"}}>{chore.name}</text> | Frequency: <text style={{color: "#93B5C6"}}>{chore.frequency}</text> | Time Estimate: <text style={{color: "#93B5C6"}}>{chore.time_estimate_minutes} minutes</text> | <button className="delete-chore-button" onClick={() => handleDelete(chore.id)}>x</button>
                    </h4> 
                
                </div>
            ))}
        </section>
        </section>
    </div>
);
}

export default Home;
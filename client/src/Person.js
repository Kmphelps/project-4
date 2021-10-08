import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewSignup from "./NewSignup";
import AssignedChore from "./AssignedChore";

function Person() {

    const [{ data: person, error, status }, setPerson] = useState({
        data: null,
        error: null,
        status: "pending",
    });
    const { id } = useParams();
    

    useEffect(() => {
        fetch(`/people/${id}`).then((r) => {
            if (r.ok) {
                r.json().then((person) =>
                setPerson({ data: person, error: null, status: "resolved" })
                );
            } else {
                r.json().then((err) =>
                setPerson({ data: null, error: err.error, status: "rejected" })
                );
            }
        });
    }, [id]);

    function handleAssignChore(newChore) {
        console.log("sf;ksjDFKLNDLKSFNKL'SDFNKL")
        console.log(person.chores)

        setPerson({
            error,
            status,
            data: {
                ...person,
                chores: [...person.chores, newChore],
            },
        });
    }

    if (status === "pending") return <h1>Loading...</h1>;
    if (status === "rejected") return <h1>Error: {error.error}</h1>;

    

    return (
        <div>
            <h2>{person.name}'s Chores</h2>
            <img src={person.image} className="profile-image" alt={person.name}></img>
            
        {/* Displays each chore on a separate line on the profile page */}
            <section className="profile-chores-container">
                {person.chores.map((chore) => (
                <AssignedChore key={chore.id} chore={chore} person={person}/>
                ))}
            </section>
            <NewSignup onAssignChore={handleAssignChore} personId={person.id}/>
        </div>
    );
    
}

export default Person;
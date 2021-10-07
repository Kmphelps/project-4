import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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


    if (status === "pending") return <h1>Loading...</h1>;
    if (status === "rejected") return <h1>Error: {error.error}</h1>;


    return (
        <div>
            <h2>{person.name}</h2>
        </div>
    );
    
}

export default Person;
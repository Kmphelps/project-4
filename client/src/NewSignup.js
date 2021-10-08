import { useEffect, useState } from "react";

function NewSignup({ personId, onAssignChore}) {
    const [choreId, setChoreId] = useState("");
    const [chores, setChores] = useState([]);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        fetch("/chores")
        .then((r) => r.json())
        .then(setChores);
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            chore_id: Number(choreId),
            person_id: personId,
        };
        fetch("/signups", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then((r) => {
            if (r.ok) {
                r.json().then((chore) => {
                    setChoreId("");
                    setErrors([]);
                    onAssignChore(chore);
                });
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }
       
    return (
        <form onSubmit={handleSubmit}>
            <h2 style={{color: "#EF869C", paddingTop: "10px"}}>Assign a Chore</h2>
            <div>
                <select
                    className="select-chore-dropdown"
                    id="chore"
                    value={choreId}
                    onChange={(e) => setChoreId(e.target.value)}
                >
                    <option value="">Select chore...</option>
                    {chores.map((chore) => (
                        <option key={chore.id} value={chore.id}>
                            {chore.name}
                        </option>
                    ))}
                </select>
            </div>
            {errors.map((err) => (
                <p key={err} style={{ color: "red" }}>
                    {err}
                </p>
            ))}
            <button style={{backgroundColor: "#EF869C"}} type="submit">Submit</button>
        </form>
    );
}

export default NewSignup;
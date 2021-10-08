import { useEffect, useState } from "react";

function CreateChore({ addChore }) {
    const [name, setName] = useState('');
    const [frequency, setFrequency] = useState('');
    const [time_estimate_minutes, setTime] = useState('');
 
 function handleSubmit(e) {
     e.preventDefault();

     const newChore = {
         name,
         frequency,
         time_estimate_minutes,
     };
     addChore(newChore)
     setName('')
     setFrequency('')
     setTime('')
 }
 
 
return (   
<form onSubmit={handleSubmit}>
    <div>
    <h3>Add a New Chore</h3>
    <label>Name of chore:</label>
    <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    />
    </div>
    <div>
    <label>Frequency:</label>
    <input
    type="text"
    value={frequency}
    onChange={(e) => setFrequency(e.target.value)}
    />
    </div>
    <div>
    <label>Time estimate (in minutes):</label>
    <input
    type="number"
    value={time_estimate_minutes}
    onChange={(e) => setTime(e.target.value)}
    />
    </div>

    <button className="form-button" type="submit">Add To List of Chores</button>
</form>

 )

}

export default CreateChore;
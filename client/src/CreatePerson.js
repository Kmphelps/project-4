import { useEffect, useState } from "react";


function CreatePerson({ addPerson }) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    

    function handleSubmit(e) {
        e.preventDefault();
   
        const newPerson = {
            name,
            image,
        };
        addPerson(newPerson)
        setName('')
    }

    return (   
        <form onSubmit={handleSubmit}>
            <h3>Add a New Family Member or Roommate</h3>
            <div>
            <label>Name:</label>
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            </div>
            <div>
            <label>Profile Pic:</label>
            <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            />
            </div> <br></br>
            <button className="form-button" type="submit">Add to Household</button>
            
        </form>
        
         )
        
        }
        
        export default CreatePerson;
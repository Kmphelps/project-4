import { useEffect, useState } from "react";

function AssignedChore({person, chore}) {
    


    return (
    <div>
        <div className="profile-chore-listing" key={chore.id}>
        <h4>
        <text style={{color: "#EF869C"}}>{chore.name}</text> | Frequency: <text style={{color: "#93B5C6"}}>{chore.frequency}</text> | Time Estimate: <text style={{color: "#93B5C6"}}>{chore.time_estimate_minutes} minutes</text> | <button style={{color: "#F04520"}} className="unassign">Unassign</button>
    </h4>
    
</div></div>
)
}

export default AssignedChore;
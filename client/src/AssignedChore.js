import { useEffect, useState } from "react";

function AssignedChore({person, chore}) {
    


    return (
    <div>
        <div className="profile-chore-listing" key={chore.id}>
        <h4>
        <text style={{color: "#1073E5"}}>{chore.name}</text> | Frequency: <text style={{color: "#1073E5"}}>{chore.frequency}</text> | Time Estimate: <text style={{color: "#1073E5"}}>{chore.time_estimate_minutes} minutes</text> | <button style={{color: "#F04520"}} className="unassign">Unassign</button>
    </h4>
    
</div></div>
)
}

export default AssignedChore;
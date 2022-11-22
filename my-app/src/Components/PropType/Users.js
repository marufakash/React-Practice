import React, { useState } from "react";
import User from "./User";

const Users = () => {
    // const [userName, setUserName] = useState("Maruf Akash");
    // const [userId, setUserId] = useState();
    const [user, setUser] = useState({
        name : "Maruf Akash",
        id: 109
    })

    return (
        <div>
            {/* <User userName={userName} userId={userId} /> */}
            <User user={user} />
        </div>
    )
}

export default Users;
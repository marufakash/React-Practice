import React from "react";
import PropTypes from 'prop-types';

const User = (props) => {
    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}

User.propTypes = {
    // key-value
    user: PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.string
        
    })
}

User.defaultProps = {
    userName: "Default Name",
    userId : 99
}

export default User;
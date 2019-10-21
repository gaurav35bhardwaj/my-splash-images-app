import React from 'react';
import { Redirect } from 'react-router-dom';
const UserAuth = ({ currentUser, isLoggedIn, children }) => {
    if (isLoggedIn && !currentUser) {
        return <Redirect to='/' />
    }
    if (!isLoggedIn && currentUser) {
        return <Redirect to='/dashboard' />
    }
    return children ;
};

export default UserAuth;
import React from 'react';
import UserAuth from './UserAuth.js';
import { getItem } from '../utils/helperMethods';

const Auth = (isLoggedIn) => (WrappedComponent) => (props) => {
   const currentUser = getItem('currentUser');
   return (
        <UserAuth isLoggedIn={isLoggedIn} {...props} currentUser={currentUser} >
            <WrappedComponent {...props} />
        </UserAuth>
    );
}

export default Auth;
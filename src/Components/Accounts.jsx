import React from 'react'
import CreateAccount from './CreateAccount';
import List from './List';
import Navbar from './Navbar';

const Accounts = () => {
    return (
        <>
            <Navbar />
            <CreateAccount />
            <List />
        </>
    )
}

export default Accounts;

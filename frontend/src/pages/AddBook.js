import React from 'react';

import AddBookForm from '../components/AddBookForm';

import {Navigate} from 'react-router-dom';

function AddBook(){

    const token = localStorage.getItem('token');

    if(!token){

        return <Navigate to='/login'/>

    }

    return <AddBookForm/>

}

export default AddBook;
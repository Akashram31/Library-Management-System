import React from 'react';

import BookList from '../components/BookList';

import {Navigate} from 'react-router-dom';

function Books(){

    const token = localStorage.getItem('token');

    if(!token){

        return <Navigate to='/login'/>

    }

    return <BookList/>

}

export default Books;
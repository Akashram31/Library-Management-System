import React from 'react';

import {Routes,Route} from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';

import Login from './pages/Login';

import Register from './pages/Register';

import AddBook from './pages/AddBook';

import Books from './pages/Books';

function App(){

    return(

        <div>

            <Navbar/>

            <Routes>

                <Route
                path='/'
                element={<Home/>}
                ></Route>

                <Route
                path='/login'
                element={<Login/>}
                ></Route>

                <Route
                path='/register'
                element={<Register/>}
                ></Route>

                <Route
                path='/addbook'
                element={<AddBook/>}
                ></Route>

                <Route
                path='/books'
                element={<Books/>}
                ></Route>

            </Routes>

        </div>

    );

}

export default App;
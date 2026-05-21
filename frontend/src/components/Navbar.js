import React from 'react';

import {Link} from 'react-router-dom';

function Navbar(){

    return(

        <nav className='navbar navbar-dark bg-dark p-3'>

            <div className='container'>

                <Link className='navbar-brand' to='/'>
                    Library System
                </Link>

                <div>

                    <Link className='btn btn-light me-2' to='/login'>
                        Login
                    </Link>

                    <Link className='btn btn-light me-2' to='/register'>
                        Register
                    </Link>

                    <Link className='btn btn-light me-2' to='/books'>
                        Books
                    </Link>

                    <Link className='btn btn-warning' to='/addbook'>
                        Add Book
                    </Link>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;
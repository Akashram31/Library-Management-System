import React,{useState,useEffect} from 'react';

import {useForm} from 'react-hook-form';

function BookList(){

    const [books,setBooks] = useState([]);

    const {register,handleSubmit,reset} = useForm();




    // Fetch Books
    const fetchBooks = async(data={})=>{

        let url = 'http://localhost:5000/api/books/getbooks';

        // Search Books
        if(data.searchType && data.searchValue){

            url =
            `http://localhost:5000/api/books/getbooks?${data.searchType}=${data.searchValue}`;

        }

        const response = await fetch(url);

        const result = await response.json();

        setBooks(result.data);

    };




    // Load All Books Initially
    useEffect(()=>{

        fetchBooks();

    },[]);




    // Search Submit
    const onSubmit = async(data)=>{

        fetchBooks(data);

    };




    // View All Books
    const viewAllBooks = ()=>{

        reset();

        fetchBooks();

    };




    // Checkout Book
    const checkoutBook = async(id)=>{

        const token = localStorage.getItem('token');

        const response = await fetch(

            `http://localhost:5000/api/books/checkout/${id}`,

            {

                method:'PUT',

                headers:{
                    authorization:token
                }

            }

        );

        const result = await response.json();

        alert(result.message);

        fetchBooks();

    };




    // Return Book
    const returnBook = async(id)=>{

        const token = localStorage.getItem('token');

        const response = await fetch(

            `http://localhost:5000/api/books/return/${id}`,

            {

                method:'PUT',

                headers:{
                    authorization:token
                }

            }

        );

        const result = await response.json();

        alert(result.message);

        fetchBooks();

    };




    // Delete Book
    const deleteBook = async(id)=>{

        const token = localStorage.getItem('token');

        const response = await fetch(

            `http://localhost:5000/api/books/delete/${id}`,

            {

                method:'DELETE',

                headers:{
                    authorization:token
                }

            }

        );

        const result = await response.json();

        alert(result.message);

        fetchBooks();

    };




    return(

        <div className='container mt-5'>

            <div className='card p-3 mb-4'>

                <h4 className='mb-3'>
                    Search Books
                </h4>




                <form onSubmit={handleSubmit(onSubmit)}>

                    <select
                    className='form-control mb-3'
                    {...register('searchType')}
                    >

                        <option value=''>
                            Select Search Type
                        </option>

                        <option value='title'>
                            Title
                        </option>

                        <option value='author'>
                            Author
                        </option>

                        <option value='genre'>
                            Genre
                        </option>

                    </select>




                    <input
                    type='text'
                    placeholder='Enter search value'
                    className='form-control mb-3'
                    {...register('searchValue')}
                    />




                    <div className='d-flex gap-2'>

                        <button
                        type='submit'
                        className='btn btn-primary'
                        >
                            Search Books
                        </button>




                        <button
                        type='button'
                        className='btn btn-secondary'
                        onClick={viewAllBooks}
                        >
                            View All Books
                        </button>

                    </div>

                </form>

            </div>




            <table className='table table-bordered'>

                <thead>

                    <tr>

                        <th>Title</th>

                        <th>Author</th>

                        <th>Genre</th>

                        <th>Status</th>

                        <th>Checkout</th>

                        <th>Return</th>

                        <th>Delete</th>

                    </tr>

                </thead>




                <tbody>

                    {

                        books.length === 0 ?

                        <tr>

                            <td colSpan='7'>
                                No Books Found
                            </td>

                        </tr>

                        :

                        books.map((book)=>(

                            <tr key={book._id}>

                                <td>{book.title}</td>

                                <td>{book.author}</td>

                                <td>{book.genre}</td>

                                <td>

                                    {

                                        book.availability ?

                                        'Available'

                                        :

                                        'Not Available'

                                    }

                                </td>




                                <td>

                                    <button
                                    className='btn btn-success btn-sm'
                                    onClick={()=>
                                    checkoutBook(book._id)}
                                    >

                                        Checkout

                                    </button>

                                </td>




                                <td>

                                    <button
                                    className='btn btn-warning btn-sm'
                                    onClick={()=>
                                    returnBook(book._id)}
                                    >

                                        Return

                                    </button>

                                </td>




                                <td>

                                    <button
                                    className='btn btn-danger btn-sm'
                                    onClick={()=>
                                    deleteBook(book._id)}
                                    >

                                        Delete

                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default BookList;
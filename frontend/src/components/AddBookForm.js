import React,{useState} from 'react';

import {useForm} from 'react-hook-form';

function AddBookForm(){

    const {register,handleSubmit,reset} = useForm();

    const [message,setMessage] = useState('');

    const API_URL = process.env.REACT_APP_API_URL;

    const onSubmit = async(data)=>{

        const token = localStorage.getItem('token');

        const response = await fetch(
            `${API_URL}/api/books/addbook`,
            {

                method:'POST',

                headers:{
                    'Content-Type':'application/json',
                    'authorization':token
                },

                body:JSON.stringify(data)

            }
        );

        const result = await response.json();

        setMessage(result.message);

        reset();

    };

    return(

        <div className='container mt-5'>

            <div className='card p-4 w-50 mx-auto'>

                <h3 className='text-center mb-3'>
                    Add Book
                </h3>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <input
                    type='text'
                    placeholder='Enter title'
                    className='form-control mb-3'
                    {...register('title')}
                    />

                    <input
                    type='text'
                    placeholder='Enter author'
                    className='form-control mb-3'
                    {...register('author')}
                    />

                    <input
                    type='text'
                    placeholder='Enter genre'
                    className='form-control mb-3'
                    {...register('genre')}
                    />

                    <input
                    type='text'
                    placeholder='Enter ISBN'
                    className='form-control mb-3'
                    {...register('isbn')}
                    />

                    <button className='btn btn-warning w-100'>
                        Add Book
                    </button>

                </form>

                <p className='mt-3 text-center'>
                    {message}
                </p>

            </div>

        </div>

    );

}

export default AddBookForm;
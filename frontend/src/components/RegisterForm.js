import React,{useState} from 'react';

import {useForm} from 'react-hook-form';

function RegisterForm(){

    const {register,handleSubmit,formState:{errors},reset} = useForm();

    const [message,setMessage] = useState('');

    const onSubmit = async(data)=>{

        const response = await fetch(
            'http://localhost:5000/api/auth/register',
            {

                method:'POST',

                headers:{
                    'Content-Type':'application/json'
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
                    Register
                </h3>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <input
                    type='text'
                    placeholder='Enter username'
                    className='form-control mb-3'
                    {...register('username',{
                        required:'Username required'
                    })}
                    />

                    {errors.username &&
                    <p>{errors.username.message}</p>}

                    <input
                    type='email'
                    placeholder='Enter email'
                    className='form-control mb-3'
                    {...register('email',{
                        required:'Email required'
                    })}
                    />

                    {errors.email &&
                    <p>{errors.email.message}</p>}

                    <input
                    type='password'
                    placeholder='Enter password'
                    className='form-control mb-3'
                    {...register('password',{
                        required:'Password required'
                    })}
                    />

                    {errors.password &&
                    <p>{errors.password.message}</p>}

                   <select
                    className='form-control mb-3'
                    {...register('role')}
                   >

                        <option value='user'>
                         User
                         </option>

                         <option value='librarian'>
                        Librarian
                        </option>

                        </select>

                        <input
                        type='text'
                        placeholder='Enter librarian secret code' 
                        className='form-control mb-3'
                        {...register('secretCode')}
                        /> 

                    <button className='btn btn-success w-100'>
                        Register
                    </button>

                </form>

                <p className='mt-3 text-center'>
                    {message}
                </p>

            </div>

        </div>

    );

}

export default RegisterForm;
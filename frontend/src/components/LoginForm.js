import React,{useState} from 'react';

import {useForm} from 'react-hook-form';

import {useNavigate} from 'react-router-dom';

function LoginForm(){

    const {register,handleSubmit,formState:{errors},reset} = useForm();

    const [message,setMessage] = useState('');

    const navigate = useNavigate();

    const onSubmit = async(data)=>{

        const response = await fetch(
            'http://localhost:5000/api/auth/login',
            {

                method:'POST',

                headers:{
                    'Content-Type':'application/json'
                },

                body:JSON.stringify(data)

            }
        );

        const result = await response.json();

        if(result.token){

            localStorage.setItem(
                'token',
                result.token
            );

            navigate('/books');

        }

        setMessage(result.message);

        reset();

    };

    return(

        <div className='container mt-5'>

            <div className='card p-4 w-50 mx-auto'>

                <h3 className='text-center mb-3'>
                    Login
                </h3>

                <form onSubmit={handleSubmit(onSubmit)}>

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

                    <button className='btn btn-primary w-100'>
                        Login
                    </button>

                </form>

                <p className='mt-3 text-center'>
                    {message}
                </p>

            </div>

        </div>

    );

}

export default LoginForm;
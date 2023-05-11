import React from 'react';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { Typography, Button, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// const root = document.querySelector(':root');
// const primary = getComputedStyle(root).getPropertyValue('--primaryColor');

function Login() {
  const navigate = useNavigate();
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data) => {
      navigate('/home') 
  }
  return (
    <>
      <div className='container d-flex align-items-center justify-content-center'>
        <Card className='p-4 w-50 rounded-4 text-align-center'>
          <form onSubmit={handleSubmit(onSubmit)} noValidate >
            <h1>Form </h1>
            <Typography>User Name</Typography>
            <TextField
              type='text'
              id='userName'
              placeholder='Ex:John Due'
              {...register("userName", {
                required: {
                  value: 'true',
                  message: 'Username is required'
                },
                validate: (fieldValue) => {
                  return (
                    fieldValue === "admin" || "Invalid user name"
                  );
                },
              })}
              className='w-100'
            />
            <p style={{ color: 'red' }}>{errors.userName?.message}</p>
            <Typography>Email</Typography>
            <TextField
              type='email'
              id='email'
              className='w-100'
              placeholder='.........'
              {...register("email", {
                required: "email is required",
                pattern: {
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "invalid email"
                },
                validate: (fieldValue) => {
                  return (
                    fieldValue === "admin@gmail.com" || "Enter Correct Email address"
                  );
                },
              })}
            />
            <p style={{ color: 'red' }}>{errors.email?.message}</p><br />
            <Button type='submit' variant="contained" className='d-flex justify-content-center'>Submit</Button>
          </form>
        </Card>
      </div>
    </>
  )
}
export default Login
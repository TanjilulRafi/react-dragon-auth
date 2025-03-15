import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import Home from '../layouts/Home';
import CategoryNews from '../pages/CategoryNews';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path:"",
                element:<Navigate to = {"/category/01"}></Navigate>,
            },
            {
                path: "/category/:id",
                element:<CategoryNews/>,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
            },
        ],
    },
    {
        path:'/news',
        element: <h1>News layout</h1>
    },
    {
        path:'auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <h2>Login</h2>,
            },
            {
                path: '/auth/register',
                element: <h2>register</h2>,
            }
        ]
    },
    {
        path:"*",
        element: <h1>Error</h1>
    }
])

export default router;
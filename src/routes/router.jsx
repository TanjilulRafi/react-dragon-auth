import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import Home from '../layouts/Home';
import CategoryNews from '../pages/CategoryNews';
import Login from '../pages/Login';
import NewsDetails from '../pages/NewsDetails';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';

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
        path:'/news/:id',
        element: <PrivateRoute><NewsDetails/></PrivateRoute>,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path:'auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>,
            },
            {
                path: '/auth/register',
                element: <Register></Register>,
            }
        ]
    },
    {
        path:"*",
        element: <h1>Error</h1>
    }
])

export default router;
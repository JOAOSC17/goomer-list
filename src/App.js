import React from 'react'
import {
    Routes,
    Route
  } from "react-router-dom";
import Home from'./pages/Home/Home'
import SingleRestaurant from'./pages/SingleRestaurant/SingleRestaurant'
import ErrorPage from'./pages/Error/Error'
import Global from './globalStyle';
export default function App() {
    return (
        <>
        <Global/>
    <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="restaurant/:id" element={<SingleRestaurant />}>
            <Route path="restaurant/*" element={Home}/>
        </Route>
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>
    </>
    )
}


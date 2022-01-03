import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../../components/Card/Card'
import Navbar from '../../components/Navbar/Navbar'
import api from '../../services'
export default function Home() {
    const [restaurants, setRestaurants] = useState([])
    async function getAllData () {
        const { data } = await api.get('/restaurants')
        setRestaurants(data)
        console.log(data)
    }
     useEffect(()=> {
         getAllData()
    }, [])
    return (
        <div>
            <Navbar />
            {restaurants.map(restaurant=><Card restaurant={restaurant}/>)}
            home {':)'}
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { CircularProgress } from '@mui/material';
import Card from '../../components/Card/Card'
import Navbar from '../../components/Navbar/Navbar'
import api from '../../services'
export default function Home() {
    const [restaurants, setRestaurants] = useState([])
    const [loading, setLoading] = useState(true)
    async function getAllData () {
        try {
            setLoading(true)
            const { data } = await api.get('/restaurants')
            setRestaurants(data)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
     useEffect(() => {
         getAllData()
    }, [])
const Container = styled.div`
    display:flex;
    flex-direction:column;
    margin:10px;
    align-items:center;
`
const Title = styled.h1`
    font-size:24px;
    color: #404040;
    font-weight:normal;
    margin:32px 0px;
`
const InputContainer = styled.div`
    position:relative;
    margin-bottom:26px;
    direction: rtl;
    width: 840px;
    height: 40px;
`
const Input = styled.input`
    height:20px;
    text-align:left;
    padding-left:30px ;
    width: 100%;
    height:100%;
    border-radius: 200px;
    border:none;
    background: #FBFBFB 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 4px #00000029;
`
const Button = styled.button`
    background:transparent;
    cursor:pointer;
    position:absolute; 
    bottom:12px;
    top:12px;
    right:20px;
    width: 20px;
    height: 20px;
    border:none; 
`
const Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-wrap: wrap;
`
    return (
        <div>
            {!loading ?(
            <>
            <Navbar />
            <Container>
                <Title>Bem-vindo ao Lista Rango</Title>
                <InputContainer>
                <Input placeholder="Buscar estabelecimento"/>
                <Button type="button"><SearchIcon style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%' }}/></Button>
                </InputContainer>
                <Wrapper>
                {restaurants.map(restaurant=>(
                <Card key={restaurant.id} restaurant={restaurant}/>
                ))}
                {restaurants.map(restaurant=>(
                <Card key={restaurant.id} restaurant={restaurant}/>
                ))}
                {restaurants.map(restaurant=>(
                <Card key={restaurant.id} restaurant={restaurant}/>
                ))}
                {restaurants.map(restaurant=>(
                <Card key={restaurant.id} restaurant={restaurant}/>
                ))}
                {restaurants.map(restaurant=>(
                <Card key={restaurant.id} restaurant={restaurant}/>
                ))}
                </Wrapper>
            </Container>
            </>
            ) : (<div>Carregando...<br/><CircularProgress /></div>)}
            home {':)'}
        </div>
    )
}

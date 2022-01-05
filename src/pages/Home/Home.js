import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { CircularProgress } from '@mui/material';
import Card from '../../components/Card/Card'
import Navbar from '../../components/Navbar/Navbar'
import api from '../../services'
export default function Home() {
    const [restaurants, setRestaurants] = useState([])
    const [message, setMessage] = useState([])
    const [loading, setLoading] = useState(true)
    const searchWord = useRef("")
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

    async function handleFilter (event){
        event.preventDefault();
        const { current } = searchWord
        const { data } = await api.get('/restaurants')
        const newFilter = data.filter((value) => {
          return value.name.toLowerCase().includes(current.value.toLowerCase());
        });
        if(newFilter === []) {
            setRestaurants([])
            setMessage("Nenhum Restaurante com esse nome foi encontrado.")
        }

        if (current.value === "") {
            setRestaurants(data);
        }
         else {
            setRestaurants(newFilter);
        }
      };
     useEffect(() => {
         getAllData()
    }, [])
const Container = styled.main`
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
const InputContainer = styled.form`
    position:relative;
    margin-bottom:26px;
    width: 840px;
    height: 40px;
`
const Input = styled.input`
    height:20px;
    padding-left:30px ;
    width: 100%;
    height:100%;
    border-radius: 200px;
    border:none;
    background: #FBFBFB 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 4px #00000029;
    outline:none;
    ::placeholder{
    text-align:left;
        
    }
`
const Button = styled.button`
    background:transparent;
    cursor:pointer;
    position:absolute; 
    bottom:12px;
    top:12px;
    display: flex;
    justify-content:flex-end;
    right:0px;
    width: 20px;
    height: 20px;
    border:none; 
`
const Wrapper = styled.section`
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-wrap: wrap;
    margin: 0px 43px;
`
console.log(restaurants)
    return (
        <div>
            {!loading ? (
            <>
            <header>
            <Navbar />
            </header>
            {message && (<p>{message}</p>)}
            <Container>
                <Title>Bem-vindo ao Lista Rango</Title>
                <InputContainer onSubmit={handleFilter}>
                <Input type="text" ref={searchWord} placeholder="Buscar estabelecimento" />
                <Button type="submit"><SearchIcon style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%' }}/></Button>
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
            ) : (<div style={{fontSize:50, display:'flex', alignItems:'center',justifyContent:'center', height:'100vh', flexDirection:'column'}}>Carregando...<br/><br/><CircularProgress /></div>)}
        </div>
    )
}

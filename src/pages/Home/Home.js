import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Card from '../../components/Card/Card'
import Navbar from '../../components/Navbar/Navbar'
import api from '../../services'
import Spinner from '../../components/Spinner/Spinner';
import SearchBar from '../../components/Searchbar/SearchBar';
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
    align-items:center;
    margin:10px;
    color: #404040;
`
const Title = styled.h1`
    font-size:24px;
    margin:32px 0px;
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
        <>
            {!loading ? (
            <>
            <header>
            <Navbar />
            </header>
            {message && (<p>{message}</p>)}
            <Container>
                <Title>Bem-vindo ao Lista Rango</Title>
                <SearchBar margin={"0px 0px 26px 0px"} placeholder='Buscar estabelecimento' onSubmitSearch={handleFilter} refSearch={searchWord} />
                <Wrapper>
                {restaurants.map(restaurant=>(
                <Card key={restaurant.id} restaurant={restaurant}/>
                ))}
                </Wrapper>
            </Container>
            </>
            ) : (<Spinner/>)}
        </>
    )
}

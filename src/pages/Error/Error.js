import React from 'react'
import styled from 'styled-components'
import ErrorIcon from '@mui/icons-material/Error';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
const Container = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:60px auto;
    max-width:800px;
`
const Title = styled.h1`
    display: flex;
    text-align:center;
    font-size:25px;
`
const Button = styled.button`
    display: flex;
    justify-content:center;
    align-items: center;
    justify-content: space-evenly;
    width: 180px;
    color:#fff;
    background:#ccc;
    margin: 15px 0;
    padding: 8px;
    border:none;
    border-radius:10px;
    font-size:20px;
    cursor:pointer;
`
export default function ErrorPage() {
    return (
        <Container>
            <Title>Ops, Oq Vc está procurando não foi encontrado</Title>
            <Link to="/" style={{textDecoration:"none"}}><Button>Volte Para<HomeIcon/></Button></Link>
            <ErrorIcon style={{display:'flex', fontSize:500, color:'#ffbc00'}}/>
        </Container>
    )
}

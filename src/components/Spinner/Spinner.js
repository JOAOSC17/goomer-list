import React from 'react'
import styled from 'styled-components'
import { CircularProgress } from '@mui/material';
const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    height:100vh;
    font-size:50px;
`
export default function Spinner() {
    return (
        <Container>
        Carregando...<br/><br/>
        <CircularProgress/>
        </Container>
    )
}

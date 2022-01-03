import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    display:flex;
    margin:10px;
    align-items:center;
    justify-content:space-between;
    background-color:#FFFFFF;
    width:100px;
    width: 367px;
    height: 100px;
    -webkit-box-shadow: 3px 7px 15px -5px rgba(0,0,0,0.57); 
box-shadow: 3px 7px 15px -5px rgba(0,0,0,0.57);
position: relative;
`
const Image = styled.img`
    height: 100%;
`
const Text = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    margin-right:20px;
`
const Title = styled.h2`
    font-size:16px;
    color: #404040;
    font-weight:normal;
`
const Adress = styled.address`
    font-size:13px;
    color: #404040;
    font-weight:normal;
`
const Circle = styled.div`
    border-radius:50%;
    position:absolute;
    width: 48px;
    height: 48px;
    top:-15px;
    right: -10px;
    background: #2B0D61 0% 0% no-repeat padding-box;
    box-shadow: 0px 1px 2px #00000029;
    display: flex;
    align-items:center;
    justify-content:center;
    font-size:10px;
    color: white;
    text-align: center;
    font-weight:600;
`

export default function Card({restaurant}) {
    return (
        <Container>
            <Circle>Fechado</Circle>
            <Image src={restaurant.image}/>
            <Text>
            <Title>{restaurant.name}</Title>
            <Adress>{restaurant.address}</Adress>
            </Text>
        </Container>
    )
}

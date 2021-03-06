import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    display:flex;
    justify-content:space-around;
    margin: 24px 0;
    background-color:#FFFFFF;
    width: 386px;
    height: 115px;
    box-shadow: 0px 2px 4px #00000029;
    color: #404040;
    cursor:pointer;
`
const Image = styled.img`
    height: 100%;
    width: 40%;
`
const Text = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    margin-left:16px;
    flex-wrap: wrap;
`
const Title = styled.h2``
const Desc = styled.p`
    font-size:12px;
`
const Price = styled.span`
    color: #009CA3;
`
export default function CardFood({food, onClickFood}) {
    return (
        <Container onClick={onClickFood}>
            <Image src={food.image ? (food.image) : ("https://public-v2links.adobecc.com/f6e71782-ebba-4573-6f7a-005a1a6d391f/component?params=component_id%3A2864ea4e-90e4-4bb0-abc4-41784d90e8bc&params=version%3A0&token=1641558953_da39a3ee_df3944162fc9fb0f0e5dd2ed5cfb27760bb76ddc&api_key=CometServer1")}/>
            <Text>
           <Title>{food.name}</Title>
           <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</Desc>
           <Price>{food.price ? (food.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}) : ('')}</Price>
            </Text>
        </Container>
    )
}

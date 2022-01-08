import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Container = styled.div`
    display:flex;
    margin:20px 50px;
    align-items:center;
    justify-content:space-between;
    background-color:#FFFFFF;
    width:100px;
    width: 367px;
    height: 100px;
    box-shadow: 0px 2px 4px #00000029;
    position: relative;
    color: #404040;
`
const Image = styled.img`
    height: 100%;
    width: 40%;
`
const Text = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    margin-right:20px;
    flex-wrap: wrap;
`
const Title = styled.h2`
    font-size:16px;
`
const Adress = styled.address`
    font-size:13px;
`
const Circle = styled.div`
    border-radius:50%;
    position:absolute;
    width: 48px;
    height: 48px;
    top:-15px;
    right: -10px;
    background: ${props=> !props.open ? "#B5ABD4" : "#2B0D61"} 0% 0% no-repeat padding-box;
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
    function warningTexts () {
        const warnings = ['Indefinido', 'Aberto Agora', 'Fechado']
        if(openClose() === 0) return warnings[0]
        if(openClose())  return warnings[1]
        if(!openClose()) return warnings[2]
    }
    function openClose () {
        const hourNow = new Date().getHours()
        if(getHours()){
            const {to, from} =  getHours()
            const openingTime = parseInt(from)
            const closingTime = parseInt(to)
            const openingHours = hourNow >= openingTime && hourNow <= closingTime ? true : false
            return openingHours
        }
        return 0
    }
    function getHours () {
        const day = new Date().getDay() + 1
       if(restaurant.hours) { 

        const hours = restaurant.hours.filter(workinDay => workinDay.days.includes(day))
        return hours[0]
    }
        return null
    }
    return (
        <Container>
            <Circle open={openClose()}>{warningTexts()}</Circle>
            <Image src={restaurant.image}/>
            <Text>
           <Link to={`/restaurant/${restaurant.id}`}>
           <Title>{restaurant.name}</Title>
            <Adress>{restaurant.address}</Adress>
            </Link> 
            </Text>
        </Container>
    )
}

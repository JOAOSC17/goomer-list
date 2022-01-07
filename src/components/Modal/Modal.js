import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
const portalRoot = document.getElementById("portal-root");
const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0, 0.5);
`
const Wrapper = styled.div`
    background-color: #fff;
    border-radius: 4px;
    width: 601px;
    height: 484px;
    margin: 80px auto 0 auto;
    padding: 15px;
`
const Button = styled.div`
    float: right;
    background: unset;
    border: unset;
    cursor:pointer;
`
const Image = styled.img`
    display: flex;
    margin: 0 auto;
    height:40%;
`
const Title = styled.h1`
    font-size:24px;
    color: #404040;
    font-weight:normal;
    margin-top: 45px;
`
const Info = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
    margin-bottom:10px;
`
const Desc = styled.p`
    font-size:16px;
    color: #404040;
    width: 380px;
    font-weight:normal;
`
const Price = styled.span`
    font-size:32px;
    color: #009CA3;
    font-weight:normal;
`
const Footer = styled.footer`
    display:flex;
    align-items:flex-end;
    justify-content:space-between;
    padding-top:20px;
    border-top: 1px solid #b7b7b7;
`
const Counter = styled.div`
    display:flex;
    align-items:center;
    width: 120px;
    height: 50px;
    border: 1px solid #b7b7b7;
`
const SubtractButton = styled.button`
    background:unset;
    color: #009CA3;
    font-size:32px;
    border: none;
    padding: 10px;
    cursor:pointer;
`
const AddButton = styled.button`
    background:unset;
    color: #009CA3;
    font-size:32px;
    border: none;
    padding: 10px;
    cursor:pointer;
`
const InputCounter = styled.input`
    outline:none;
    border: none;
    color: #009CA3;
    font-size:32px;
    text-align:center;
    width: 100%;
`
const BuyButton = styled.button`
    outline:none;
    border: none;
    font-weight:normal;
    background-color: #009CA3;
    color:white;
    border-radius:5px;
    padding:10px;
    font-size:20px;
    cursor:pointer;
`

export default function Modal({isOpen, onClickClose, foodDetails}) {
    const [counter, setCounter] = useState(1)
    if(!isOpen){
        return null;
    }
    function addCounter() {
        setCounter(counter + 1)
    }
    function subtractCounter() {
        if(counter > 1){
            setCounter(counter - 1)
        } 
    }
    return ReactDOM.createPortal(
        <Container>
            <Wrapper>
                <Button onClick={
                    ()=>{
                    onClickClose()
                    setCounter(1)
                    }}>X</Button>
                <Image src={foodDetails.image ? (foodDetails.image) : ("https://public-v2links.adobecc.com/f6e71782-ebba-4573-6f7a-005a1a6d391f/component?params=component_id%3A2864ea4e-90e4-4bb0-abc4-41784d90e8bc&params=version%3A0&token=1641558953_da39a3ee_df3944162fc9fb0f0e5dd2ed5cfb27760bb76ddc&api_key=CometServer1")} />
             <Title>{foodDetails.name}</Title>
             <Info>
             <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Desc>
             <Price>{(foodDetails.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</Price>
             </Info>
             <Footer>
                 <Counter>
                     <SubtractButton onClick={subtractCounter}>-</SubtractButton>
                     <InputCounter value={counter}/>
                     <AddButton onClick={addCounter}>+</AddButton>
                 </Counter>
                 <BuyButton>
                 Adicionar {(counter * foodDetails.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}
                 </BuyButton>
             </Footer>
            </Wrapper>            
        </Container>,
        portalRoot,
    )
}
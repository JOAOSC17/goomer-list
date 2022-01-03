import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    height:60px;
    display:flex;
    align-items:center;
    background-color:#009CA3;
    -webkit-box-shadow: 0px 7px 34px -13px rgba(0,0,0,0.6); 
    box-shadow: 0px 7px 34px -13px rgba(0,0,0,0.6);
`
export default function Navbar() {
    return (
        <Container/>
    )
}

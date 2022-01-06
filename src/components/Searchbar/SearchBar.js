import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
const Container = styled.form`
    position:relative;
    width: 840px;
    height: 40px;
    margin: ${(props) => props.margin};
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
export default function SearchBar({onSubmitSearch, refSearch, placeholder, margin}) {
    return (
        <Container onSubmit={onSubmitSearch} margin={margin}>
            <Input type="text" ref={refSearch} placeholder={placeholder} />
            <Button type="submit"><SearchIcon style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%' }}/></Button>
        </Container>
    )
}

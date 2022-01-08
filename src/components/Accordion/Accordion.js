import React from 'react'
import styled from 'styled-components'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CardFood from '../CardFood/CardFood';
const AccordionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: transparent;
    border-radius: 10px;
    width: 100%;
    height: auto;
    padding: 2%;
    text-align: left;
`;

const InternalWrapper = styled.div`
    width: 100%;
    max-height: ${(props) => (props.isValid ? '800px' : '0')};
    transition: all 0.6s ease-in-out;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    flex-wrap:wrap;
`;
const TitleAccordion = styled.h2`
    font-size:16px;
`
const HeaderAccordion = styled.div`
    display: flex;
    justify-content:space-between;
    border-bottom:1px solid ${(props) => (props.length < 1 ? '#c2c2c2' : '#404040')};
    cursor:pointer;
    color:${(props) => (props.length < 1 ? '#c2c2c2' : '#404040')};
`
const ButtonAccordion = styled.button`
    background: unset;
    border: unset;
    outline:none;
    transform:rotate(${(props) => (props.isValid ? '90deg' : '')});
    transition: all 0.2s ease-in-out;
`
export default function Accordion({onClickAccordion, menu, setFoodDetails, open, title, setOpen}) {
    const isValid = title === open
    return (
        <AccordionWrapper>
        <HeaderAccordion  onClick={onClickAccordion} length={menu.length}>
            <TitleAccordion>{title}</TitleAccordion>
            <ButtonAccordion disabled={menu.length < 1 ? true : false} isValid={isValid}>{<ChevronRightIcon/>}</ButtonAccordion>
            </HeaderAccordion>
            <InternalWrapper isValid={isValid}>
            {menu.map((food, key)=> <CardFood food={food} key={key} onClickFood={()=>setFoodDetails(food)}/>)}
            </InternalWrapper>
        </AccordionWrapper>
    )
}

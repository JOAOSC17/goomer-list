import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navbar from '../../components/Navbar/Navbar'
import SearchBar from '../../components/Searchbar/SearchBar'
import Spinner from '../../components/Spinner/Spinner'
import CardFood from '../../components/CardFood/CardFood'
import api from '../../services'

const Container = styled.main`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    max-width:800px;
    margin: 24px 75px 0 75px;
`
const InfoContainer = styled.section`
    display:flex;
    align-items:center;
    height: 145px;
`
const InfoRestaurant = styled.div`
    display: flex;
    flex-direction:column;
    margin-left:21px ;

`
const Title = styled.h1`
    font-size:24px;
    color: #404040;
    font-weight:normal;
`
const Desc = styled.p`
    font-size:16px;
    color: #404040;
    font-weight:normal;
    color: #404040;
`
const Horary = styled.p`
    font-size:12px;
    font-weight:normal;
    color: #404040;
`
const Image = styled.img`
    height: 100%;
`
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
    // transition: all 0.6s ease-in-out;
`;

const InternalWrapper = styled.div`
    width: 100%;
    max-height: ${(props) => (props.open ? '800px' : '0')};
    transition: all 0.4s ease-in-out;
    overflow: hidden;
`;
const TitleAccordion = styled.h2`
    font-size:16px;
    color: #404040;
    font-weight:normal;
`
const HeaderAccordion = styled.div`
    display: flex;
    justify-content:space-between;
    border-bottom:1px solid #404040;
`
const ButtonAccordion = styled.button`
    background: unset;
    border: unset;
    outline:none;
    background-image: ${(props) => (!props.open ? (<ChevronRightIcon/>) : (<ExpandMoreIcon/>))};
    transition: all 0.4s ease-in-out;
`

export default function SingleRestaurant() {
    const [loading, setLoading] = useState(true)
    const [singleRestaurant, setSingleRestaurant] = useState([])
    const [sweet, setSweet] = useState([])
    const [strange, setStrange] = useState([])
    const [salty, setSalty] = useState([])
    const [exotic, setExotic] = useState([])
    const [drink, setDrink] = useState([])
    const [salad, setSalad] = useState([])
    const [main, setMain] = useState([])
    const [ open, setOpen ] = useState(false)
    const {id} = useParams()
    async function getAllData () {
        try {
        setLoading(true)
        const { data: dataMenu } = await api.get(`/restaurants/${id}/menu`)
        const { data: dataRestaurant } = await api.get(`/restaurants/${id}`)
        console.log(dataMenu)
        setSweet(dataMenu.filter(foods=> foods.group.toLowerCase() === 'doces'))
        setStrange(dataMenu.filter(foods=> foods.group.toLowerCase() === 'pratos estranhos'))
        setSalty(dataMenu.filter(foods=> foods.group.toLowerCase() === 'salgados'))
        setExotic(dataMenu.filter(foods=> foods.group.toLowerCase() === 'sucos exóticos'))
        setDrink(dataMenu.filter(foods=> foods.group.toLowerCase() === 'bebidas'))
        setSalad(dataMenu.filter(foods=> foods.group.toLowerCase() === 'saladas'))
        setMain(dataMenu.filter(foods=> foods.group.toLowerCase() === 'pratos principais'))
        setSingleRestaurant(dataRestaurant)
    } catch (err) {
        console.log(err)
    } finally {
        setLoading(false)
    }
}
    useEffect(() => {
         getAllData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const handleClick = () => {
        setOpen(!open);
    }
    return (
        <>
        {!loading ? (
        <>
        <header>
        <Navbar />
        </header>
        <Container>
            <InfoContainer>
            <Image src={singleRestaurant.image}/>
            <InfoRestaurant>
            <Title>{singleRestaurant.name}</Title>
            <Desc>
            {
            singleRestaurant.description ? 
            singleRestaurant.description
            : 
            ('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
            }
            </Desc>
            <Horary>Segunda à Sexta: <strong>11:30 às 15:00</strong></Horary>
            <Horary>Sábados: <strong>11:30 às 22:00</strong></Horary>
            <Horary>Domingos e Feriados: <strong>11:30 às 15:00</strong></Horary>
            </InfoRestaurant>
            </InfoContainer>
            <SearchBar margin={"25px 0px"} placeholder="Buscar no cardápio" />
            <AccordionWrapper>
        <HeaderAccordion>
            <TitleAccordion>Pratos Principais</TitleAccordion>
            <ButtonAccordion onClick={handleClick}>{!open ? (<ChevronRightIcon/>) : (<ExpandMoreIcon/>)}</ButtonAccordion>
            </HeaderAccordion>
            <InternalWrapper open={open}>
            {main.map(food=> <CardFood food={food}/>)}
            </InternalWrapper>
        </AccordionWrapper>
            <AccordionWrapper>
                <HeaderAccordion>
            <TitleAccordion>Doces</TitleAccordion>
            <ButtonAccordion onClick={handleClick}>{!open ? (<ChevronRightIcon/>) : (<ExpandMoreIcon/>)}</ButtonAccordion>
            </HeaderAccordion>
            <InternalWrapper open={open}>
                {sweet.map(food=> <CardFood food={food}/>)}
            </InternalWrapper>
        </AccordionWrapper>
        <AccordionWrapper>
            <HeaderAccordion>
            <TitleAccordion>Pratos Estranhos</TitleAccordion>
            <ButtonAccordion onClick={handleClick}>{!open ? (<ChevronRightIcon/>) : (<ExpandMoreIcon/>)}</ButtonAccordion>
            </HeaderAccordion>
            <InternalWrapper open={open}>
            {strange.map(food=> <CardFood food={food}/>)}
            </InternalWrapper>
        </AccordionWrapper>
        <AccordionWrapper>
            <HeaderAccordion>
            <TitleAccordion>Salgados</TitleAccordion>
            <ButtonAccordion onClick={handleClick}>{!open ? (<ChevronRightIcon/>) : (<ExpandMoreIcon/>)}</ButtonAccordion>
            </HeaderAccordion>
            <InternalWrapper open={open}>
            {salty.map(food=> <CardFood food={food}/>)}
            </InternalWrapper>
        </AccordionWrapper>
        <AccordionWrapper>
        <HeaderAccordion>
            <TitleAccordion>Sucos Exóticos</TitleAccordion>
            <ButtonAccordion onClick={handleClick}>{!open ? (<ChevronRightIcon/>) : (<ExpandMoreIcon/>)}</ButtonAccordion>
            </HeaderAccordion>
            <InternalWrapper open={open}>
            {exotic.map(food=> <CardFood food={food}/>)}
            </InternalWrapper>
        </AccordionWrapper>
        <AccordionWrapper>
        <HeaderAccordion>
            <TitleAccordion>Bebidas</TitleAccordion>
            <ButtonAccordion onClick={handleClick}>{!open ? (<ChevronRightIcon/>) : (<ExpandMoreIcon/>)}</ButtonAccordion>
            </HeaderAccordion>
            <InternalWrapper open={open}>
            {drink.map(food=> <CardFood food={food}/>)}
            </InternalWrapper>
        </AccordionWrapper>
        <AccordionWrapper>
        <HeaderAccordion>
            <TitleAccordion>Saladas</TitleAccordion>
            <ButtonAccordion onClick={handleClick}>{!open ? (<ChevronRightIcon/>) : (<ExpandMoreIcon/>)}</ButtonAccordion>
            </HeaderAccordion>
            <InternalWrapper open={open}>
            {salad.map(food=> <CardFood food={food}/>)}
            </InternalWrapper>
        </AccordionWrapper>
        </Container>
        </>
        ) : (<Spinner/>)}
    </>
    )
}
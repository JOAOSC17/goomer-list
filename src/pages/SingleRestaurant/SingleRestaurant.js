import { useEffect, useState, useRef} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../../components/Navbar/Navbar'
import SearchBar from '../../components/Searchbar/SearchBar'
import Spinner from '../../components/Spinner/Spinner'
import api from '../../services'
import Modal from '../../components/Modal/Modal';
import Accordion from '../../components/Accordion/Accordion';

const Container = styled.main`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    max-width:800px;
    margin: 24px 75px 0 75px;
    color: #404040;
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
`
const Desc = styled.p``
const Horary = styled.p`
    font-size:12px;
`
const Image = styled.img`
    height: 100%;
`

export default function SingleRestaurant() {
    const [loading, setLoading] = useState(true)
    const [singleRestaurant, setSingleRestaurant] = useState([])
    const [foodDetails, setFoodDetails] = useState(null)
    const [sweet, setSweet] = useState([])
    const [strange, setStrange] = useState([])
    const [salty, setSalty] = useState([])
    const [exotic, setExotic] = useState([])
    const [drink, setDrink] = useState([])
    const [salad, setSalad] = useState([])
    const [main, setMain] = useState([])
    const [ open, setOpen ] = useState('')
    const searchWord = useRef("")
    const navigate = useNavigate();
    const {id} = useParams()
    async function getAllData () {
        try {
        setLoading(true)
        const { data: dataMenu } = await api.get(`/restaurants/${id}/menu`)
        const { data: dataRestaurant } = await api.get(`/restaurants/${id}`)
        setSweet(dataMenu.filter(foods=> foods.group.toLowerCase() === 'doces'))
        setStrange(dataMenu.filter(foods=> foods.group.toLowerCase() === 'pratos estranhos'))
        setSalty(dataMenu.filter(foods=> foods.group.toLowerCase() === 'salgados'))
        setExotic(dataMenu.filter(foods=> foods.group.toLowerCase() === 'sucos ex??ticos'))
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
async function handleFilter (event){
    event.preventDefault();
    const { current } = searchWord
    const { data } = await api.get(`/restaurants/${id}/menu`)
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(current.value.toLowerCase());
    });
    if (current.value === "") {
        setSweet(data);
    }
     else {
        setSweet(newFilter.filter(foods=> foods.group.toLowerCase() === 'doces'))
        setStrange(newFilter.filter(foods=> foods.group.toLowerCase() === 'pratos estranhos'))
        setSalty(newFilter.filter(foods=> foods.group.toLowerCase() === 'salgados'))
        setExotic(newFilter.filter(foods=> foods.group.toLowerCase() === 'sucos ex??ticos'))
        setDrink(newFilter.filter(foods=> foods.group.toLowerCase() === 'bebidas'))
        setSalad(newFilter.filter(foods=> foods.group.toLowerCase() === 'saladas'))
        setMain(newFilter.filter(foods=> foods.group.toLowerCase() === 'pratos principais'))
    }
  };
    useEffect(() => {
         getAllData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    if(!loading && singleRestaurant.length < 1){
        navigate(`/error`)
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
            <Horary>Segunda ?? Sexta: <strong>11:30 ??s 15:00</strong></Horary>
            <Horary>S??bados: <strong>11:30 ??s 22:00</strong></Horary>
            <Horary>Domingos e Feriados: <strong>11:30 ??s 15:00</strong></Horary>
            </InfoRestaurant>
            </InfoContainer>
            <SearchBar margin={"25px 0px"} placeholder="Buscar no card??pio" onSubmitSearch={handleFilter} refSearch={searchWord}/>
            <Accordion title="Pratos Principais" onClickAccordion={() => setOpen('Pratos Principais')} menu={main} setFoodDetails={setFoodDetails} open={open} setOpen={setOpen}/>
            <Accordion title="Doces" onClickAccordion={() => setOpen('Doces')} menu={sweet} setFoodDetails={setFoodDetails} open={open} setOpen={setOpen}/>
            <Accordion title="Pratos Estranhos" onClickAccordion={() => setOpen('Pratos Estranhos')} menu={strange} setFoodDetails={setFoodDetails} open={open} setOpen={setOpen} />
            <Accordion title="Salgados" onClickAccordion={() => setOpen('Salgados')} menu={salty} setFoodDetails={setFoodDetails} open={open} setOpen={setOpen}/>
            <Accordion title="Sucos Ex??ticos" onClickAccordion={() => setOpen('Sucos Ex??ticos')} menu={exotic} setFoodDetails={setFoodDetails} open={open} setOpen={setOpen}/>
            <Accordion title="Bebidas" onClickAccordion={() => setOpen('Bebidas')} menu={drink} setFoodDetails={setFoodDetails} open={open} setOpen={setOpen}/>
            <Accordion title="Saladas" onClickAccordion={() => setOpen('Saladas')} menu={salad} setFoodDetails={setFoodDetails} open={open} setOpen={setOpen}/>
        </Container>
        <Modal isOpen={Boolean(foodDetails)} foodDetails={foodDetails} onClickClose={()=>setFoodDetails(null)}/>
        </>
        ) : (<Spinner/>)}
    </>
    )
}
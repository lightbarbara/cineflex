import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import Footer from "./Footer"

function Button({ hora, data, setHorarioEscolhido }) {
    return (
        <ButtonContainer>
            <Link onClick={() => setHorarioEscolhido([data, hora.name])} to={`/sessao/${hora.id}`}>
                {hora.name}
            </Link>
            {console.log([data, hora.name])}
        </ButtonContainer>
    )
}

function Horario({ h, setHorarioEscolhido }) {
    return (
        <HorarioContainer>
            <p>{`${h.weekday} - ${h.date}`}</p>
            <div>
                {h.showtimes.map(hora => <Button data={h.date} setHorarioEscolhido={setHorarioEscolhido} hora={hora} />)}
            </div>
        </HorarioContainer>
    )
}

export default function Horarios({ setHorarioEscolhido }) {

    const params = useParams()

    const [horarios, setHorarios] = useState([])

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${params.idMovie}/showtimes`)

        promise.then(resposta => setHorarios(resposta.data))

        promise.catch(err => console.log(err.response.data))
    }, [])

    return (
            <HorariosContainer>
                <div>
                    <p>Selecione o horário</p>
                </div>
                {horarios.length === 0 ? <p>Carregando...</p> : horarios.days.map(h => <Horario setHorarioEscolhido={setHorarioEscolhido} h={h} />)}
                {horarios.length === 0 ? '' : <Footer info={horarios} />}
            </HorariosContainer>
    )
}

const HorariosContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: inherit;
width: inherit;
margin-bottom: 117px;

p {
    font-size: 24px;
    font-weight: 400;
    color: #293845;
}

& > div:nth-child(1) {
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
}
`

const HorarioContainer = styled.div`
display: flex;
flex-direction: column;
width: inherit;
padding-left: 24px;
height: 123px;

p {
    font-size: 20px;
    width: inherit;
}

& > div {
    width: inherit;
    display: flex;
    gap: 8px;
}
`

const ButtonContainer = styled.button`
background-color: #E8833A;
font-size: 18px;
font-weight: 400;
border: 0px;
width: 82px;
height: 43px;
border-radius: 3px;
margin-top: 22px;
cursor: pointer;

a {
    text-decoration: none;
    color: #FFFFFF;
}
`
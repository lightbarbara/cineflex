import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Filme from "./Filme"

export default function TelaInicial() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')

        promise.then(resposta => setMovies(resposta.data))

        promise.catch(err => console.log(err.response.data))
    }, [])

    return (
        <TelaInicialContainer>
            <div>
                <p>Selecione o filme</p>
            </div>
            <div>
                {movies.length === 0 ? <p>Carregando...</p> : movies.map(f => <Filme img={f.posterURL} id={f.id} />)}
            </div>
        </TelaInicialContainer>
    )
}

const TelaInicialContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

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

& > div:nth-child(2) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 11px;
    cursor: pointer;
}
`
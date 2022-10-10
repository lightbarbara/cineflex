import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import Header from './Header'
import TelaInicial from './TelaInicial'
import Horarios from './Horarios'
import Assentos from './Assentos'
import { useState } from 'react'
import Sucesso from './Sucesso'

export default function App() {

    const [filmeEscolhido, setFilmeEscolhido] = useState('')
    const [horarioEscolhido, setHorarioEscolhido] = useState('')
    const [assentosEscolhidos, setAssentosEscolhidos] = useState([])

    return (
        <BrowserRouter>
            <GlobalStyle />
            <AppContainer>
                <Header />
                <Routes>
                    <Route path='/' element={<TelaInicial setFilmeEscolhido={setFilmeEscolhido}/>} />
                    <Route path='/filme/:idMovie' element={<Horarios setHorarioEscolhido={setHorarioEscolhido}/>} />
                    <Route path='/sessao/:idSessao' element={<Assentos assentosEscolhidos={assentosEscolhidos} setAssentosEscolhidos={setAssentosEscolhidos} />} />
                    <Route path='sucesso' element={<Sucesso filmeEscolhido={filmeEscolhido} horarioEscolhido={horarioEscolhido} assentosEscolhidos={assentosEscolhidos} />} />
                </Routes>
            </AppContainer>
        </BrowserRouter>
    )
}

const AppContainer = styled.div`
width: 375px;
height: 100vh;
background-color: #FFFFFF;
overflow-y: scroll;
overflow-x: hidden;

&::-webkit-scrollbar {
    display: none;
}

& > div:nth-child(1) {
    position: absolute;
}

& > div:nth-child(2) {
    margin-top: 67px;
}
`
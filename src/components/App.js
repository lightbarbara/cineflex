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
    const [horarioEscolhido, setHorarioEscolhido] = useState([])
    const [assentosEscolhidos, setAssentosEscolhidos] = useState([])
    const [numerosEscolhidos, setNumerosEscolhidos] = useState([])
    const [form, setForm] = useState({
        ids: [],
        name: '',
        cpf: ''
    })

    return (
        <BrowserRouter>
            <GlobalStyle />
            <AppContainer>
                <Header />
                <Routes>
                    <Route path='/' element={<TelaInicial setFilmeEscolhido={setFilmeEscolhido}/>} />
                    <Route path='/filme/:idMovie' element={<Horarios setHorarioEscolhido={setHorarioEscolhido}/>} />
                    <Route path='/sessao/:idSessao' element={<Assentos assentosEscolhidos={assentosEscolhidos} numerosEscolhidos={numerosEscolhidos} setNumerosEscolhidos={setNumerosEscolhidos} setAssentosEscolhidos={setAssentosEscolhidos} form={form} setForm={setForm} />} />
                    <Route path='sucesso' element={<Sucesso setFilmeEscolhido={setFilmeEscolhido} filmeEscolhido={filmeEscolhido} setHorarioEscolhido={setHorarioEscolhido} horarioEscolhido={horarioEscolhido} setAssentosEscolhidos={setAssentosEscolhidos} setNumerosEscolhidos={setNumerosEscolhidos} numerosEscolhidos={numerosEscolhidos} setForm={setForm} form={form} />} />
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
import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import Header from './Header'
import TelaInicial from './TelaInicial'
import Horarios from './Horarios'

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <AppContainer>
                <Header />
                <Routes>
                    <Route path='/' element={<TelaInicial />} />
                    <Route path='/filme/:idMovie' element={<Horarios />} />
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
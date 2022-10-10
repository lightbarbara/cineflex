import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

function Assento({ a, assentosEscolhidos, setAssentosEscolhidos }) {

    function escolherAssento(a) {
        if (a.isAvailable === false) {
            return
        } else if (assentosEscolhidos.includes(a.id)) {
            const novoArray = assentosEscolhidos.filter(assento => assento !== a.id)
            setAssentosEscolhidos(novoArray)
            return
        }
        setAssentosEscolhidos([...assentosEscolhidos, a.id])
    }

    return (
        <AssentoContainer onClick={() => escolherAssento(a)} id={a.id} assentosEscolhidos={assentosEscolhidos} available={a.isAvailable}>
            <p>{a.name}</p>
        </AssentoContainer>
    )
}

function Form({assentosEscolhidos, setAssentosEscolhidos}) {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        ids: [],
        name: '',
        cpf: ''
    })

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function sendForm(e) {
        e.preventDefault()

        const newForm = {
            ...form,
            ids: assentosEscolhidos
        }

        const promise = axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', newForm)

        promise.then(resposta => navigate('/sucesso'))

        promise.catch(err => err.response.data)

        setAssentosEscolhidos([])
        setForm({
            ids: [],
            name: '',
            cpf: ''
        })
    }

    return (
        <FormContainer onSubmit={sendForm}>
            <label htmlFor="name">Nome do comprador:</label>
            <input value={form.name} name='name' required onChange={handleForm}/>
            <label htmlFor="cpf">CPF do comprador:</label>
            <input value={form.cpf} name='cpf' required onChange={handleForm}/>
            <button type='submit'>submit</button>
        </FormContainer>
    )
}

export default function Assentos({ assentosEscolhidos, setAssentosEscolhidos }) {

    const params = useParams()

    const [assentos, setAssentos] = useState([])

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${params.idSessao}/seats`)

        promise.then((resposta) => setAssentos(resposta.data))

        promise.catch(err => console.log(err.response.data))
    }, [])

    return (
        <AssentosContainer>
            <div>
                <p>Selecione o(s) assento(s)</p>
            </div>
            <div>
                {assentos.length === 0 ? <p>Carregando...</p> : assentos.seats.map(a => <Assento assentosEscolhidos={assentosEscolhidos} setAssentosEscolhidos={setAssentosEscolhidos} a={a} />)}
            </div>
            <div>
                <Opcao>
                    <AssentoContainer available={true} assentosEscolhidos={[0]} id={0}></AssentoContainer>
                    <p>Selecionado</p>
                </Opcao>
                <Opcao>
                    <AssentoContainer available={true} assentosEscolhidos={[0]} id={1}></AssentoContainer>
                    <p>Disponível</p>
                </Opcao>
                <Opcao>
                    <AssentoContainer available={false}></AssentoContainer>
                    <p>Indisponível</p>
                </Opcao>
            </div>
            <Form assentosEscolhidos={assentosEscolhidos} setAssentosEscolhidos={setAssentosEscolhidos}/>
        </AssentosContainer>
    )
}

const AssentosContainer = styled.div`

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
    column-gap: 7px;
    row-gap: 18px;
    padding: 0 24px;
}

& > div:nth-child(3) {
    display: flex;
    margin-top: 16px;
}
`

const AssentoContainer = styled.div`
height: 26px;
width: 26px;
background-color: ${props => props.available ? (props.assentosEscolhidos.includes(props.id) ? '#1AAE9E' : '#C3CFD9') : '#FBE192'};
border-radius: 12px;
border: 1px solid ${props => props.available ? (props.assentosEscolhidos.includes(props.id) ? '#0E7D71' : '#808F9D') : '#F7C52B'};
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;

p {
    font-size: 11px;
}
`

const Opcao = styled.div`

p {
    font-size: 13px;
    margin-top: 8px
}
`

const FormContainer = styled.form`

`
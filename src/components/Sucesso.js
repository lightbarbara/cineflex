import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Sucesso({ filmeEscolhido, horarioEscolhido, numerosEscolhidos, form, setFilmeEscolhido, setHorarioEscolhido, setAssentosEscolhidos, setNumerosEscolhidos, setForm }) {

    const navigate = useNavigate()

    function restart() {
        setFilmeEscolhido('')
        setHorarioEscolhido([])
        setAssentosEscolhidos([])
        setNumerosEscolhidos([])
        setForm({
            ids: [],
            name: '',
            cpf: ''
        })
        navigate('/')
    }

    return (
        <SucessoContainer>
            <span>
                <p>Pedido feito</p>
                <p>com sucesso!</p>
            </span>
            <div data-identifier="movie-session-infos-reserve-finished">
                <p>Filme e sessão</p>
                <p>{filmeEscolhido}</p>
                <p>{`${horarioEscolhido[0]}  ${horarioEscolhido[1]}`}</p>
            </div>
            <div data-identifier="seat-infos-reserve-finished">
                <p>Ingressos</p>
                {numerosEscolhidos.map(n => <p>{`Assento ${n}`}</p>)}
            </div>
            <div data-identifier="buyer-infos-reserve-finished">
                <p>Comprador</p>
                <p>{`Nome: ${form.name}`}</p>
                <p>{`CPF: ${form.cpf}`}</p>
            </div>
            <Button data-identifier="back-to-home-btn" onClick={restart}>Voltar pra Home</Button>
        </SucessoContainer>
    )
}

const SucessoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: inherit;

span {
    font-size: 24px;
    color: #247A6B;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    height: 110px;
    justify-content: center;
}

div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    width: inherit;
    padding: 20px 28px;
    gap: 10px;

    p:nth-child(1) {
        font-size: 24px;
        font-weight: 700;
        color: #293845;
        width: inherit;
    }

    p {
        font-size: 22px;
        font-weight: 400;
        color: #293845;
        width: inherit;
    }
}
`

const Button = styled.button`
    background-color: #E8833A;
    font-size: 18px;
    font-weight: 400;
    border: 0px;
    width: 225px;
    height: 43px;
    border-radius: 3px;
    margin-top: 22px;
    cursor: pointer;
    color: #FFFFFF;
    margin: 40px auto;
`
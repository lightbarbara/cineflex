import styled from "styled-components"

export default function Sucesso() {
    return (
        <SucessoContainer>
            <p>Pedido feito com sucesso!</p>
            <p>Filme e sessão</p>
            <p>Ingressos</p>
            <p>Comprador</p>
        </SucessoContainer>
    )
}

const SucessoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center
`
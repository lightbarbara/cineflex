import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Filme({ nome, img, id, setFilmeEscolhido }) {

    return (
        <FilmeContainer>
            <Link onClick={() => setFilmeEscolhido(nome)} to={`filme/${id}`}>
                <img data-identifier="movie-outdoor" src={img} alt='capa do filme' />
            </Link>
        </FilmeContainer>
    )
}

const FilmeContainer = styled.div`
width: 145px;
height: 209px;
box-shadow: 0px 2px 4px 2px #0000001A;
display: flex;
justify-content: center;
align-items: center;
border-radius: 3px;

img {
    width: 129px;
    height: 193px;
}
`
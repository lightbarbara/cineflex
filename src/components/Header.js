import styled from "styled-components";

export default function Header() {
    return (
        <HeaderContainer>
            <p>CINEFLEX</p>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
height: 67px;
width: inherit;
background-color: #C3CFD9;
display: flex;
justify-content: center;
align-items: center;

p {
    color: #E8833A;
    font-size: 34px;
    font-weight: 400
}
`
import styled from "styled-components";

export default function Footer({ horarios }) {
    return (
        <FooterContainer>
            <div>
                <img src={horarios.posterURL} alt='poster' />
            </div>
            <div>
                <p>{horarios.title}</p>
            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
height: 117px;
background-color: #DFE6ED;
width: inherit;
margin-top: 30px;
border-top: 1px solid #9EADBA;
display: flex;
position: fixed;
bottom: 0;
margin-top: 30px;

div:nth-child(1) {
    width: 64px;
    height: 89px;
    box-shadow: 0px 2px 4px 0px #0000001A;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    margin: 14px 10px;
}

img {
    width: 48px;
    height: 72px;
}

div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center
}

p {
    font-size: 26px
}
`
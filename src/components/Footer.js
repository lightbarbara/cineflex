import styled from "styled-components";

export default function Footer(props) {
    console.log(props)
    return (
        <>
            {props.info.length !== 0 ? (
                <FooterContainer>
                    <div>
                        {props.info.posterURL ? <img src={props.info.posterURL} alt='poster' /> : ''}
                        {props.info.movie ? <img src={props.info.movie.posterURL} alt='poster' /> : ''}
                    </div>
                    <div>
                        <p>{props.info.title ? props.info.title : ''}</p>
                        <p>{props.info.movie ? props.info.movie.title : ''}</p>
                        <p>{props.info.day ? `${props.info.day.weekday} - ${props.info.name}` : ''}</p>
                    </div>
                </FooterContainer>
            ) : <p>Carregando...</p>}
        </>
    )
}

const FooterContainer = styled.div`
height: 117px;
background-color: #DFE6ED;
width: 375px;
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
    width: inherit;
    height: inherit;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 291px;
}

p {
    display: flex;
    width: inherit;
    font-size: 26px;
    flex-wrap: wrap;
}
`
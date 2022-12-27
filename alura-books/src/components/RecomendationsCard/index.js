import { Title } from "../Title"

import styled from "styled-components"

const Card = styled.div`
    align-items: center;
    background-color: #fff;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;
`
const Button = styled.button`
    background-color: #EB9B00;
    color: #fff;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150%;
`
const Description = styled.p`
    max-width: 300px;
`
const SubTitle = styled.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`

const ImgBook = styled.img`
    width: 150%;
`

function RecomendationsCard({ title, subtitle, description, img }) {
    return (
        <Card>
            <div>
                <Title
                    sizeFont="16px"
                    color="#EB9B00"
                    align="left"
                > {title}</Title>
                <SubTitle>{subtitle} </SubTitle>
                <Description>{description}</Description>
            </div>
            <div>
                <ImgBook src={img} />
                <Button>Saiba mais</Button>
            </div>
        </Card>
    )
}
export default RecomendationsCard
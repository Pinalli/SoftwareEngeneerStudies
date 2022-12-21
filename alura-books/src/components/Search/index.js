import Input from '../Input'
import styled from 'styled-components'

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);   
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height:  270px;
    width: 100%;
`
const Title = styled.h2`
    color: #FFF;
    font-size: 16px;
    text-align: center;
    width: 100%;
`
const SubTitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

function Search() {
    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <SubTitle>Encontre seu livro em nossa estante</SubTitle>
            <Input placeholder="Digite o nome do livro" />
        </SearchContainer>
    )
}

export default Search
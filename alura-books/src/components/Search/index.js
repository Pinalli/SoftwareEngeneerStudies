/* eslint-disable jsx-a11y/alt-text */
import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { books } from './dataSearch'

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
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const SubTitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    cursor: pointer;

    p {
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid white;
    }
`
function Search() {
    const [booksSearch, setBooksSearch] = useState([])


    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <SubTitle>Encontre seu livro em nossa estante</SubTitle>
            <Input
                placeholder="Pesquise o nome do livro"
                onBlur={event => {
                    const textTyped = event.target.value
                    const resultSearch = books.filter(book => book.name.includes(textTyped))
                    setBooksSearch(resultSearch)
                }}
            />

            {booksSearch.map(book => (
                <Result>
                    <img src={book.src} />
                    <p>{book.name}</p>
                </Result>
            ))}
        </SearchContainer>
    )
}

export default Search
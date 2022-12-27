import { books } from './dataLastLaunch'
import { Title } from '../Title'
import RecomendationsCard from '../RecomendationsCard'
import imgBook from '../../img/livro2.png'

import styled from 'styled-components'

const LastLaunchContainer = styled.section`
    backgound-color: #EBECEE;
    padding-bottom: 20PX;
    display: flex;
    flex-direction: column;
`

const NewsBookContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`


function LastLaunch() {
    return (
        <LastLaunchContainer>
            <Title
                color="#EB9B00"
                fontSize="36px"
            >
                ÚLTIMOS LANÇAMENTOS
            </Title>
            <NewsBookContainer>
                {books.map(book => (
                    <img src={book.src} />
                ))
                }
            </NewsBookContainer>
            <RecomendationsCard
                title="Talvez seja do seu interesse"
                subtitle="Angular 11"
                description="Construindo uma aplicação com a plataforma Google"
                img={imgBook}
            />
        </LastLaunchContainer>
    )
}

export default LastLaunch
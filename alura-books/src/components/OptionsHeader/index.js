import styled from 'styled-components';

const textOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

const Opcoes = styled.ul`
     display: flex;
`
const Opcao = styled.li`
        font-size: 16px;
        display: flex;
        align-items: center;
        min-width: 120px;
        justify-content: center;
        text-align: center;
        height: 100%;
        padding: 0 5px;
        cursor: pointer;
`

function OpcoesHeader() {
    return (
        <Opcoes>
            {textOptions.map((text) => (
                <Opcao><p>{text}</p></Opcao>
            ))}
        </Opcoes>
    );
}

export default OpcoesHeader;
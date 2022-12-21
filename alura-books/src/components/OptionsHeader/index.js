import './style.css'

const textOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OpcoesHeader() {
    return (
        <ul className='opcoes'>
            {textOptions.map((text) => (
                <li className='opcao'><p>{text}</p></li>
            ))}
        </ul>
    );
}

export default OpcoesHeader;
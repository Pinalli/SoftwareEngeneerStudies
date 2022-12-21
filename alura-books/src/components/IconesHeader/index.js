
import perfil from '../../img/perfil.svg';
import sacola from '../../img/sacola.svg';
import styled from 'styled-components';

const Icon = styled.li`
      margin-right: 40px;
      width: 25px;
`
const Icons = styled.ul`
     display: flex;
     align-items: center;
`

const icons = [perfil, sacola]

function IconesHeader() {
    return (
        <Icons>
            {icons.map((icon) => (
                <Icon><img src={icon} alt='icon'></img></Icon>
            ))}
        </Icons>
    );
}
export default IconesHeader;
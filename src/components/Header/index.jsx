import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import * as S from './styles';

export function Header() {
  return (
    <S.Nav>
      <a href="_">
        <FaHome size={24} color="#fff" />
      </a>
      <a href="_">
        <FaUserAlt size={24} color="#fff" />
      </a>
      <a href="_">
        <FaSignInAlt size={24} color="#fff" />
      </a>
    </S.Nav>
  );
}

import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import * as S from './styles';

export function Header() {
  return (
    <S.HeaderContainer>
      <nav>
        <NavLink to="/" title="login">
          <FaHome size={24} />
        </NavLink>
        <NavLink to="/dashboard" title="dashboard">
          <FaUserAlt size={24} />
        </NavLink>
        <button type="button">
          <FaSignInAlt size={24} />
        </button>
      </nav>
    </S.HeaderContainer>
  );
}

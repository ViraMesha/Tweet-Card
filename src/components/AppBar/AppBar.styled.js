import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  padding: 0 100px;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: 12px;
  font-weight: 900;
  font-size: 22px;
  color: #212121;

  &.active {
    color: #ebd8ff;
  }
  &:hover,
  &:focus {
    color: #ebd8ff;
  }
`;

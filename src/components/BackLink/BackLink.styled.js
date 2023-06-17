import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: var(--black-text-cl);
  font-weight: 600;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  margin: 20px 0;

  :hover {
    color: var(--purple-cl);
  }
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NotFoundWrapper = styled.div`
  position: relative;
  height: 100vh;
  background: #030005;
`;

export const NotFoundBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  max-width: 767px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
`;

export const NotFoundContentWrapper = styled.div`
  position: relative;
  height: 180px;
  margin-bottom: 20px;
  z-index: -1;
`;

export const Titel = styled.h1`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 224px;
  font-weight: 900;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: -12px;
  color: #030005;
  text-transform: uppercase;
  text-shadow: -1px -1px 0 #8400ff, 1px 1px 0 #ff005a;
  letter-spacing: -20px;
`;

export const Text = styled.h2`
  position: absolute;
  left: 0;
  right: 0;
  top: 110px;
  font-size: 42px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  text-shadow: 0 2px 0 #8400ff;
  letter-spacing: 13px;
  margin: 0;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-transform: uppercase;
  color: #ff005a;
  text-decoration: none;
  border: 2px solid;
  background: 0 0;
  padding: 10px 40px;
  font-size: 14px;
  font-weight: 700;
  transition: color var(--transition);

  &:hover {
    color: #8400ff;
  }
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;

export const ContentWrapper = styled.div`
  text-align: center;
`;

export const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const SubHeading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 22px;
  color: #373737;
  text-decoration: none;

  &:hover {
    background-color: #4b2a99;
    color: #ebd8ff;
  }
`;

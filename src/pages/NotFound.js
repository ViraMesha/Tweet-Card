import styled from 'styled-components';
import PageNotFound from '../img/PageNotFound.jpg';

const Main = styled.main`
  padding: 40px 0;
  text-align: center;
`;

const Img = styled.img`
  border-radius: 5px;
`;

const Title = styled.h1`
  margin-top: 20px;
  color: red;
  font-weight: 500;
  font-size: 24px;
`;

const NotFound = () => {
  return (
    <Main>
      <Img src={PageNotFound} width="650" alt="PageNotFound" />
      <Title>Page not found😥</Title>
    </Main>
  );
};

export default NotFound;

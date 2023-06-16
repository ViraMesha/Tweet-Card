import { Header, StyledLink } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/tweets">Tweets</StyledLink>
      </nav>
    </Header>
  );
};

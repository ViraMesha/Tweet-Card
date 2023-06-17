import {
  NotFoundBox,
  NotFoundContentWrapper,
  NotFoundWrapper,
  StyledLink,
  Text,
  Titel,
} from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <NotFoundBox>
        <NotFoundContentWrapper>
          <Titel>404</Titel>
          <Text>Page not found</Text>
        </NotFoundContentWrapper>
        <StyledLink to="/">Home</StyledLink>
      </NotFoundBox>
    </NotFoundWrapper>
  );
};

export default NotFoundPage;

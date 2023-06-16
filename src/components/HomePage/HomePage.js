import {
  HomePageWrapper,
  ContentWrapper,
  Heading,
  SubHeading,
  Description,
  Link,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <HomePageWrapper>
      <ContentWrapper>
        <Heading>Welcome to Tweet App</Heading>
        <SubHeading>Explore and share your thoughts</SubHeading>
        <Description>
          Get started by checking out the latest tweets or share your own
          thoughts with the world.
        </Description>
        <Link to="/tweets">Go to Tweets</Link>
      </ContentWrapper>
    </HomePageWrapper>
  );
};

export default HomePage;

import {
  HomePageWrapper,
  ContentWrapper,
  Heading,
  SubHeading,
  Description,
  Link,
  ImageWrapper,
} from './HomePage.styled';
import feature from '../../img/feature.png';

const HomePage = () => {
  return (
    <HomePageWrapper>
      <ContentWrapper>
        <div>
          <Heading>Welcome to Tweet App</Heading>
          <SubHeading>Explore and share your thoughts</SubHeading>
          <Description>
            Get started by checking out the latest tweets or share your own
            thoughts with the world.
          </Description>
          <Link to="/tweets">Go to Tweets</Link>
        </div>
        <ImageWrapper>
          <img src={feature} alt="Tweet App" width="588" height="680" />
        </ImageWrapper>
      </ContentWrapper>
    </HomePageWrapper>
  );
};

export default HomePage;

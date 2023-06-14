import {
  CardWrapper,
  Button,
  Icon,
  HorizontalLine,
  Text,
  ContentContainer,
  Logo,
} from './TweetCard.styled';
import logo from '../../img/logo.png';
import picture from '../../img/picture.png';
// import boy from '../../img/boy.png';

const TweetCard = ({ id, avatar, user, followers, tweets }) => {
  return (
    <CardWrapper>
      <Logo src={logo} alt="GoIT logo" />
      <img
        src={picture}
        alt="question and check mark"
        width="308"
        height="168"
      />
      <HorizontalLine></HorizontalLine>
      <Icon src={avatar} alt="icon of a boy" width="80" height="80" />

      <ContentContainer>
        <Text style={{ marginBottom: '16px' }}>{tweets} tweets</Text>
        <Text>{followers} Followers</Text>
        <Button type="button">Follow</Button>
      </ContentContainer>
    </CardWrapper>
  );
};

export default TweetCard;

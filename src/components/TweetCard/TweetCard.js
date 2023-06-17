import { useState, useEffect } from 'react';
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
import { updateFollowerCount } from 'api-services/api';
import { formatFollowerCount } from 'helpers/formatFollowerCount';

const TweetCard = ({ id, avatar, followers, tweets }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(followers);

  useEffect(() => {
    const savedButtonState = localStorage.getItem(`tweetCardButtonState_${id}`);
    if (savedButtonState) {
      setIsFollowing(savedButtonState === 'true');
    }
  }, [id]);

  const handleFollow = async () => {
    // Update the follower count on the server
    if (isFollowing) {
      setFollowerCount(prevCount => prevCount - 1);
      await updateFollowerCount(id, followerCount - 1);
    } else {
      setFollowerCount(prevCount => prevCount + 1);
      await updateFollowerCount(id, followerCount + 1);
    }

    // Update the button state and save it to local storage
    setIsFollowing(prevFollowing => !prevFollowing);
    localStorage.setItem(
      `tweetCardButtonState_${id}`,
      JSON.stringify(!isFollowing)
    );
  };

  const formattedFollowerCount = formatFollowerCount(followerCount);

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
        <Text>{formattedFollowerCount} Followers</Text>
        <Button type="button" onClick={handleFollow} isFollowing={isFollowing}>
          {isFollowing ? 'Following' : 'Follow'}
        </Button>
      </ContentContainer>
    </CardWrapper>
  );
};

export default TweetCard;

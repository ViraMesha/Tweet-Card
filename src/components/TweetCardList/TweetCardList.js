import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import TweetCard from 'components/TweetCard/TweetCard';
import { Button, ButtonContainer, CardSet } from './TweetCardList.styled';
import { fetchTweets } from 'api-services/api';
import { BackLink } from 'components/BackLink/BackLink';

const TweetCardList = () => {
  const [tweets, setTweets] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const location = useLocation();
  const locRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function getTweets() {
      try {
        setIsloading(true);
        setError(null);
        const data = await fetchTweets(page);
        setTweets(prevTweets => [...prevTweets, ...data]);
      } catch (error) {
        setError(error);
      } finally {
        setIsloading(false);
      }
    }
    if (!isInitialRender) {
      getTweets();
    } else {
      setIsInitialRender(false);
    }
  }, [page, isInitialRender]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <div>
        <BackLink to={locRef.current}>Go back</BackLink>
      </div>
      {isloading && <b>Is loading...</b>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {tweets && (
        <>
          <CardSet>
            {tweets.map(({ id, avatar, user, followers, tweets }) => (
              <TweetCard
                key={id}
                id={id}
                avatar={avatar}
                user={user}
                followers={followers}
                tweets={tweets}
              />
            ))}
          </CardSet>
          <ButtonContainer>
            <Button type="button" onClick={loadMore}>
              Load More
            </Button>
          </ButtonContainer>
        </>
      )}
    </>
  );
};

export default TweetCardList;

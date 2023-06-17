import { useState, useEffect } from 'react';
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
  const [hasMoreTweets, setHasMoreTweets] = useState(true);

  useEffect(() => {
    async function getTweets() {
      try {
        setIsloading(true);
        setError(null);
        const data = await fetchTweets(page);
        if (data.length === 0) {
          setHasMoreTweets(false); // No more tweets available
        } else {
          setTweets(prevTweets => [...prevTweets, ...data]);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    }
    if (!isInitialRender && hasMoreTweets) {
      getTweets();
    } else {
      setIsInitialRender(false);
    }
  }, [page, isInitialRender, hasMoreTweets]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <div>
        <BackLink to="/">Go back</BackLink>
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
          {!error && (
            <ButtonContainer>
              {hasMoreTweets ? (
                <Button type="button" onClick={loadMore}>
                  {isloading ? 'Loading...' : 'Load More'}
                </Button>
              ) : (
                <p>No tweets available</p>
              )}
            </ButtonContainer>
          )}
        </>
      )}
    </>
  );
};

export default TweetCardList;

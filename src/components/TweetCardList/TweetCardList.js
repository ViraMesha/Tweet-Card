import { useState, useEffect } from 'react';
import TweetCard from 'components/TweetCard/TweetCard';
import { CardSet } from './TweetCardList.styled';
import { fetchTweets } from 'api-services/api';

const TweetCardList = () => {
  const [tweets, setTweets] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [isInitialRender, setIsInitialRender] = useState(true);

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
      {isloading && <b>Is loading...</b>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {tweets && (
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
      )}
      <button type="button" onClick={loadMore}>
        Load More
      </button>
    </>
  );
};

export default TweetCardList;

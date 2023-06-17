import { useState, useEffect } from 'react';
import TweetCard from 'components/TweetCard/TweetCard';
import {
  Button,
  ButtonContainer,
  CardSet,
  TopBar,
} from './TweetCardList.styled';
import { fetchTweets } from 'api-services/api';
import { BackLink } from 'components/BackLink/BackLink';
import FilterDropdown from 'components/FilterDropdown/FilterDropdown';

const TweetCardList = () => {
  const [tweets, setTweets] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [hasMoreTweets, setHasMoreTweets] = useState(true);
  const [filterOption, setFilterOption] = useState('all');

  const handleFilterChange = event => {
    setFilterOption(event.target.value);
  };

  const filteredTweets = tweets.filter(tweet => {
    if (filterOption === 'all') {
      return true;
    } else if (filterOption === 'follow') {
      return !tweet.isFollowing;
    } else if (filterOption === 'followings') {
      return tweet.isFollowing;
    }
    return false;
  });

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
      <TopBar>
        <BackLink to="/">Go back</BackLink>
        <FilterDropdown
          filterOption={filterOption}
          handleFilterChange={handleFilterChange}
        />
      </TopBar>
      {isloading && <b>Is loading...</b>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {tweets && (
        <>
          <CardSet>
            {filteredTweets.map(({ id, avatar, followers, tweets }) => (
              <TweetCard
                key={id}
                id={id}
                avatar={avatar}
                followers={followers}
                tweets={tweets}
              />
            ))}
          </CardSet>
          {!error && filteredTweets.length >= 6 && (
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

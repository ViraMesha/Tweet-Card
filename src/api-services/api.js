import axios from 'axios';
axios.defaults.baseURL = 'https://648990165fa58521caafd515.mockapi.io/';

export const fetchTweets = async page => {
  const response = await axios.get(`users?page=${page}&limit=6`);
  const tweets = response.data.map(tweet => {
    const savedButtonState = localStorage.getItem(
      `tweetCardButtonState_${tweet.id}`
    );
    return {
      ...tweet,
      isFollowing: savedButtonState === 'true',
    };
  });
  return tweets;
};

export const updateFollowerCount = async (userId, newFollowerCount) => {
  const response = await axios.put(`users/${userId}`, {
    followers: newFollowerCount,
  });
  return response.data;
};

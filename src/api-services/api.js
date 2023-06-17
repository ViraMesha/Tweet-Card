import axios from 'axios';
axios.defaults.baseURL = 'https://648990165fa58521caafd515.mockapi.io/';

export const fetchTweets = async page => {
  const response = await axios.get(`users?page=${page}&limit=6`);

  return response.data;
};

export const updateFollowerCount = async (userId, newFollowerCount) => {
  const response = await axios.put(`users/${userId}`, {
    followers: newFollowerCount,
  });
  return response.data;
};

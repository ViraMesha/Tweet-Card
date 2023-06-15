export const formatFollowerCount = count => {
  return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

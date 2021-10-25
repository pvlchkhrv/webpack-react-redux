import axios from 'axios';
import {setIsFetching, setRepos} from "../reducers/reposReducer";

export const getRepos = (searchQuery = 'stars:%3E1', currentPage, perPage) => {
  if (searchQuery === '') {
    searchQuery = 'stars:%3E1'
  }
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&page=${currentPage}&per_page=${perPage}`);
    dispatch(setRepos(response.data));
  }
};

export const getCurrentRepo = async (username, repoName) => {
  const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
};

export const getCotributors = async (username, repoName, setContributors) => {
  const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}/contributors?page=1&per_page=10`)
  setContributors(response.data)
}

const SET_REPOS = 'SET_REPOS';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';


const initialState = {
  items: [],
  isFetching: false,
  currentPage: 1,
  perPage: 10,
  totalCount: 0,
}

export const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REPOS:
      return {...state, items: action.payload.items, isFetching: false};
    case SET_IS_FETCHING:
      return {...state, isFetching: action.payload};
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.payload};
    default:
      return state;
  }
};

export const setRepos = (repos) => ({type: SET_REPOS, payload: repos});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, payload: isFetching});
export const setCurrentPage = (page) => ({type: SET_IS_FETCHING, payload: page});

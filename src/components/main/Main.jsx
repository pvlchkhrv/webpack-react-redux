import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../../actions/repos";
import Repo from "./repo/Repo";
import './main.less';
import {setCurrentPage} from "../../reducers/reposReducer";
import {createPages} from '../../utils/pagesCreator';

const Main = () => {
  const dispatch = useDispatch();
  const repos = useSelector(state => state.repos.items);
  const isFetching = useSelector(state => state.repos.isFetching);
  const currentPage = useSelector(state => state.repos.currentPage);
  const totalCount = useSelector(state => state.repos.totalCount);
  const perPage = useSelector(state => state.repos.perPage);
  const [searchValue, setSearchValue] = useState('');
  const pagesCount = Math.ceil(totalCount / perPage);
  const pages = [];
  createPages(pages, pagesCount, currentPage);

  const onClickHandler = () => {
    dispatch(setCurrentPage(1));
    dispatch(getRepos(searchValue));
  }

  useEffect(() => {
    dispatch(getRepos(searchValue, currentPage, perPage));
  }, []);
  return (
      <div>
        <div className="search">
          <input type="text"
                 placeholder='Type repo name'
                 className='search-input'
                 onChange={event => setSearchValue(event.target.value)}
                 value={searchValue}
          />
          <button className='search-btn' onClick={onClickHandler}>Search</button>
        </div>
        {
          isFetching
              ? <div className='fetching'></div>
              : repos.map(repo =>
                  <Repo repo={repo}/>
              )
        }
        <div className='pages'>
          {pages.map((page, index) =>
              <span key={index}
                    className={currentPage === page ? 'current-page' : 'page'}
                    onClick={() => dispatch(setCurrentPage(page))}
              >
                {page}
              </span>)}
        </div>
      </div>
  );
};

export default Main;

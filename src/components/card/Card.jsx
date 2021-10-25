import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getCurrentRepo} from "../../actions/repos";
import './card.less';

const Card = (props) => {
  const {userName, repoName} = useParams();
  const [repo, setRepo] = useState({owner: {}});
  console.log('CARD');

  // useEffect(() => {
  //   getCurrentRepo(userName, repoName)
  //       .then(res => setRepo(res.data));
  // }, []);

  return (
      <div>
        <button onClick={() => props.history.goBack()} className='back-btn'>BACK</button>
        <div className="card">
          <img src={repo.owner.avatar_url} alt=""/>
          <div className="name">{repo.name}</div>
          <div className="stars">{repo.stargazers.count}</div>
        </div>
      </div>
  );
};

export default Card;

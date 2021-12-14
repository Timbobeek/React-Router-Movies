import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom'

export default function SavedList(props) {
  const {url} = useRouteMatch();

  // console.log('url', url)

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div className="home-button" >
        <Link to={`${url}`}>
          Home
        </Link>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {Link, Route, Switch} from 'react-router-dom';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          //console.log(response.data[0]);
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div className='App'>
      {/* <nav>
        <div className='nav-links'>
          <div>
            <Link to='/'>Movie List </Link>
          </div>
          <div>
            <Link to='/movies/:movieID'>Movie</Link>
          </div>

        </div>

      </nav> */}


      <SavedList list={[ /* This is stretch */]} />    

      <Switch>
        <Route path="/movies/:id">
          <Movie movies={movieList} />
        </Route>
        <Route path="/">
          <MovieList movies={movieList} />
        </Route>
      </Switch>

        
    </div>
  );
}

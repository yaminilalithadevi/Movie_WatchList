
import React, { useEffect, useState } from 'react';
//import { BsSearch } from 'react-icons/bs';
import { BsBookmarkPlusFill } from "react-icons/bs";
import MovieCard from './Moviecard';
import { useMyContext } from '../context/Provider';
//import SearchIcon from './SearchIcon.svg';

const SearchBar = () => {
  const { signIn } = useMyContext();

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=58c58a31'
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search); 
  }
  useEffect(() => {
    searchMovies('Harry potter');
  }, []);
  
 
  console.log("Main Page movies",movies)
  
  return (

<div>

<div className="container mt-4 p-3">
      <div className="card p-2">
        <div className="card-body">
          <h2 className="card-title mb-3">Welcome to  <span style={{ color: '#FF204E' }}>Watchlist</span></h2>
          <p className="card-text mt-3">
            Browse movies, add them to watchlist, and share them with friends.
          </p>
          <p className='m-0' > 
          Just click    <BsBookmarkPlusFill />   to add a movie, the poster to see more details on to mark the movie as watched.
          </p>
        </div>
      </div>
    </div> 



<div className="container mt-4">
        <div className="input-group">
          
            <input type="text" className="form-control" placeholder="Search..." value={searchTerm}
          onChange={(e) =>setSearchTerm(e.target.value)}/>
           <div className="input-group-append">
          
            <button className="btn btn-outline-secondary"   type="button" style={{ backgroundColor: '#FF204E', borderColor: '#FF204E',color:'white' }} onClick={() =>searchMovies(searchTerm)} >
              
              Search</button>
           </div>
        </div>
    </div> 
    <div className='app'>
   


   

<div className="container mt-4">
  <div className="row row-cols-1 row-cols-md-4 g-4 ">
    {movies?.length > 0 ? (
      movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} index={index} />
      ))
    ) : (
      <div className="col">
        <h2>No movies Found</h2>
      </div>
    )}
  </div>
</div>


    </div>
    </div>
  );
};


export default SearchBar;



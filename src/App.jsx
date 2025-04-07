import './App.css'
import React from 'react'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'
import { useState } from 'react'

import { useEffect } from 'react'

// 6b08bbda

const API_URL = "http://www.omdbapi.com?apikey=6b08bbda"

function App() {

  const [searchTerm, setSearchTerm] = useState("")
  const [movies, setMovies] = useState([])

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()


    console.log(data)

    setMovies(data.Search)


  }


  return (
    <div className='app'>

      <h1>MovieLand</h1>

      <div className='search'>

        <input
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}

        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}

        />
      </div>
      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => (
              <div key={movie.imdbID}>  {/* Correct key prop */}
              <MovieCard movie={movie} />
            </div>

          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No Movies Found</h2>
        </div>
      )

      }

    </div>
  )
}

export default App

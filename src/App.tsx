import './App.css';
import api from './api/axiosConfig';
import { useEffect, useState } from 'react';
import Movie from './model/movie';
import Layout from './components/Layout';
import { Routes, Route, Router, useNavigation, useNavigate } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/review/Reviews';
import Review from './model/review';
import NotFound from './components/notFound/NotFound';



const App = () =>  {

  const [movies, setMovies] = useState<Array<Movie>>()
  const [movie, setMovie] = useState<Movie>()
  const [reviews, setReviews] = useState<Array<Review>>()

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies")
      setMovies(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  const getMovieByImdbId = async (imdbId: string) => {
    try {
      const response = await api.get(`/api/v1/movies/${imdbId}`)

      const singleMovie: Movie = response.data

      setMovie(singleMovie)

      setReviews(singleMovie.reviewIds)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className='relative bg-black h-screen'>
      <Header />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home movies={movies ?? []} />} />
          <Route path='/Trailer/:ytTrailerId' element={<Trailer />} />
          <Route path='/Reviews/:imdbId' element={<Reviews getMoviedata={getMovieByImdbId} movie={movie} reviews={reviews ?? []} setReviews={setReviews as any} />} />
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;

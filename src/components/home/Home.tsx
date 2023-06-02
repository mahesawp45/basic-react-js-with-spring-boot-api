import React from 'react'
import Movie from '../../model/movie'
import Hero from '../hero/Hero';

interface HomeProps {
    movies: Array<Movie>;
}

const Home: React.FC<HomeProps> = ({ movies }) => {
    return (
        <Hero movies={movies} />
    )
}

export default Home

import React from 'react'
import Movie from '../../model/movie';
import Carousel from 'react-material-ui-carousel'
import { Button, Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import './Hero.css'
import { Link, useNavigate } from 'react-router-dom';

interface HeroProps {
    movies: Array<Movie>;
}



const Hero: React.FC<HeroProps> = ({ movies }) => {

    const navigate = useNavigate();

    const reviews = (movieId: string) => {
        navigate(`/Reviews/${movieId}`);
    }


    return (
        <div className='movie-carousel-container'>
            <Carousel>
                {
                    movies.map((movie) => {

                        // here is how to send dynamic variable to css with tsx
                        const inlineStyle: React.CSSProperties = {
                            ['--img' as any]: `url(${movie.backdrops[0]})`,
                        };

                        return (
                            <Paper key={movie.title}>
                                <div className="movie-card-container">
                                    <div className="movie-card" style={inlineStyle}>
                                        <div className="movie-detail">
                                            <div className="movie-poster">
                                                <img src={movie.poster} alt={movie.title} />
                                            </div>
                                            <div className="movie-title">
                                                <h4>{movie.title}</h4>
                                            </div>
                                            <div className="movie-buttons-container">
                                                <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                                    <div className="play-button-icon-container">
                                                        <FontAwesomeIcon className="play-button-icon"
                                                            icon={faCirclePlay}
                                                        />
                                                    </div>
                                                </Link>

                                                <div className="movie-review-button-container">
                                                    <button
                                                        type="button"
                                                        onClick={() => reviews(movie.imdbId)}
                                                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                    >
                                                        Reviews
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Hero
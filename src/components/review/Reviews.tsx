import React, { useEffect, useRef } from 'react'
import Movie from '../../model/movie'
import Review from '../../model/review'
import { useParams } from 'react-router-dom'
import ReviewForm from './components/ReviewForm'
import api from '../../api/axiosConfig'
import './Reviews.css'

interface ReviewsProps {
    getMoviedata: any,
    movie: Movie | undefined,
    reviews: Array<Review>,
    setReviews: (update: Array<Review> | {}) => any,
}

const Reviews: React.FC<ReviewsProps> = ({ getMoviedata, movie, reviews, setReviews }) => {

    const refText = useRef()
    const params = useParams()
    const imdbId: string = params.imdbId as string

    useEffect(() => {
        getMoviedata(imdbId)
    }, [])


    const addReview = async (e: any) => {
        e.preventDefault();

        const rev: any = refText.current;

        try {
            const response = await api.post("/api/v1/reviews", { reviewBody: rev.value, imdbId: imdbId });

            const updatedReviews = [...reviews, { body: rev.value }];

            rev.value = "";

            setReviews(updatedReviews);
        }
        catch (err) {
            console.error(err);
        }

    }

    // here is how to send dynamic variable to css with tsx
    const inlineStyle: React.CSSProperties = {
        ['--img' as any]: `url(${movie?.backdrops[0]})`,
    };

    return (
        <div className="overflow-hidden py-32 bg-gray-950 bg-reviews" style={inlineStyle}>
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                    <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8 relative" style={{ 'width': '100vw' }}>
                        <ReviewForm label="Write a Review?" refText={refText} value='' handleSubmit={addReview as any} />
                        {

                            (reviews.length !== 0) ? <div className='mt-5 absolute h-72 overflow-y-scroll bg-gray-950 bg-opacity-80 backdrop-filter backdrop-blur-md shadow-lg space-y-10 p-4 text-white rounded-md' style={{ width: "40vw" }}>
                                {
                                    reviews?.map((review, index) => (

                                        <div key={index}>
                                            <p className='mb-6'>
                                                {review.body}
                                            </p>
                                        </div>
                                    ))
                                }

                            </div>
                                : <div></div>
                        }

                    </div>
                    <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                        <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                            <img
                                src={movie?.poster}
                                alt=""
                                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl object-cover"
                            />
                        </div>
                        <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                            <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                                <img
                                    src={movie?.backdrops[0]}
                                    alt=""
                                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl object-cover"
                                />
                            </div>
                            <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                                <img
                                    src={movie?.backdrops[1]}
                                    alt=""
                                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl object-cover"
                                />
                            </div>
                            <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                <img
                                    src={movie?.backdrops[2]}
                                    alt=""
                                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews

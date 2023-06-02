import Review from "./review";

type Movie = {
    id: string;
    imdbId: string;
    title: string;
    releaseDate: string;
    trailerLink: string;
    genres: string[];
    poster: string;
    backdrops: string[];
    reviewIds: Review[];
}
  
export default Movie
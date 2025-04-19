import { MovieDetails } from "./entity/movie-detail";
import { Movie } from "./entity/movie";

export interface MovieRepository {
  getMovies(): Promise<Movie[]>;
  getMovieDetails(id: number): Promise<MovieDetails>
}
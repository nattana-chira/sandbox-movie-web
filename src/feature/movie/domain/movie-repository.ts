import { Movie } from "./movie.entity";

export interface MovieRepository {
  getMovies(): Promise<Movie[]>;
}
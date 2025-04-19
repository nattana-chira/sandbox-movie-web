import { Movie } from "./movie.entity";

export interface MovieRepository {
  getPopular(): Promise<Movie[]>;
}
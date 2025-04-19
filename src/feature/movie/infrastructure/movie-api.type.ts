import { Movie } from "../domain/movie.entity";

export type MovieResponse = {
  data: Movie[];
  total: number;
  page: number;
};

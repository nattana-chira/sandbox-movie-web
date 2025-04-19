import { Movie } from "../domain/entity/movie";

export type MovieResponse = {
  data: Movie[];
  total: number;
  page: number;
};

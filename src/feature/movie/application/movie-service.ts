import { MovieRepository } from "../domain/movie-repository";
import { Movie } from "../domain/movie.entity";
import { MovieAPI } from "../infrastructure/movie-api-service";

const createMovieService = (movieRepo: MovieRepository) => {
  return {
    getPopular: async (): Promise<Movie[]> => {
      return await movieRepo.getPopular();
    }
  }
};

export const movieService = createMovieService(MovieAPI)
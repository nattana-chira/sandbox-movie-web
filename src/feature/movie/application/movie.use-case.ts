import { MovieDetails } from "../domain/entity/movie-detail";
import { MovieRepository } from "../domain/movie-repository";
import { Movie } from "../domain/entity/movie";
import { MovieAPI } from "../infrastructure/movie-api-service";

const createMovieUseCase = (movieRepo: MovieRepository) => {
  return {
    getMovies: async (): Promise<Movie[]> => {
      return await movieRepo.getMovies();
    },

    getMovieDetails: async (id: number): Promise<MovieDetails> => {
      return await movieRepo.getMovieDetails(id);
    }
  }
};

export const movieUseCase = createMovieUseCase(MovieAPI)
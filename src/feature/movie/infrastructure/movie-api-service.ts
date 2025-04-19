import axios from "@/lib/axiosInstance";
import { MovieRepository } from "../domain/movie-repository";
import { Movie } from "../domain/entity/movie";
import { MovieDetails } from "../domain/entity/movie-detail";

export const MovieAPI: MovieRepository = {
  getMovies: async (): Promise<Movie[]> => {
    const response = await axios.get<Movie[]>("/movies")
    return response.data
  },

  getMovieDetails: async (id: number): Promise<MovieDetails> => {
    const response = await axios.get<MovieDetails>(`/movies/${id}`)
    return response.data
  }
}
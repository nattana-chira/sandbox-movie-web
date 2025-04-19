import axios from "@/lib/axiosInstance";
import { MovieRepository } from "../domain/movie-repository";
import { Movie } from "../domain/movie.entity";

export const MovieAPI: MovieRepository = {
  getMovies: async (): Promise<Movie[]> => {
    const response = await axios.get<Movie[]>("/movies")
    return response.data
  }
}
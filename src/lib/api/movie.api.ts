import axios from "../axiosInstance";

export type Movie = {
  id: number;
  title: string;
  overview: string;
  releaseDate: string;
  posterUrl: string;
  backdropUrl: string;
  voteAverage: number;
};

type MovieResponse = {
  data: Movie[];
};

export const MovieAPI = {
  getPopular: async (): Promise<MovieResponse> => await axios.get("/movies")
}
import { useState } from "react"
import { handleError } from "@/lib/utils/apiErrorHandler"
import { Movie } from "../domain/entity/movie"
import { movieUseCase } from "../application/movie.use-case"
import { MovieDetails } from "../domain/entity/movie-detail"

export default function useMovies() {
  const [featuredMovie, setFeaturedMovie] = useState<Movie>()
  const [movies, setMovies] = useState<Movie[]>([])
  const [movieDetails, setMovieDetails] = useState<MovieDetails>()
  
  const fetchMovies = async () => {
    try {
      const _movies = await movieUseCase.getMovies()
      const [_featuredMovie, ...restMovies] = _movies
      setMovies(restMovies)
      setFeaturedMovie(_featuredMovie)
      
    } catch (e) {
      handleError(e)
    }
  }

  const fetchMovieDetails = async (id: number) => {
    try {
      const _movieDetails = await movieUseCase.getMovieDetails(id)
      setMovieDetails(_movieDetails)
    } catch (e) {
      handleError(e)
    }
  }

  return { movies, movieDetails, featuredMovie, setMovieDetails, fetchMovies, fetchMovieDetails }
}
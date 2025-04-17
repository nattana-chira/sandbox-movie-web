import { useState } from "react"
import { Movie } from "../components/MovieRow"
import { MovieAPI } from "@/lib/api/movie.api"
import { handleError } from "@/lib/utils/apiErrorHandler"

export default function useMovies() {
  const [featuredMovie, setFeaturedMovie] = useState<Movie>()
  const [movies, setMovies] = useState<Movie[]>([])
  
  const fetchMovies = async () => {
    try {
      const response = await MovieAPI.getPopular()
      const _movies = response.data
      const [_featuredMovie, ...restMovies] = _movies
      setMovies(restMovies)
      setFeaturedMovie(_featuredMovie)
      
    } catch (e) {
      handleError(e)
    }
  }

  return { movies, featuredMovie, fetchMovies }
}
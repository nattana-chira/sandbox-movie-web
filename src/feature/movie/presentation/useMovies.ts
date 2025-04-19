import { useState } from "react"
import { handleError } from "@/lib/utils/apiErrorHandler"
import { Movie } from "../domain/movie.entity"
import { movieService } from "../application/movie.use-case"

export default function useMovies() {
  const [featuredMovie, setFeaturedMovie] = useState<Movie>()
  const [movies, setMovies] = useState<Movie[]>([])
  
  const fetchMovies = async () => {
    try {
      const _movies = await movieService.getMovies()
      const [_featuredMovie, ...restMovies] = _movies
      setMovies(restMovies)
      setFeaturedMovie(_featuredMovie)
      
    } catch (e) {
      handleError(e)
    }
  }

  return { movies, featuredMovie, fetchMovies }
}
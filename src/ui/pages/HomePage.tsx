'use client';

import IconInfo from "@/ui/components/IconInfo";
import IconNotification from "@/ui/components/IconNotification";
import IconSearch from "@/ui/components/IconSearch";
import IconTopTen from "@/ui/components/IconTopTen";
import MovieRow from "@/feature/movie/presentation/MovieRow";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import useMovies from "../../feature/movie/presentation/useMovies";
import MovieDetailModal from "./MovieDetailPage";
import { Movie } from "@/feature/movie/domain/entity/movie";
import { useRouter, useSearchParams } from "next/navigation";

export default function HomePage() {
  const { movies, featuredMovie, fetchMovies } = useMovies()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const movieId = searchParams.get('movieId')

  useEffect(() => {
    fetchMovies()

    if (movieId) {
      setIsOpen(true)
    }
  }, [])

  const onSelectMovie = (movie: Movie) => {
    setIsOpen(true)
    router.push(`?movieId=${movie.id}`, { scroll: false });
  }

  const onMovieDetailModalClose = () => {
    setIsOpen(false)
    router.push('/', { scroll: false });
  }

  return (
    <div className="overflow-x-hidden m-h-[100vh] bg-black">
      <MovieDetailModal isOpen={isOpen} onClose={onMovieDetailModalClose} />
      
      {/* Navbar */}
      <nav className="flex absolute w-full z-10 justify-between items-center px-6 py-4 text-white navbar">
        <div className="text-red-600 text-2xl font-bold">
          <Image
            src="/netflix-icon.png"
            alt="Netflix Logo"
            width={150}
            height={10}
            priority
          />
        </div>
        <div className="flex justify-between items-center w-full text-lg ml-8">
          <ul className="flex gap-4">
            <li className="font-bold">Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>

          <ul className="flex gap-4 mr-6">
            <li><IconSearch /></li>
            <li>Kids</li>
            <li><IconNotification /></li>
            <li className="flex gap-2">
              <Image
                src="/netflix-profile-icon.png"
                alt="Profile Logo"
                width={31}
                height={10}
                priority
              />
              <ChevronDownIcon className="h-5 w-5 text-white mt-1" />
            </li>
          </ul>
        </div>
      </nav>

      {/* Banner */}
      <div className="relative h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url(${featuredMovie?.backdropUrl})` }}>
        <div className="absolute inset-0 flex flex-col justify-center px-10">
          {featuredMovie && (
            <Fragment>
              <h1 className="text-white text-4xl md:text-6xl font-bold mb-2">{featuredMovie.title}</h1>
              <div className="flex items-center gap-3">
                <IconTopTen />
                <div className="text-white font-bold text-xl">#1 in TV Shows Today</div>
              </div>
              <p className="text-white mt-4 max-w-lg">
                {featuredMovie.overview}
              </p>
              <div className="mt-4 flex gap-2">
                <button className="w-35 h-13 bg-white text-black px-4 py-2 rounded font-bold">▶ Play</button>
                <button className="flex items-center justify-center w-40 h-13 bg-gray-600 text-white px-4 py-2 rounded gap-2 font-bold">
                  <IconInfo />
                  More Info
                </button>
              </div>
            </Fragment>
          )}

        </div>
      </div>

      {/* Movie Row */}
      <MovieRow categoryTitle={'Popular on Netflix'} movies={movies} className="-mt-75 mb-10" onSelectMovie={onSelectMovie} />
    </div>
  );
}

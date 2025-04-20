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
import FeaturedMovieLoadingSkeleton from "@/feature/movie/presentation/FeaturedMovieLoadingSkeleton";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useTranslations } from 'next-intl';
import ThemeToggle from "../components/ThemeToggle";

export default function HomePage() {
  const { movies, featuredMovie, fetchMovies } = useMovies()
  const [isOpen, setIsOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const movieId = searchParams.get('movieId')
  const t = useTranslations('HomePage');

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
    <div className="home-page overflow-x-hidden min-h-[100vh] pb-50">
      <MovieDetailModal isOpen={isOpen} onClose={onMovieDetailModalClose} />
      
      {/* Navbar */}
      <nav className="flex absolute w-full z-10 justify-between items-center px-6 py-4 text-white-fixed navbar">
        <div className="text-red-600 text-2xl font-bold">
          <Image
            src="/netflix-icon.png"
            alt="Netflix Logo"
            width={150}
            height={10}
            priority
          />
        </div>

        {/* Mobile Only: Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="flex gap-2">
            Browse
            <ChevronDownIcon className="icon-base mt-1" /> 
          </button>
        </div>

        {/* Mobile Only: Main Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-10 w-60 bg-zinc-900 flex flex-col gap-4 px-6 py-4 border-t border-white">
            <ul className="flex flex-col gap-2">
              <li className="font-bold">{t('home')}</li>
              <li>{t('tv_shows')}</li>
              <li>{t('movies')}</li>
              <li>{t('new_and_popular')}</li>
              <li>{t('my_list')}</li>
              <li>{t('browse_by_languages')}</li>
            </ul>
          </div>
        )}

        <div className="flex justify-end md:justify-between items-center w-full text-lg ml-8">
          {/* Desktop Only: Main Menu */}
          <ul className="hidden md:flex gap-4">
            <li className="font-bold">{t('home')}</li>
            <li>{t('tv_shows')}</li>
            <li>{t('movies')}</li>
            <li>{t('new_and_popular')}</li>
            <li>{t('my_list')}</li>
            <li>{t('browse_by_languages')}</li>
          </ul>

          <ul className="flex gap-4 mr-6">
            <li><ThemeToggle /></li>
            <li><LanguageSwitcher /></li>
            <li><IconSearch /></li>
            <li>{t('kids')}</li>
            <li><IconNotification /></li>
            <li className="flex gap-2">
              <Image
                src="/netflix-profile-icon.png"
                alt="Profile Logo"
                width={31}
                height={10}
                priority
              />
              <ChevronDownIcon className="h-5 w-5 mt-1" />
            </li>
          </ul>
        </div>
      </nav>

      {!featuredMovie && <FeaturedMovieLoadingSkeleton />}

      {featuredMovie && (
        <Fragment>
          {/* Featured Movie Banner */}
          <div className="relative bg-cover bg-center responsive-banner" style={{ backgroundImage: `url(${featuredMovie.backdropUrl})` }}>
            <div className="absolute inset-0 flex flex-col justify-center text-white-fixed px-10">
              {featuredMovie && (
                <Fragment>
                  <h1 className="text-4xl font-bold mb-2">{featuredMovie.title}</h1>
                  <div className="flex items-center gap-3">
                    <IconTopTen className="icon-xl" />
                    <div className="font-bold text-xl">#1 {t('in_tv_shows_today')}</div>
                  </div>
                  <p className="mt-4 max-w-lg text-base">
                    {featuredMovie.overview}
                  </p>
                  <div className="mt-4 flex gap-2">
                    <button className="button-xl text-xl bg-white text-black rounded font-bold">
                      ▶ {t('play')}
                    </button>
                    <button className="button-2xl text-xl flex items-center justify-center bg-gray-600 rounded font-bold">
                      <IconInfo className="icon-base"/>
                      {t('more_info')}
                    </button>
                  </div>
                </Fragment>
              )}

            </div>
          </div>

          {/* Movie Row */}
          <MovieRow categoryTitle={'Popular on Netflix'} movies={movies} className="-mt-[10vw] mb-10" onSelectMovie={onSelectMovie} />
        </Fragment>
      )}
    </div>
  );
}
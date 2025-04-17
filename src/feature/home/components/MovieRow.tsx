'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import ScrollArrowButton from './MovieArrow';

export type Movie = {
  id: number;
  title: string;
  overview: string;
  releaseDate: string;
  posterUrl: string;
  backdropUrl: string;
  voteAverage: number;
};

type Props = {
  categoryTitle: string;
  movies: Movie[];
};

export default function MovieRow({ categoryTitle, movies }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="px-6 py-4">
      <h2 className="text-white text-xl font-semibold">{categoryTitle}</h2>

      {/* Arrows */}
      <div className="relative">
        <ScrollArrowButton direction="left" onClick={scroll} />
        <ScrollArrowButton direction="right" onClick={scroll} />
      </div>

      {/* Movie Row */}
      <div className="relative w-500">
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden overflow-y-hidden gap-2 scrollbar-hide scroll-smooth snap-x snap-mandatory"
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="min-w-[375px] snap-start shrink-0 hover:scale-105 transition-transform duration-200"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.backdropUrl}`}
                width={375}
                height={211}
                alt={movie.title}
                className="rounded"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
'use client';

import { useRef } from 'react';
import ScrollArrowButton from './MovieArrow';
import { Movie } from '../domain/entity/movie';
import MovieCard from './MovieCard';

type Props = {
  categoryTitle: string;
  movies: Movie[];
  className?: string;
  onSelectMovie: Function;
};

export default function MovieRow({ categoryTitle, movies, onSelectMovie, className }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className={"px-10 py-4 " + className}>
      <h2 className="text-3xl font-semibold relative text-white-fixed mb-2">{categoryTitle}</h2>

      {/* Arrows */}
      <div className="relative -mt-17">
        <ScrollArrowButton direction="left" onClick={scroll} />
        <ScrollArrowButton direction="right" onClick={scroll} />
      </div>

      {/* Movie Row */}
      <div className="relative w-[calc(96vw)]">
        <div
          ref={scrollRef}
          className="flex hide-scrollbar overflow-y-scroll scrollbar-hide scroll-smooth snap-x snap-mandatory py-18 gap-2"
        >
          {movies.map((movie, index) => (
            <MovieCard 
              key={index}
              movie={movie}
              onSelectMovie={() => onSelectMovie(movie)}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
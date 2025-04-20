'use client';

import Image from 'next/image';
import { useRef } from 'react';
import ScrollArrowButton from './MovieArrow';
import { Movie } from '../domain/entity/movie';

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
      <h2 className="text-3xl font-semibold relative text-white mb-2">{categoryTitle}</h2>

      {/* Arrows */}
      <div className="relative">
        <ScrollArrowButton direction="left" onClick={scroll} />
        <ScrollArrowButton direction="right" onClick={scroll} />
      </div>

      {/* Movie Row */}
      <div className="relative w-[calc(96vw)]">
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden overflow-y-hidden gap-2 scrollbar-hide scroll-smooth snap-x snap-mandatory"
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="snap-start shrink-0 hover:scale-105 transition-transform duration-200 cursor-pointer"
              onClick={() => onSelectMovie(movie)}
            >
     
                <Image
                  src={`${movie.backdropUrl}`}
                  width={380}
                  height={211}
                  alt={movie.title}
                  className="w-[45vw] sm:w-[40vw] md:w-[23vw] lg:w-[15vw] rounded"
                />
          
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
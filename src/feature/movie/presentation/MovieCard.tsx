import Image from "next/image";
import { Movie } from "../domain/entity/movie";
import { useState } from "react";
import { PlusIcon, PlayIcon, HandThumbUpIcon } from '@heroicons/react/24/solid'
import CircleIconWrapper from "@/ui/components/CircleIconWrapper";

type Props = {
  movie: Movie;
  onSelectMovie: (movie: Movie) => void
};

export default function MovieCard({ movie, onSelectMovie }: Props) {
  const [isHovered, setHover] = useState<boolean>()

  return (
    <div
      className="snap-start shrink-0 hover:scale-150 transition-transform duration-200 cursor-pointer"
      onClick={() => onSelectMovie(movie)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image
        src={`${movie.backdropUrl}`}
        width={380}
        height={211}
        alt={movie.title}
        className={`responsive-movie-card ${isHovered ? 'rounded-t' : 'rounded'}`}
      />
      {isHovered && (
        <div className="responsive-movie-card min-h-20 text-xs text-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-2 rounded-b">
          <div className="flex text-white gap-1 mb-2">
            <CircleIconWrapper>
              <PlayIcon className="w-3 h-3" />
            </CircleIconWrapper>

            <CircleIconWrapper>
              <PlusIcon className="w-3 h-3" />
            </CircleIconWrapper>
            
            <CircleIconWrapper>
              <HandThumbUpIcon className="w-3 h-3" />
            </CircleIconWrapper>
          </div>

          <div className="flex items-center text-[#888] gap-2 mb-1">
            <span className="text-2xs border-white border-1 px-2">16+</span>
            <div className="text-2xs">8 Episodes</div>
          </div>

          <div className="text-xs-fixed">
            {movie.title}
          </div>
        </div>
      )}
    </div>
  )
}
'use client';

import Image from "next/image";
import { Episode, MovieDetails } from "../domain/entity/movie-detail";

type Props = {
  movieDetails?: MovieDetails
  episode: Episode,
  isFirstEp?: boolean
};

export default function MovieEpisode({ movieDetails, episode, isFirstEp = false }: Props) {
  if (!movieDetails)
    return null

  return (
    <div 
      key={episode.id} 
      className={`
        episode-panel flex items-center transition gap-4 px-4 py-8 rounded border-b-1 border-[#404040] 
        ${isFirstEp ? 'first-episode' : ''}
      `}>
      <div className="text-2xl font-bold text-gray-400 w-10 text-right">{episode.number}</div>
      <div className="w-32 h-20 relative rounded overflow-hidden flex-shrink-0">
        <Image
          src={movieDetails.backdropUrl}
          alt={episode.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-white">{episode.title}</h3>
          <span className="text-sm-fixed text-gray-400">{episode.duration}</span>
        </div>
        <p className="text-sm-fixed text-gray-400 mt-1">{episode.description}</p>
      </div>
    </div>
  )
}
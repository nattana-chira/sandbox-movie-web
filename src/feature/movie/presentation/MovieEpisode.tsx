'use client';

import Image from "next/image";
import { Movie } from "../domain/movie.entity";
import { Episode } from "../domain/episode.entity";

type Props = {
  movie?: Movie
  ep: Episode
  isFirstEp?: boolean
};

export default function MovieEpisode({ movie, ep, isFirstEp = false }: Props) {
  if (!movie)
    return null

  return (
    <div key={ep.id} className={`flex items-start gap-4 hover:bg-zinc-700 transition px-4 py-8 rounded border-b-1 border-[#404040] ${isFirstEp ? 'bg-zinc-800' : ''}`}>
      <div className="text-2xl font-bold text-gray-300 w-10 text-right">{ep.number}</div>
      <div className="w-32 h-20 relative rounded overflow-hidden flex-shrink-0">
        <Image
          src={movie.backdropUrl}
          alt={ep.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-white">{ep.title}</h3>
          <span className="text-sm text-gray-400">{ep.duration}</span>
        </div>
        <p className="text-sm text-gray-400 mt-1">{ep.description}</p>
      </div>
    </div>
  )
}
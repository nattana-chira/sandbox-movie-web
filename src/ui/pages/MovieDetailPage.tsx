import Image from "next/image";
import { Dialog, DialogPanel } from "@headlessui/react";
import IconClose from "../components/IconClose";
import { Movie } from "@/feature/movie/domain/movie.entity";
import { Fragment } from "react";
import { Episode } from "@/feature/movie/domain/episode.entity";
import MovieEpisode from "@/feature/movie/presentation/MovieEpisode";
import IconTopTen from "../components/IconTopTen";
import { MovieDetails } from "@/feature/movie/domain/movie-detail.entity";
import JoinedText from "../components/JoinedText";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  movie?: Movie;
}

const mockEpisodes: Episode[] = [
  {
    id: 1,
    number: 25,
    title: "Maomao and Maomao",
    duration: "24m",
    thumbnail: "/images/ep25.jpg",
    description: "The ladies of the inner palace develop a keen interest in novels. Maomao joins Gyokuyou and her daughter Lingli for a walk and makes a new friend."
  },
  {
    id: 2,
    number: 26,
    title: "The Caravan",
    duration: "24m",
    thumbnail: "/images/ep26.jpg",
    description: "A caravan selling foreign goods comes to the inner palace. Later, after perfumed oils come into vogue, Maomao notices something odd about their smell."
  },
  {
    id: 3,
    number: 27,
    title: "Corpse Fungus",
    duration: "24m",
    thumbnail: "/images/ep27.jpg",
    description: "At Jinshi's request, Maomao investigates poisonous mushrooms growing near the inner palace. Later, she learns that a mid-ranking concubine has died."
  }
]

const mockMovieDetails: MovieDetails = {
  year: 2021,
  totalSeasons: 2,
  audienceAge: "18+",
  adultTags: ["violence", "strong language", "sexual content"],
  casts: [
    "John Doe",
    "Jane Smith",
    "Michael Johnson",
    "Emily Brown"
  ],
  genre: ["Drama", "Crime", "Thriller"],
  emotions: ["intense", "dark", "suspenseful", "heartfelt"]
};

export default function MovieDetailModal({ isOpen, onClose, movie }: Props) {
  const [firstEp, ...restEps] = mockEpisodes

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true" />
      <div className="fixed inset-0 flex items-start justify-center overflow-y-auto">

          <DialogPanel className="relative w-full max-w-5xl mx-auto rounded-xl bg-zinc-900 text-white shadow-xl overflow-hidden mt-10">
            <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 text-white hover:text-red-400">
              <IconClose />
            </button>

            {movie && (
              <Fragment>
                {/* Movie banner */}
                <div className="relative h-128 w-full">
                  <Image src={movie.backdropUrl} alt={movie.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                  <div className="absolute bottom-0 pl-6 text-2xl font-bold">{movie.title}</div>
                  <button className="absolute bottom-0 ml-6 mb-20 w-65 h-15 bg-white text-black rounded font-bold text-2xl">
                    ▶ Next Episode
                  </button>
                </div>

                {/* Movie details */}
                <div className="p-6 space-y-4">
                  <div className="flex max-ful gap-6">
                    <div className="w-[60%]">
                      <div className="flex justify-between items-start mb-4">
                        <h2 className="text-xl text-gray-300">{mockMovieDetails.year} {mockMovieDetails.totalSeasons} Seasons [HD]</h2>
                      </div>
                      
                      <div className="flex gap-2 mb-4">
                        <span className="text-sm border-white border-1 pt-1 px-2">16+</span>
                        {mockMovieDetails.adultTags.join(', ')}
                      </div>

                      <div className="flex gap-2 mb-4 text-xl font-bold">
                        <IconTopTen />
                        1# in TV Shows Today
                      </div>
                      
                      <p className="mb-6">
                        {movie.overview}
                      </p>
                    </div>
                    
                    <div className="w-[40%]">
                      {/* Cast */}
                      <div className="text-gray-400 text-sm mb-6">
                        <span>Cast: </span> 
                        {mockMovieDetails.casts.map((name, index) => (
                          <JoinedText 
                            key={index} 
                            text={name} 
                            showComma={index < mockMovieDetails.casts.length - 1} 
                            className="font-medium text-white" 
                          />
                        ))}
                      </div>
            
                      {/* Genre */}
                      <div className="text-gray-400 text-sm mb-6">
                        <span>Genres: </span> 
                        {mockMovieDetails.genre.map((name, index) => (
                          <JoinedText 
                            key={index} 
                            text={name} 
                            showComma={index < mockMovieDetails.genre.length - 1} 
                            className="font-medium text-white" 
                          />
                        ))}
                      </div>
              
                      {/* Emotions */}
                      <div className="text-gray-400 text-sm">
                        <span>This Show Is: </span> 
                        {mockMovieDetails.emotions.map((name, index) => (
                          <JoinedText 
                            key={index} 
                            text={name} 
                            showComma={index < mockMovieDetails.emotions.length - 1} 
                            className="font-medium text-white" 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Episode list */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Episodes</h3>
                    <MovieEpisode movie={movie} ep={firstEp} isFirstEp />
                    {restEps.map((ep) => <MovieEpisode movie={movie} ep={ep} />)}
                  </div>

                </div>
            </Fragment>
            )}
          </DialogPanel>
      </div>
    </Dialog>
  );
}